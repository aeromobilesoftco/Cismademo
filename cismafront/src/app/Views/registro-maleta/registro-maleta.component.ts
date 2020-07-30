import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiCismaService } from 'src/app/Services/WsCisma/api-cisma.service';

@Component({
  selector: 'app-registro-maleta',
  templateUrl: './registro-maleta.component.html',
  styleUrls: ['./registro-maleta.component.css']
})
export class RegistroMaletaComponent implements OnInit {

// mensaje de atencion
public mensaje;
// array para guardar la cedula
public cargamale;

  constructor(private activatedRoute: ActivatedRoute
  	, private router: Router
    , public svrcisma: ApiCismaService) { }

  ngOnInit(): void {
  	this.cargadatamaleta();
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
    this.restmaletas();
  }}, 1000)
break;
}

}

cargadatamaleta()
{
  	this.svrcisma.Cismadata(1,'maleta/1',null);

    let arraytran;

    arraytran=this.svrcisma.transfer;

    this.cargamale=arraytran;

	// llamo al contador
	this.counter(1);	
}

restmaletas()
{
    // Recibo a transfer
    this.cargamale=this.svrcisma.transfer;
}
}
