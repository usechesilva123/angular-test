import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngluarProyect';

  constructor(private router:Router){}

  Get(){
    this.router.navigate(["get"]);
  }
  
  Update(){
    this.router.navigate(["update"]);
  }
  
  Create(){
    this.router.navigate(["create"]);
  }
}
