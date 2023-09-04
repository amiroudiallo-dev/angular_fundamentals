import { Routes } from "@angular/router";
import { Error404Component } from "src/app/errors/404.component";

import {
    CreateEventComponent,
    EventDetailsComponent,
    EventListComponent,
    EventListResolver,
    EventRouteActivator
} from 'src/app/events/index';

export const appRoutes: Routes = [
    
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDesactivateCreateEvent']
    },
    {
        path: 'events',
        component: EventListComponent,
        resolve: {events: EventListResolver}
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: () => import('./src/app/user/user.module')
        .then(m => m.UserModule)
    }
]