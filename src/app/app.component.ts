import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from "./work-experience/work-experience.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMeComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
