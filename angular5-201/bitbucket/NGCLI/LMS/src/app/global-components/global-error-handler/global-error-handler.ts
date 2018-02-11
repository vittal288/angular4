// import { LoadingComponent } from './../components/loading/loading.component';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import * as StackTrace from 'stacktrace-js';

import { AppError } from './app-error';
import { BadInputError } from './bad-input-error';
import { NotFoundError } from './not-found-error';
import { InternalServerError } from './server-error';
// import { LoggingService } from '../logging.service';
// import { ToasterService } from '../../shared/utility';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(private injector: Injector) {
    // to call the constructor of base's class
    // super(true);
    super();
  }
  handleError(error: any): void {
    // this.loadingComponent.onCloseModal();
    // this.toasterService.showToaster('error', 'SERVICE ERROR', error.message);
    if (error != null) {
      // const loggingService = this.injector.get(LoggingService);
      const message = error.message ? error.message : error.toString();
      const location = this.injector.get(LocationStrategy);
      const url = location instanceof PathLocationStrategy ? location.path() : '';

      // get the stack trace, lets grab the last 10 stacks only
      StackTrace.fromError(error).then(stackframes => {
        const stackString = stackframes
          .splice(0, 20)
          .map(function (sf) {
            return sf.toString();
          }).join('\n');
        // this.toasterService.showToaster('error', 'Error', 'Unexpected Error Occurred !!!');
        console.log('%c STACKTRACEJS INFO !!! ', 'background: #5bc0de; color: #FFF', { error, message, url, stack: stackString });
        // log on the server
        // loggingService.log({ error, message, url, stack: stackString });
      });

      throw error;
    } else {
      super.handleError(error);
    }
  }

}

export class GlobalHTTPErrorHanlder {


  public handleError(error: HttpErrorResponse) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error.error instanceof HttpErrorResponse) {
      const body = error || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      console.error('%c ERROR !!! ', 'background: #FF0000; color: #FFF', errMsg);
      // this.toasterService.showToaster('error', 'Error', 'Service Error !!!');
    } else {
      if (error.status === 404) {
        // this.toasterService.showToaster('error', 'Error', 'Not Found !!!');
        return Observable.throw(new NotFoundError());
      } else if (error.status === 400) {
        // this.toasterService.showToaster('error', 'Error', 'Bad Request !!!');
        return Observable.throw(new BadInputError(error.error.json()));
      } else if (error.status === 500) {
        // this.toasterService.showToaster('error', 'Error', 'Server Error !!!');
        return Observable.throw(new InternalServerError());
      } else {
        // this.toasterService.showToaster('error', 'Error', 'Error Occurred !!!');
      return Observable.throw(new AppError(error));
      }
    }
    return Observable.throw(error);
  }
}
