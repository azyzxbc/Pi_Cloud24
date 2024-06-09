import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './FrontOffice/dynamic/dynamic.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionComponent } from './FrontOffice/session/session.component';
import { RessourceComponent } from './FrontOffice/ressource/ressource.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RessourceBackComponent } from './BackOffice/ressource-back/ressource-back.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import {CommentComponent} from './FrontOffice/comment/comment.component';
import {ReplyComponent} from "./FrontOffice/reply/reply.component";
import {ChartComponent} from "./BackOffice/chart/chart.component";
import {SessionbackComponent} from "./BackOffice/sessionback/sessionback.component";
import {StudygComponent} from "./studyg/studyg.component";
import {AddStudygComponent} from "./studyg/add-studyg/add-studyg.component";
import {UpdateStudygComponent} from "./studyg/update-studyg/update-studyg.component";
import {OussamaComponent} from "./oussama/oussama.component";
import {StudygfrontComponent} from "./studygfront/studygfront.component";
import { ToastrModule } from 'ngx-toastr';
import {DatePipe} from "@angular/common";
import { AngularChartjsComponent } from './BackOffice/angular-chartjs/angular-chartjs.component';
import { WithoutSBComponent } from './without-sb/without-sb.component';
import { TotalCComponent } from './BackOffice/total-c/total-c.component';
import { ListLocalComponent } from './BackOffice/list-local/list-local.component';
import {PccComponent} from "./BackOffice/pcc/pcc.component";
import {AddLocal2Component} from "./BackOffice/add-local-2/add-local-2.component";


@NgModule({


  declarations: [
    AppComponent,

    DynamicComponent,
    HeaderComponent,
    FooterComponent,
    AllTemplateFrontComponent,
    CommentComponent,
    ReplyComponent,
    SessionComponent,
    ChartComponent,
    SessionbackComponent,
    SessionComponent,
      AllTemplateBackComponent,
      RessourceComponent,
      RessourceBackComponent,
      LoginComponent,
      SignUpComponent,
    StudygComponent,
    AddStudygComponent,
    UpdateStudygComponent,
    OussamaComponent,
    StudygfrontComponent,
    PccComponent,
    AngularChartjsComponent,
    WithoutSBComponent,
    TotalCComponent,
    ListLocalComponent,
    AddLocal2Component,
    WithoutSBComponent,
    SidebarComponent











  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  NavbarComponent,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 5000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      maxOpened: 20,
      autoDismiss: true,
      newestOnTop: true,
      enableHtml: true,
      tapToDismiss: true,
      toastClass: 'ngx-toastr',
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
