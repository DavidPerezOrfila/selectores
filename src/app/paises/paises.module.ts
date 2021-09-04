import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaisesRoutingModule } from './paises-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [CommonModule, PaisesRoutingModule, ReactiveFormsModule],
})
export class PaisesModule {}
