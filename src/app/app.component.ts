import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FontUrquiza';
  
  constructor(private router:Router){}

  saveProject(){
    this.router.navigate(["saveProject"]);
  }

  getProject(){
    this.router.navigate(["listProjects"]);
  }

  /*downloadProject(){
    const fileName = `reporte_${Math.random()}.zip`;
    this.router.getReport().subscribe(response => {
      this.manage
    })*/
}
