import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DewittBrothersFoundationsComponent } from './dewitt-brothers-foundations.component';

describe('DewittBrothersFoundationsComponent', () => {
  let component: DewittBrothersFoundationsComponent;
  let fixture: ComponentFixture<DewittBrothersFoundationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DewittBrothersFoundationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DewittBrothersFoundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
