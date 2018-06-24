import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorService } from './interceptor.service';
import { SearchFilterPipe } from './utils/search-filter.pipe';
import { OnlyNumberDirective } from './utils/only-number.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchFilterPipe,
    OnlyNumberDirective],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      }
    ],
  exports:[SearchFilterPipe,
    OnlyNumberDirective]
})
export class SharedModule { }
