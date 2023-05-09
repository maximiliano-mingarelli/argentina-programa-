import { Component } from '@angular/core';
import { ISkill } from 'src/app/models/skills.models';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent {
skillList:ISkill[]=[
  {porcent:100,
    imageUrl:"assets/imagenes/html.png"
  },
  {
    porcent:10,
   imageUrl:"assets/imagenes/CSS.png"
  },
  {porcent:50,
    imageUrl:"assets/imagenes/git.png"
  }

]
}
