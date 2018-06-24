import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { CardComponent } from './container/course-cube/card/card.component';
import { CourseCubeFormComponent } from './container/course-cube/course-cube-form/course-cube-form.component';
import { CourseCubeComponent } from './container/course-cube/course-cube.component';
import { LeftNavComponent } from './container/left-nav/left-nav.component';
import { UtilsComponent } from './container/utils/utils.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CourseCubeService } from './service/course-cube.service';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './container/utils/form/form.component';


const appRoute :Routes=[
  {
    path:'home', component:HomeComponent
  },
  {
    path:'course-cube', component:ContainerComponent,
    children:[
      {
        path:'add',component:CourseCubeFormComponent
      },
      {
        path:'',component:CourseCubeComponent
      }
    ]
  },
  {
    path:'student', component:ContainerComponent,
    loadChildren:'src/app/container/student/student.module#StudentModule'
  },
  {
    path:'utils', component:UtilsComponent,
  },
  {
    path:'', redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**', component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    CourseCubeComponent,
    UtilsComponent,
    LeftNavComponent,
    CardComponent,
    HomeComponent,
    CourseCubeFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [CourseCubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
