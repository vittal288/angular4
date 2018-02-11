import {ErrorHandler} from '@angular/core';
export class AppErrorHandler implements ErrorHandler{

    handleError(err){
        alert('Unexepcted Error Occured !!!');
        console.log(err);
    }
}