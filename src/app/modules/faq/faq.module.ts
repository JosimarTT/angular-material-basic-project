import { NgModule } from '@angular/core';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './pages/faq/faq.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    FaqRoutingModule,
    SharedModule
  ]
})
export class FaqModule { }
