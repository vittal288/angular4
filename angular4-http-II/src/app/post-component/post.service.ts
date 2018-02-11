import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data-services';

@Injectable()
export class PostService extends DataService { 
  constructor(http: HttpClient) {
    //involde base class Constructor    
    super(http,'http://jsonplaceholder.typicode.com/posts')
  }

}
