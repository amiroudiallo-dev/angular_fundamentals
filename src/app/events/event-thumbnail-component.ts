import { Component , EventEmitter, Input, Output} from "@angular/core";
import { IEvent } from "./shared";


@Component({
    selector: 'event-thumbnail-component',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>

            <div>Price: $ {{event?.price}}</div>
            <div *ngIf="event?.location">
                <span class="pad-left">Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}&nbsp;&nbsp;{{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>`
    ,
    styles: [
        `
        .bold {font-weight: bold;}
        .green {color: red;}
        .pad-left {margin-letf: 10px}
        .well div {color: #bbb;}
        .thumbnail {min-height: 120px;}
        `
    ]
})
export class EventThumbnailComponent {
    
    @Input() event?: IEvent;

    getStartTimeClass() {
        if(this.event && this.event.time === '8:00 am')
            return {color: 'green', 'font-weight': 'bold'};
        return {};
    }
}
