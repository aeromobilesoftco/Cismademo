import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiCismaService } from 'src/app/Services/WsCisma/api-cisma.service';


@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styleUrls: ['./buscar-viaje.component.css']
})
export class BuscarViajeComponent implements OnInit {

// Operacion con controles
submitted = false;
dynamicForm: FormGroup;
dataviaje: FormGroup;
// propiedades formulario maletas
public alto;

// array para guardar la cedula
public pasajero;

// array para cargar el primer combo de pais
public paese1;
public ciunom1;

public paese2;
public ciunom2;

public servi;
// mensaje de atencion
public mensaje;

// bloqueo
public bloqueado;
public bloqueado2;

// matriz para guardar datos de buscar-viaje
public arrayviaje;

// matriz para guardar maletas
public arraymaleta;
  constructor(private activatedRoute: ActivatedRoute
  	, private router: Router
    , public svrcisma: ApiCismaService
    , private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  // cargo los combos pricipales
  this.cargatipdoc1();
	this.cargapais1();	
	this.cargapais2();
	this.cargaservicios();

// inicio la matriz de objetos
  this.dynamicForm = this.formBuilder.group({
  numaletas: ['', Validators.required],
  tickets: new FormArray([])});

// bloqueo de botones ingresar y maletas
  this.bloqueado=false;
  this.bloqueado2=true;
}


counter(opt:number)
{

switch (opt) {
case 1:
  let contarsec=2;

  let intervalId = setInterval(() => {
  contarsec = contarsec - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando pasajero. " +contarsec;
  if(contarsec === 0) 
  {
    clearInterval(intervalId);
    this.mensaje="";
    this.resnompasa();
  }}, 1000)
break;

case 2:
  let contarsec1=5;

  let intervalId1 = setInterval(() => {
  contarsec1 = contarsec1 - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando pais origen. " +contarsec1;
  if(contarsec1 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId1);
    this.respais1();
  }}, 1000)
break;

case 3:
  let contarsec3=5;

  let intervalId3 = setInterval(() => {
  contarsec3 = contarsec3 - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando ciudad origen. " +contarsec3;
  if(contarsec3 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId3);
    this.resciu1();
  }}, 1000)
break;

case 4:
  let contarsec4=5;

  let intervalId4 = setInterval(() => {
  contarsec4 = contarsec4 - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando pais destino. " +contarsec4;
  if(contarsec4 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId4);
    this.respais2();
  }}, 1000)
break;

case 5:
  let contarsec5=5;

  let intervalId5 = setInterval(() => {
  contarsec5 = contarsec5 - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando ciudad destino. " +contarsec5;
  if(contarsec5 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId5);
    this.resciu2();
  }}, 1000)
break;

case 6:
  let contarsec6=5;

  let intervalId6 = setInterval(() => {
  contarsec6 = contarsec6 - 1;
  //console.log(this.contarsec)
  this.mensaje="Cargando ciudad destino. " +contarsec6;
  if(contarsec6 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId6);
    this.resservicio();
  }}, 1000)
break;

case 7:
  let contarsec7=5;

  let intervalId7 = setInterval(() => {
  contarsec7 = contarsec7 - 1;
  //console.log(this.contarsec)
  this.mensaje="Guardando datos de viaje. " +contarsec7;
  if(contarsec7 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId7);
    this.resviaje();
  }}, 1000)
break;

case 8:
  let contarsec8=5;

  let intervalId8 = setInterval(() => {
  contarsec8 = contarsec8 - 1;
  //console.log(this.contarsec)
  this.mensaje="Guardando datos de equipaje. " +contarsec8;
  if(contarsec8 === 0) 
  {
    this.mensaje="";
    clearInterval(intervalId8);
    this.resmaletam();
  }}, 1000)
break;
/*
default:
break;
*/

}

}

// carga de pasajeros
cargatipdoc1()
{
  	this.svrcisma.Cismadata(1,'pasajero/2?oper=1&idpa=0',null);

    let arraytran1;

    arraytran1=this.svrcisma.transfer;

    this.pasajero=arraytran1;

	// llamo al contador
	this.counter(1);	
}

resnompasa()
{
    // Recibo a transfer
    this.pasajero=this.svrcisma.transfer;
}

// -----------------

// carga de paises 1
cargapais1()
{
  	this.svrcisma.Cismadata(5,'pasajero/1?oper=1&idpa=0',null);

    let arraytran;

    arraytran=this.svrcisma.pais1;

    this.paese1=arraytran;

	// llamo al contador
	this.counter(2);	
}

