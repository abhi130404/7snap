import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeServiceAfterNavarComponent } from './home-service-after-navar/home-service-after-navar.component';
import {  ImageAfterNavbarComponent } from './image-after-navbar/image-after-navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CardAfterServicesComponent } from './card-after-services/card-after-services.component';
import { IncludedServicesComponent } from './included-services/included-services.component';
import { ImageAfterIncludeServicesComponent } from './image-after-include-services/image-after-include-services.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultPageComponent } from './default-page/default-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DefaultPageComponent,RouterLink,ImageAfterNavbarComponent,RouterLinkActive,DefaultPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'urban_demo_project';
}
