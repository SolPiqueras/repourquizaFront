import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.css']
})
export class SaveProjectComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  project:Project = new Project();
  saveProject(){
    this.service.saveProject(this.project).subscribe(data=>{
      alert("Se Agrego con Exito!");
      this.router.navigate(["get-project"]);
    })
  }
}
