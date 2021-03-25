import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Medico } from 'src/app/Modelo/Medico'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  medicos! :Medico[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getMedicos()
    .subscribe(data =>{
      this.medicos=data;
    })
  }

  Editar(medico:Medico){
    localStorage.setItem("id", medico.id.toString());
    this.router.navigate(["update"]);
  }

  Eliminar(medico:Medico){
    this.service.deleteMedico(medico)
    .subscribe(data => {
      this.medicos = this.medicos.filter(p=> p!==medico);
      alert("Usuario eliminado");
    })
  }

}
