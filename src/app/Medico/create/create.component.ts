import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Medico } from 'src/app/Modelo/Medico';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  documentos:string[]=["CC","CE","PA","AS"];
  agendas:string[]=["A","B","C","D"];
  funcionCaptura:string[]=["SI","NO"];

  tipoDocumento!:string;
  numeroDocumento!:string;
  primerNombre!:string;
  segundoNombre!:string;
  primerApellido!:string;
  segundoApellido!:string;
  registroMedico!:string;
  especialidad!:string;
  agenda!:string;
  direccion!:string;
  ciudad!:string;
  telefono!:string;
  correo!:string;
  capturaFirma!:string;

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {

    console.log(data);
     this.service.createMedico(data)
      .subscribe(data=>{
        alert("Agregado exitosamente");
        this.router.navigate(["get"]);
      });
  }

}
