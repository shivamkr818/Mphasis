import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomemanagerComponent } from './welcomemanager.component';

describe('WelcomemanagerComponent', () => {
  let component: WelcomemanagerComponent;
  let fixture: ComponentFixture<WelcomemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
