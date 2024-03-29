import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit{
persona: persona = null;
constructor(private activatedRouter:ActivatedRoute,private personaService: PersonaService, private router: Router){}
ngOnInit(): void {
  const id =this.activatedRouter.snapshot.params['id'];
this.personaService.detail(id).subscribe(
  data=>{
    this.persona=data;
  },err =>{
    alert("error al modificar");
    this.router.navigate(['']);
  }
)
}
onUpdate():void{
  const id =this.activatedRouter.snapshot.params['id'];
  this.personaService.update(id, this.persona).subscribe(
    data=>{
      this.router.navigate(['']);
    },err=>{
      alert("error al modifacar la formacion");
      this.router.navigate(['']);
    }
  )
}

}


