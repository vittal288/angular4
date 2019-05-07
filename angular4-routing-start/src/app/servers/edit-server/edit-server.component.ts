import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


import { ServersService } from '../servers.service';
import {CanComponentDeactivate} from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router:Router
              ) {
    //
   }

  ngOnInit() {
    //@@@ 1--> retrieve Query Params and Fragments from URL from snapshot
    // console.log('Query Params',this.route.snapshot.queryParams);
    // console.log('Fragments',this.route.snapshot.fragment);

    //@@@ 2 ->Using observable to get reactive URL params, we can get the updated params if we update from the same router
    this.route.queryParams.subscribe((queryParams:Params)=>{
        this.allowEdit = queryParams['allowEdit'] ==='1' ? true:false;
    });
    // this.route.fragment.subscribe((frgmnParms)=>{
    //     console.log('Fr Params',frgmnParms);
    // });
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //within the same route , if ids are changed then those will capture in subscribe method
    this.route.params.subscribe((params:Params)=>{
        this.server = this.serversService.getServer(+params.id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    })

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
      if(!this.allowEdit){
        return true;
      }
      if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
        !this.changesSaved){
          return confirm('Do you want to discard the changes ?')
      }else{
        return true;
      }
  }

}
