import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appName = this.serverService.getAppName();

  constructor(private serverService: ServerService) {

  }

  ngOnInit() {
    // this.serverService.getAppName().subscribe((data: any) => {
    //   this.appName = data;
    // });
  }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService.saveServers(this.servers).subscribe(
      (response: any) => {
        console.log('Response', response)
      }, (err) => {
        console.log('Error', err);
      });
  }
  getServers() {
    this.serverService.getServers()
      .subscribe((servers: any[]) => {
        //const data = response.json();//it will extract thr _body javascript string object and gives us the JSON data 
        //console.log(servers);
        this.servers = servers;
      }, (err) => {
        console.log(err);
      })
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
