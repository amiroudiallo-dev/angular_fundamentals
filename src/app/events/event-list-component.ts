import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
// import { ToastrService } from "../common/toastr.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";

@Component({
    selector: 'event-list-component',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-6" >
                <event-thumbnail-component (click) = "handleThumnailClick(event.name)" [event]="event"></event-thumbnail-component>
            </div>
        </div>
    </div>
    ` 
})
export class EventListComponent implements OnInit {

    events: IEvent[] = [];

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumnailClick(message:any) {
        this.toastr.success(message);
    }
}