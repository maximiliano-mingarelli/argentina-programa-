import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
expLab : Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter:ActivatedRoute, private router :Router ){}
ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.sExperiencia.details(id).subscribe(
    data=>{
      this.expLab = data;
    }, err =>{
      alert("error al modificar experiencia");
      this.router.navigate(['']);
    }
  )
}

onUpdate():void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sExperiencia.update(id, this.expLab).subscribe(
    data =>{
      this.router.navigate(['']);
    }, err=>{
      alert("error al modificar experiencia");
      this.router.navigate(['']);
    }
  )
}
}
