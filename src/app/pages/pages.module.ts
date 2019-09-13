import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
})
export class PagesModule {
}
