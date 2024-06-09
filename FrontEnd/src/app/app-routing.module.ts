import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent }  from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { RessourceBackComponent } from './BackOffice/ressource-back/ressource-back.component';
import { RessourceComponent } from './FrontOffice/ressource/ressource.component';
import {LoginComponent} from "./Auth/login/login.component";
import {SignUpComponent} from "./Auth/sign-up/sign-up.component";
import {SessionbackComponent} from "./BackOffice/sessionback/sessionback.component";
import {ReplyComponent} from "./FrontOffice/reply/reply.component";
import {ChartComponent} from "./BackOffice/chart/chart.component";
import {CommentComponent} from "./FrontOffice/comment/comment.component";
import {StudygComponent} from "./studyg/studyg.component";
import {AddStudygComponent} from "./studyg/add-studyg/add-studyg.component";
import {UpdateStudygComponent} from "./studyg/update-studyg/update-studyg.component";
import {OussamaComponent} from "./oussama/oussama.component";
import {AddLocal2Component} from "./BackOffice/add-local-2/add-local-2.component";
import {ListLocalComponent} from "./BackOffice/list-local/list-local.component";
import { Session } from './FrontOffice/Session';
import { SessionComponent } from './FrontOffice/session/session.component';
import { DynamicComponent } from './FrontOffice/dynamic/dynamic.component';
import { StudygfrontComponent } from './studygfront/studygfront.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},

  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children: [
      {
        path: 'SessionBack',
        component: SessionbackComponent
      },
      {
        path:"ressourceBack",
        component:RessourceBackComponent
      },
      {
        path: 'locallistback',
        component: ListLocalComponent,
        children: [
          { path: 'addlocalback', component: AddLocal2Component }
        ]
      },
      {path: 'BackOussema', component: OussamaComponent},
      {
        path:"chartFront",
        component:ChartComponent
      }
      // other child routes...
    ]
  },

  {
    path:"front",
    component:AllTemplateFrontComponent
    },
    {
      path:"SessionFront",
      component:DynamicComponent
      },

  {
    path:"Ressource",
    component:RessourceComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"signup",
      component:SignUpComponent
    },

  {
    path:"commentFront",
    component:CommentComponent
  },

  {
    path:"replyFront",
    component:ReplyComponent
  },
  {path: 'studygroupeFront', component: StudygComponent},
  {path: 'addsg', component: AddStudygComponent},
  {path: 'updatesg/:id', component: UpdateStudygComponent},


  {path:'frontoussama',component:StudygfrontComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
