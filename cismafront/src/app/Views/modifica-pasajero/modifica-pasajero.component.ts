import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiCismaService } from 'src/app/Services/WsCisma/api-cisma.service';

@Component({
  selector: 'app-modifica-pasajero',
  templateUrl: './modifica-pasajero.component.html',
  styleUrls: ['./modifica-pasajero.component.css']
})
export class ModificaPasajeroComponent implements OnInit {

// mensaje de atencion
public mensaje;
// array para guardar la cedula
public cedudoc;

// array de lista
public arraypass;

// array de modificacion
public modifypass;
  constructor(private activatedRoute: ActivatedRoute
  	, private router: Router
    , public svrcisma: ApiCismaService) { }

  ngOnInit(): void {
  	
  	this.cargapassenger();
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
  let contarsec2=2;

  let intervalId2 = setInterval(() => {
  contarsec2 = contarsec2 - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando pasajeros. " +contarsec2;
  if(contarsec2 === 0) 
  {
    clearInterval(intervalId2);
    this.mensaje="";
    this.respasenger();
  }}, 1000)
break;

case 3:
  let contarsec3=2;

  let intervalId3 = setInterval(() => {
  contarsec3 = contarsec3 - 1;
  //console.log(this.contarsec)
  this.mensaje="Actualizando pasajeros. " +contarsec3;
  if(contarsec3 === 0) 
  {
    clearInterval(intervalId3);
    this.mensaje="";
    this.actpassage();
  }}, 1000)
break;

case 4:
  let contarsec4=2;

  let intervalId4 = setInterval(() => {
  contarsec4 = contarsec4 - 1;
  //console.log(this.contarsec)
  this.mensaje="Eliminado pasajero " +contarsec4;
  if(contarsec4 === 0) 
  {
    clearInterval(intervalId4);
    this.mensaje="";
    this.elimpass();
  }}, 1000)
break;


/*
default:
break;
*/

}

}

cargatipdoc()
{
  	this.svrcisma.Cismadata(1,'pasajero/1?oper=4&idpa=0',null);

    let arraytran;

    arraytran=this.svrcisma.tipodocu;

    this.cedudoc=arraytran;

	// llamo al contador
	this.counter(1);	
}

restipdoc()
{
    // Recibo a transfer
    this.cedudoc=this.svrcisma.tipodocu;
}

cargapassenger()
{
  	this.svrcisma.Cismadata(1,'pasajero/2?oper=1&idpa=0',null);

    let arraytran;

    arraytran=this.svrcisma.transfer;

    this.arraypass=arraytran;

	// llamo al contador
	this.counter(2);	
}

respasenger()
{
    // Recibo a transfer
    this.arraypass=this.svrcisma.transfer;
}

clkactualiza(idpass:number,tipdoc:string,numdoci:number,nombrepas:string,apelli:string,telefono:number,correopas:string)
{
	console.log(idpass,tipdoc,numdoci,nombrepas,apelli,telefono,correopas);

let jsonrest ={
    "idpasajero":idpass
    , "idtipodoc":tipdoc
    , "numdoc":numdoci
    , "nombres":nombrepas
    , "apellidos":apelli
    , "telefono":telefono
    , "correo":correopas
};

this.svrcisma.Cismadata(3,'pasajero/1',jsonrest);

let arraytran;

arraytran=this.svrcisma.transfer;

this.modifypass=arraytran;  
this.counter(3);

}

actpassage()
{

    this.router.navigate(["/"]);

}

clkelim(idpass:number)
{
let jsonrest ={
    "idpasajero":idpass
};

this.svrcisma.Cismadata(4,'pasajero/1',jsonrest);

let arraytran;

arraytran=this.svrcisma.transfer;

this.modifypass=arraytran;  
this.counter(4);
}

elimpass()
{
	    this.router.navigate(["/"]);
}
}
