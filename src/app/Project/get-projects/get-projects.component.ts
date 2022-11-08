import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Modelo/Project';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html'
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
      alert("Proyecto eliminado!");
    })
  }

  downloadZip(project: any) {
    const linkSource = 'data:application/zip;base64,' + project
    const downloadLink = document.createElement("a");
    const fileName = "proyectoUrquiza.zip";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  
}
