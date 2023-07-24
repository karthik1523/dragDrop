import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetFixingComponent } from './asset-fixing.component';

describe('AssetFixingComponent', () => {
  let component: AssetFixingComponent;
  let fixture: ComponentFixture<AssetFixingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetFixingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetFixingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
