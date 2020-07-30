import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiCismaService } from 'src/app/Services/WsCisma/api-cisma.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit {

// array para guardar la cedula
public cedudoc;

// array para verificar el status de la insercion
public resingreso;

// mensaje de atencion
public mensaje;

  constructor(private activatedRoute: ActivatedRoute
  	, private router: Router
    , public svrcisma: ApiCismaService) { }

  ngOnInit(): void {
  	// carga los tipos de documentos
  	this.cargatipdoc();
  }

cargatipdoc()
{
  	this.svrcisma.Cismadata(1,'pasajero/1?oper=4&idpa=0',null);

    let arraytran;

    arraytran=this.svrcisma.transfer;

    this.cedudoc=arraytran;

	// llamo al contador
	this.counter(1);	
}

counter(opt:number)
{

switch (opt) {
case 1:
  let contarsec=2;

  let intervalId = setInterval(() => {
  contarsec = contarsec - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando documentos. " +contarsec;
  if(contarsec === 0) 
  {
    clearInterval(intervalId);
    this.mensaje="";
    this.restipdoc();
  }}, 1000)
break;

case 2:
  let contarsec1=2;

  let intervalId1 = setInterval(() => {
  contarsec1 = contarsec1 - 1;
  //console.log(this.contarsec)
  this.mensaje="Guardando registro. " +contarsec1;
  if(contarsec1 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId1);
    this.resdatam();
  }}, 1000)
break;

/*
default:
break;
*/

}

}


restipdoc()
{
    // Recibo a transfer
    this.cedudoc=this.svrcisma.transfer;
}


cmdingresar(form)
{
    this.svrcisma.Cismadata(2,'pasajero',form.value);

    let arraytran;

    arraytran=this.svrcisma.transfer;

    this.resingreso=arraytran;  

    // inicio contador
    this.counter(2);

}

resdatam()
{
    
    // Recibo a transfer
    this.resingreso=this.svrcisma.transfer;
    // valido si obtengo resultados del webservice
    // si no tengo resultado envio error de lo contraro parametros

    if(this.resingreso == null )
    {
        this.router.navigate(["/"]);
    }
    else
    {
        console.log('paso');
    }  

    this.resingreso=[];
}

}
