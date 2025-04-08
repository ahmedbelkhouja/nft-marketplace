import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

<<<<<<<< HEAD:src/app/components/ui/common-section/common-section.component.spec.ts
import { CommonSectionComponent } from './common-section.component';

describe('CommonSectionComponent', () => {
  let component: CommonSectionComponent;
  let fixture: ComponentFixture<CommonSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonSectionComponent);
========
import { SellerCardComponent } from './seller-card.component';

describe('SellerCardComponent', () => {
  let component: SellerCardComponent;
  let fixture: ComponentFixture<SellerCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerCardComponent);
>>>>>>>> master:src/app/components/ui/seller-card/seller-card.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
