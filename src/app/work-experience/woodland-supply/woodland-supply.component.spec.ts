import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodlandSupplyComponent } from './woodland-supply.component';

describe('WoodlandSupplyComponent', () => {
  let component: WoodlandSupplyComponent;
  let fixture: ComponentFixture<WoodlandSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodlandSupplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodlandSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
