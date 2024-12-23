import { Component } from '@angular/core';

import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { HomeServiceAfterNavarComponent } from '../home-service-after-navar/home-service-after-navar.component';
import { ImageAfterNavbarComponent } from '../image-after-navbar/image-after-navbar.component';
import { CardAfterServicesComponent } from '../card-after-services/card-after-services.component';
import { IncludedServicesComponent } from '../included-services/included-services.component';
import { ImageAfterIncludeServicesComponent } from '../image-after-include-services/image-after-include-services.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [NavigationBarComponent,HomeServiceAfterNavarComponent,ImageAfterNavbarComponent,CardAfterServicesComponent,IncludedServicesComponent,ImageAfterIncludeServicesComponent,FooterComponent],
  templateUrl: './default-page.component.html',
  styleUrl: './default-page.component.css'
})
export class DefaultPageComponent {

}
