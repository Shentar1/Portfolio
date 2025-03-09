import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { ImgConvertComponent } from './img-convert/img-convert.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { WoodlandSupplyComponent } from './woodland-supply/woodland-supply.component';
import { DewittBrothersFoundationsComponent } from './dewitt-brothers-foundations/dewitt-brothers-foundations.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [ImgConvertComponent,OverlaysComponent,WoodlandSupplyComponent,DewittBrothersFoundationsComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements AfterViewInit{
  constructor(@Inject(DOCUMENT) private document: Document){}

  private thisElement?:Element;
  private subHeadings:Array<Element> = [];
  protected heading = "Work Experience";
  protected onClick(e:Event){
    let element = e.currentTarget as HTMLElement;
    let svg = element.getElementsByTagName('svg')[0];
    let about = element.getElementsByTagName('span')[0];
    if(about.className === 'visible'){
      about.animate([{
        //from
        height:about.scrollHeight + 'px',
        },
        {
          //to
          height:'0px',
        }
      ],500)

      element.animate([{height:about.scrollHeight + 60 + 'px'},{height:'50px'}],500).onfinish = ()=>{
        element.style.height = '50px'
      }
      svg.animate([{rotate:'180deg'},{rotate:'0deg'}],500).onfinish = ()=>{
        svg.style.rotate = '0deg'
      }
      about.className = 'hidden'
    }else{
      about.animate([{
        //from
        height:'0px',
        },
        {
          //to
          height:about.scrollHeight + 'px',
        }
      ],500)
      element.animate([{height:'50px'},{height:about.scrollHeight + 60 + 'px'}],500).onfinish = ()=>{
        element.style.height = about.scrollHeight + 60 + 'px';
      }
      svg.animate([{rotate:'0deg'},{rotate:'180deg'}],500).onfinish = ()=>{
        svg.style.rotate = '180deg';
      }
      about.className = 'visible'
    }
  }
  ngAfterViewInit(){
    this.thisElement = this.document.getElementsByTagName('app-work-experience')[0];

    Array.from(this.thisElement.children).forEach(element=>{
      this.subHeadings.push(element);
    });
  }
}
