import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCismaService {

// Webservice de conexion 
// Aqui estaran centralizadas todas las opciones que usara alcoya


public WbsUrl: string;
public Params: string;
public Numopt: number;

// variable de respuesta json
public transfer;


// variables para identificar paises y ciudades
public pais1;
public pais2;
public ciudad1;
public ciudad2;

public servicios;

public tipodocu;

  constructor(public http: HttpClient) { 
  	// Llamo la url base del servicio
  	// Como cada componente tendra un microservicio independiente
  	// En otra variable indicara que opcion tendra en el servicio
  	// y se enviara el metodo y el cuerpo

  	this.WbsUrl='https://localhost:44379/api/';
    //this.WbsUrl='http://localhost:81/ApiMistralM2/Services/';
  }

  async Cismadata(opt:number, microserv: string, cuerpo){

  	// Selecciono el opt y el metodo que se ejecuta

  	// 1-> Get, 2-> Post
  	switch(opt){

  		// 1: Get
  		case 1:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.transfer=data;
          console.log(this.transfer);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.transfer=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.transfer=0;

      });
      break;    


  		// 2: Post
  		case 2:

      let options = {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout:20000
      };

      const formdatam=new FormData();

  		return new Promise(data => {this.http.post(this.WbsUrl+microserv,cuerpo)
        .subscribe(
        data => {
          this.transfer=data;
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.transfer=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.transfer=0;

      });
  		break;  	

      // 3: Put
      case 3:

      let options1 = {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout:20000
      };

      return new Promise(data => {this.http.put(this.WbsUrl+microserv,cuerpo,options1)
        .subscribe(
        data => {
          this.transfer=['Afirmativo'];
        }, error => {
          this.transfer=error;
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.transfer=0;

      });

      break;  	

      // 4: Delete
      case 4:

      let options2 = {
        headers: {
          'Content-Type': 'application/json'
        },
        body:cuerpo,
        timeout:20000
      };

      return new Promise(data => {this.http.delete(this.WbsUrl+microserv,options2)
        .subscribe(
        data => {
          this.transfer=['Afirmativo'];
        }, error => {
          this.transfer=error;
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.transfer=0;

      });
      break;  

      // 5: pais1
      case 5:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.pais1=data;
          console.log(this.transfer);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.pais1=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.pais1=0;

      });
      break;   

      // 6: ciudad1
      case 6:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.ciudad1=data;
          console.log(this.ciudad1);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.ciudad1=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.ciudad1=0;

      });
      break; 

      // 5: pais1
      case 7:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.pais2=data;
          console.log(this.pais2);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.pais2=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.pais2=0;

      });
      break;   

      // 6: ciudad1
      case 8:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.ciudad2=data;
          console.log(this.ciudad2);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.ciudad2=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.ciudad2=0;

      });
      break; 

      // 6: ciudad1
      case 9:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.servicios=data;
          console.log(this.servicios);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.servicios=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.servicios=0;

      });
      break; 

      // 6: ciudad1
      case 9:

      return new Promise(data => {this.http.get(this.WbsUrl+microserv)
        .subscribe(

        data => {

          this.tipodocu=data;
          console.log(this.tipodocu);
        }, error => {

          // valido el tipo de error que me enviara el post
          if (error.status==404)
          {
            this.tipodocu=null
          }
        });
        // Si en algun el promise no responde. indico que el retorno es 0
        this.tipodocu=0;

      });
      break; 
  	}

  }
}
