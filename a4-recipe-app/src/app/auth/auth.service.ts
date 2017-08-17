import {Injectable} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class AuthService{
    public token:string;
    public autTxDataEvent = new Subject<{type:string,message:string}>();

    constructor(private router:Router,private route:ActivatedRoute){

    }
    
    signUpUser(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((success)=>{           
            this.autTxDataEvent.next({type:'Success',message:"User has been created successfully!"});
        })
        .catch((err)=>{          
            this.autTxDataEvent.next({type:'Error',message:err.message});
        });
    }   

    signInUser(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((success)=>{
            this.router.navigate(['/'])
            firebase.auth().currentUser.getToken()
            .then((token:string)=>{
                this.token = token;
            })            
        })
        .catch((err)=>{
            console.log('Login Error',err);
        })
    } 

    getToken(){
        firebase.auth().currentUser.getToken()
        .then((token:string)=>{
            this.token = token;
        })
        return this.token;
    }
    isAuthenticated(){
        return this.token !=null;
    }
    logout(){       
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['signup'],{relativeTo:this.route});
    }
}