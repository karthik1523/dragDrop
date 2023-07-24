import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllposComponent } from './allpos.component';

describe('AllposComponent', () => {
  let component: AllposComponent;
  let fixture: ComponentFixture<AllposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
