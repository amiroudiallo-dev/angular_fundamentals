import { Injectable } from "@angular/core";

declare let toastr: any;

@Injectable()
export class ToastrService {

    //method for success message.
    success(message: string, title?: string) {
        toastr.success(message, title);
    }

    //method for warning message.
    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }

    //method for info message.
    info(message: string, title?: string) {
        toastr.info(message, title);
    }

    //method for error message.
    error(message: string, title?: string) {
        toastr.error(message, title);
    }
}