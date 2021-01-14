import { Component, OnInit } from '@angular/core';
import { TechService } from 'src/app/services/tech.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public techService: TechService) { }

  ngOnInit(): void {
  }

}
