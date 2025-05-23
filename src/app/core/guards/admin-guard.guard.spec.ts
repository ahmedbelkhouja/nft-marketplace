import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminGuard } from './admin-guard.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(AdminGuard);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for admin role', (done) => {
    localStorage.setItem('userRole', 'admin');

    guard.canActivate().subscribe(result => {
      expect(result).toBeTruthy();
      expect(router.navigate).not.toHaveBeenCalled();
      done();
    });
  });

  it('should deny access for non-admin role', (done) => {
    localStorage.setItem('userRole', 'user');

    guard.canActivate().subscribe(result => {
      expect(result).toBeFalsy();
      expect(router.navigate).toHaveBeenCalledWith(['public']);
      done();
    });
  });

  it('should deny access when no role is set', (done) => {
    guard.canActivate().subscribe(result => {
      expect(result).toBeFalsy();
      expect(router.navigate).toHaveBeenCalledWith(['public']);
      done();
    });
  });
});
