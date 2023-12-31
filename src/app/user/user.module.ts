import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [

    ]
})
export class UserModule {

}