import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeemployeeComponent } from './welcomeemployee.component';

describe('WelcomeemployeeComponent', () => {
  let component: WelcomeemployeeComponent;
  let fixture: ComponentFixture<WelcomeemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
