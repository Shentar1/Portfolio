import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgConvertComponent } from './img-convert.component';

describe('ImgConvertComponent', () => {
  let component: ImgConvertComponent;
  let fixture: ComponentFixture<ImgConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgConvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
