import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PublicGuard } from './public-guard.guard';

describe('PublicGuard', () => {
  let guard: PublicGuard;
  let router: jasmine.SpyObj<Router>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);

    TestBed.configureTestingModule({
      providers: [
        PublicGuard,
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });

    guard = TestBed.inject(PublicGuard);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access when user is not authenticated', (done) => {
    authService.isAuthenticated.and.returnValue(false);

    guard.canActivate().subscribe(result => {
      expect(result).toBeTruthy();
      expect(router.navigate).not.toHaveBeenCalled();
      done();
    });
  });

  it('should redirect when user is authenticated', (done) => {
    authService.isAuthenticated.and.returnValue(true);
    localStorage.setItem('userRole', 'user');

    guard.canActivate().subscribe(result => {
      expect(result).toBeFalsy();
      expect(router.navigate).toHaveBeenCalledWith(['private/user']);
      done();
    });
  });
});
