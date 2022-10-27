import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrls: ['./get-projects.component.css']
})
export class GetProjectsComponent implements OnInit {

  projects!: Project[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe(data =>{
      this.projects=data;
    });
  }

  deleteProject(project:Project){
    this.service.deleteProject(project).subscribe(data=>{
      this.projects=this.projects.filter(p=>p!==project);
      alert("Usuario eliminado!");
    })
  }
}
