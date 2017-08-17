import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx'
import {Observable} from 'rxjs/Observable';

@Injectable() //because Http is a service from angular and we importing the same in our custom service 
export class ServerService{
    constructor(private http:Http){

    }
    fireBaseUrl ='https://udemmy-angular4-http.firebaseio.com/data'

    saveServers(servers:any[]){  
        const headers = new Headers({
            'Content-Type':'application/json',
            'sample-auth-token':"asda#123413123"
        })
        //by default http.* method will exposes Observable       
        // return this.http.post(this.fireBaseUrl,
        //     servers,{headers:headers})
         return this.http.put(this.fireBaseUrl,
            servers,{headers:headers})            
    }

    getServers(){
        return this.http.get(this.fireBaseUrl)
            //map method transforms the data which returns from observable and returns the observable again after wrapping the atransformed data 
            .map((response:Response)=>{
                const data = response.json();
                //just for demo purpose , tranforming the data 
                for (const server of data){
                    server.name = 'FETCHED_'+server.name
                }
                return data;
            })
            //by default catch will not reurn an observable so we wrapping it in custom observable and sending 
            .catch((err:Response)=>{                   
                return Observable.throw(err);                
            });
    }

    getAppName(){
        return this.http.get('https://udemmy-angular4-http.firebaseio.com/appName.json')
        .map((response:Response)=>{
            return response.json()
        });
    }
}