import { Routes } from '@angular/router';

import { DefaultPageComponent } from './default-page/default-page.component';
import { ServicePageComponent } from './service-page/service-page.component';


export const routes: Routes = [
    {path:'',component:DefaultPageComponent},
    {path:'service-page',component:ServicePageComponent}

];

