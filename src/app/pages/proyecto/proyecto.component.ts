import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  id: string;
  project: Project;

  constructor(private activatedRoute: ActivatedRoute,
              public projectService: ProjectService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(params => {
          this.projectService.getProyecto(params['id'])
          .subscribe( (project: Project) => {
            this.id = params['id'];
            this.project = project;
          });
        })
  }

}
