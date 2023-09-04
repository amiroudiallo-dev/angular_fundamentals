import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    template: `
        <h3>New Event</h3>
        <hr>
        <div class="col-md-6">
            <h4>[Create event form will go here]</h4>
            <br/>
            <button type="submit" class="btn btn-success">Save</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-danger" (click)="cancel()">Cancel</button>
        </div>
            
    `
})
export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router){}
    cancel(): void {
        this.router.navigate(['/events']);
    }
}