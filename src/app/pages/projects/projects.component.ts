import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor( public projectService: ProjectService,
               private router: Router) { }

  ngOnInit(): void {
  }

  navegar(id:string) {
    this.router.navigate(['/proyecto', id]);
  }

}
