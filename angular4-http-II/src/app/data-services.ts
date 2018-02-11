import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

import {AppError} from './common/app-error';
import {NotFoundError} from './common/not-found-error';
import {BadInputError} from './common/bad-input-error';

@Injectable()
export class DataService {
  
  constructor(private http,private url:string) {

  }

  getAll() {
    return this.http.get(this.url)
    .catch(this.handleError);
  }
  create(resources) {
    return this.http.post(this.url,resources)
    .catch(this.handleError)
  }

  update(id,resources) {
    return this.http.patch(`${this.url}/${id}`,resources)
    .catch(this.handleError);
  }

  delete(id) {
    //return Observable.throw(new AppError);
    return this.http.delete(`${this.url}/${id}`)
    .catch(this.handleError)
  }

  private handleError(error:Response){
    if(error.status === 400){
      return Observable.throw(new BadInputError(error.json()));
    }
    if(error.status === 404){
      return Observable.throw(new NotFoundError())
    }
    return Observable.throw(new AppError(error))
  }

}
