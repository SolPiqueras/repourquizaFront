import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Modelo/Project';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) {
   }

  Url = 'http://localhost:8080/repoUrquiza/projects';

  getProjects(){
    return this.http.get<Project[]>(this.Url);
  }

  saveProject(project:Project){
    return this.http.post<Project>(this.Url, project);
  }

  deleteProject(project:Project){
    return this.http.delete<Project>(this.Url + "/" + project.id);
  }
}
