import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params,Data} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit { 
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //this.server= this.serversService.getServer(1); 
    //the URL parameters are always of TYPE STRING , so using + operator convert to NUMBER
    // const serverId = +this.route.snapshot.params['id'];       
    // this.server = this.serversService.getServer(serverId); 
    // this.route.params.subscribe((params:Params)=>{      
    //     this.server = this.serversService.getServer(+params['id']);        
    // });

    //-->USING SERVER RESOLVER SERVICE, feeding the data to template in advance before router loads 
    //-->resolver returned data will be available in data object of Router
    this.route.data.subscribe((data:Data)=>{
        this.server = data['server'];
    });
  }

  onEdit(){
    //@@@ 1 :normal way of navigating 
    //this.router.navigate(['/servers',this.server.id,'edit']);
    //@@@ 2 : using relativeTo method (load the route relatively)
    //@@@ 3: queryParamsHandling is used to use for to preserve the query parametes once the user navigate from one route to another 
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
    
  }

}
