import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'conocimientos', component: SkillsComponent},
  { path: 'proyectos', component: ProjectsComponent},
  { path: 'proyecto/:id', component: ProyectoComponent},
  { path: '', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
