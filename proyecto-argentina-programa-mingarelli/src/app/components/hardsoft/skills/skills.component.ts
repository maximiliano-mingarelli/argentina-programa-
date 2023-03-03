import { Component,Input } from '@angular/core';
import { ISkill } from 'src/app/models/skills.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skill!:ISkill
  ;
}