respais1()
{
    // Recibo a transfer
    this.paese1=this.svrcisma.pais1;
}

// -----------------

selciudad(idpaeser:number)
{
	console.log(idpaeser);

  	this.svrcisma.Cismadata(6,'pasajero/1?oper=2&idpa='+idpaeser,null);

    let arraytran;

    arraytran=this.svrcisma.ciudad1;

    this.ciunom1=arraytran;

	// llamo al contador
	this.counter(3);		
}

resciu1()
{
    // Recibo a transfer
    this.ciunom1=this.svrcisma.ciudad1;
}


// carga de paises 2
cargapais2()
{
  	this.svrcisma.Cismadata(7,'pasajero/1?oper=1&idpa=0',null);

    let arraytran;

    arraytran=this.svrcisma.pais2;

    this.paese2=arraytran;

	// llamo al contador
	this.counter(4);	
}

respais2()
{
    // Recibo a transfer
    this.paese2=this.svrcisma.pais2;
}

// -----------------

selciudad2(idpaeser:number)
{

  	this.svrcisma.Cismadata(8,'pasajero/1?oper=2&idpa='+idpaeser,null);

    let arraytran;

    arraytran=this.svrcisma.ciudad2;

    this.ciunom2=arraytran;

	// llamo al contador
	this.counter(5);		
}

resciu2()
{
    // Recibo a transfer
    this.ciunom2=this.svrcisma.ciudad2;
}

// cargo los servicios
cargaservicios()
{
  	this.svrcisma.Cismadata(9,'pasajero/1?oper=3&idpa=0',null);

    let arraytran;

    arraytran=this.svrcisma.servicios;

    this.servi=arraytran;

	// llamo al contador
	this.counter(6);	
}

resservicio()
{
    // Recibo a transfer
    this.servi=this.svrcisma.servicios;
}

    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.tickets as FormArray; }

    onChangeTickets(e) {
        const numaletas = e.target.value || 0;
        if (this.t.length < numaletas) {
            for (let i = this.t.length; i < numaletas; i++) {
                this.t.push(this.formBuilder.group({
                    alto: ['', Validators.required],
                    largo: ['', [Validators.required]],
                    ancho: ['', [Validators.required]],
                    peso: ['', [Validators.required]]
                }));
            }
        } else {
            for (let i = this.t.length; i >= numaletas; i--) {
                this.t.removeAt(i);
            }
        }
    }


guardaviaje(form)
{
  console.log(form.value);  

    this.svrcisma.Cismadata(2,'viaje',form.value);

    let arraytran;

    arraytran=this.svrcisma.transfer;

    this.arrayviaje=arraytran;  

    // inicio contador
    this.counter(7);

  this.bloqueado=true;
  this.bloqueado2=false;
}


resviaje()
{
    
    // Recibo a transfer
    this.arrayviaje=this.svrcisma.transfer;
    // valido si obtengo resultados del webservice
    // si no tengo resultado envio error de lo contraro parametros

    if(this.arrayviaje == null )
    {
        this.router.navigate(["/"]);
    }
    else
    {
        console.log('paso');
    }  

}


// boton de confirmacion
onSubmit()
{
        this.submitted = true;

        // stop here if form is invalid
        if (this.dynamicForm.invalid) {
            return;
        }
        else
        {
        // display form values on success
        /*
        console.log(this.dynamicForm.value.tickets[0].alto);  
        console.log(this.arrayviaje[0].consecutivo); 
*/
          // realizo el conteo de la matriz
          for(let i=0; i<this.dynamicForm.value.tickets.length; i++)
          {
            console.log(this.dynamicForm.value.tickets[i].alto);

            let jsonrest ={
            "idviajepersona": this.arrayviaje[0].consecutivo,
            "alto": this.dynamicForm.value.tickets[i].alto,
            "ancho": this.dynamicForm.value.tickets[i].ancho,
            "largo": this.dynamicForm.value.tickets[i].largo,
            "peso": this.dynamicForm.value.tickets[i].peso,
            };

            this.svrcisma.Cismadata(2,'maleta',jsonrest);

            let arraytran;

            arraytran=this.svrcisma.transfer;

            this.arraymaleta=arraytran;     

          }
        }

    // inicio contador
    this.counter(8);

}

resmaletam()
{
    
    // Recibo a transfer
    this.arraymaleta=this.svrcisma.transfer;
    // valido si obtengo resultados del webservice
    // si no tengo resultado envio error de lo contraro parametros

    if(this.arraymaleta == null )
    {
        console.log('error');
    }
    else
    {
        this.router.navigate(["/"]);
    }  

    this.arraymaleta=[];
}

}
