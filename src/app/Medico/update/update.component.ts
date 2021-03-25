import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/Modelo/Medico';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  documentos:string[]=["CC","CE","PA","AS"];
  agendas:string[]=["A","B","C","D"];
  funcionCaptura:string[]=["SI","NO"];

  medico : Medico = new Medico();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id") as string;
    this.service.getMedico(parseInt(id))
    .subscribe(data=>{
      console.log(data);
      this.medico=data;
    });
  }

  onSubmit(){
    this.service.createMedico(this.medico).
    subscribe(data=>{
      this.medico=data;
      alert("Se ha guardado exitoramente");
      this.router.navigate(["get"]);
    })
  }

}
