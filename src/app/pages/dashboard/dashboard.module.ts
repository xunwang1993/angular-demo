import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    NbInputModule,
    AutocompleteLibModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
