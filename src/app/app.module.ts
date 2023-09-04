import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  EventService
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'routes';
import { Error404Component } from './errors/404.component';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent, 
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    {
      provide: 'canDesactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You haven\'t save this event do you really want to cancel ?');
  }
  return true;
}
