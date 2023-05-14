import { Component } from '@angular/core';
import { ISkill } from 'src/app/models/skills.models';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent {
skillList:ISkill[]=[]
}
