import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'testing1';
  username = ''
  servername = 'server 1'
  serverCreated = false
  serverStatus: string = 'offline'
  serverID = 1
  
  ngOnInit(): void {
    
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreateServer() {
    this.serverCreated = true

  }

  getServerStatus() {
    this.serverStatus
  }
}




