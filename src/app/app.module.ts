import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseCubeComponent } from './container/course-cube/course-cube.component';
import { UtilsComponent } from './container/utils/utils.component';

const appRoute :Routes=[
  {
    path:'course-cube', component:CourseCubeComponent,
  },
  {
    path:'utils', component:UtilsComponent,
  },
  {
    path:'', redirectTo:'/course-cube',pathMatch:'full'
  },
  {
    path:'**', component:CourseCubeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    CourseCubeComponent,
    UtilsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
