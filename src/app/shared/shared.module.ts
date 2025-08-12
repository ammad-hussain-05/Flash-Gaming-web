import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { NavComponent } from '../nav/nav.component';

import { RouterModule } from '@angular/router';
import { EventBlockerDirective } from './directives/event-blocker.directive';



@NgModule({
  declarations: [
    ModelComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    NavComponent,
    EventBlockerDirective
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule,
    RouterModule,

  ],
  exports:[
    ModelComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    NavComponent,
    EventBlockerDirective
   
      //yei reusable cheezein k loye use hoga jaise k (components,Directives,pipes)
    // jo pure app m bar bar use houngi etc
  ]
})
export class SharedModule { }
