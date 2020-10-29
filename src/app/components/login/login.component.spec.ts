import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

const logFormImitate = {login: "u1@gmail.com", password: "123456", email: "u1.com", check: true};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async(() => {
    component.onSubmit(logFormImitate);
    expect(component.userLogged).toBeTruthy();
  }));

  it('form should be invalid', async(() => {
    component.loginForm.controls['login'].setValue('');
    component.loginForm.controls['password'].setValue('');
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['check'].setValue(false);
    expect(component.loginForm.valid).toBeFalsy();
  }))

  it('form should be valid', async(() => {
    component.loginForm.controls['login'].setValue('u1@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    component.loginForm.controls['email'].setValue('u1@gmail.com');
    component.loginForm.controls['check'].setValue(true);
    expect(component.loginForm.valid).toBeTruthy();
  }))
});
