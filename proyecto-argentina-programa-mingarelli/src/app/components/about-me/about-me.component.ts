import { Component,OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  persona: persona= new persona("","","");

  constructor( public personaService: PersonaService){}

ngOnInit(): void{
  this.personaService.getPersonaById(4).subscribe(data=>{this.persona = data})
}

}


