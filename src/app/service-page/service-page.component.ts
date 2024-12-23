import { Component } from '@angular/core';
import { HomeServiceAfterNavarComponent } from '../home-service-after-navar/home-service-after-navar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [HomeServiceAfterNavarComponent,FooterComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {

}
