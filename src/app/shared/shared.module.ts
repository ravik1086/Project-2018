import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './utils/search-filter.pipe';
import { OnlyNumberDirective } from './utils/only-number.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchFilterPipe,
    OnlyNumberDirective],
  exports:[SearchFilterPipe,
    OnlyNumberDirective]
})
export class SharedModule { }
