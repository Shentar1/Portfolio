import { Component } from '@angular/core';
import { ImgConvertComponent } from './img-convert/img-convert.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { WoodlandSupplyComponent } from './woodland-supply/woodland-supply.component';
import { DewittBrothersFoundationsComponent } from './dewitt-brothers-foundations/dewitt-brothers-foundations.component';

@Component({
  selector: 'app-work-experience',
  imports: [ImgConvertComponent,OverlaysComponent,WoodlandSupplyComponent,DewittBrothersFoundationsComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  protected heading = "Work Experience"
}
