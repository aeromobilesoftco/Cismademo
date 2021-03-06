﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WsCisma.Models.DataBas;
using WsCisma.Models.Pasajeros;

namespace WsCisma.Models.Pasajeros
{
    [Route("api/[controller]")]
    [ApiController]
    public class pasajeroController : Controller
    {
        ClsDatabas clsdatam = new ClsDatabas();

        DataTable Dt_retorno;

        // GET api/values/5
        [HttpGet("{id}")]
        public System.Data.DataTable Get(int id, int oper,int idpa)
        {

            int valpa;

            // valido si idpa llega con valor
            if (idpa == 0)
            {
                valpa = 0;
            }
            else
            {
                valpa = idpa;
            }

            switch (id)
            {

                case 1:
                    // llamo al proceso que llama al select
                    clsdatam.execPA("PA_CARGA_COMBOS", oper + ","+ valpa);

                    Dt_retorno = clsdatam.dt_exp_res;
                return Dt_retorno;

                case 2:
                    // llamo al proceso que llama al select
                    clsdatam.execPA("PA_PASAJEROS", oper + ",0,null," + valpa + ",null,null,null,null");

                    Dt_retorno = clsdatam.dt_exp_res;
                    return Dt_retorno;

                default:
                    Dt_retorno.Clear();
                    // return "Adios";
                    break;
            }
            return (Dt_retorno);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] ClsPasajero valim)
        {
            try
            {
                // llamo a la clase cliente
                ClsPasajero clc = new ClsPasajero();
                {
                    clc.idtipodoc = valim.idtipodoc;
                    clc.numdoc = valim.numdoc;
                    clc.nombres = valim.nombres;
                    clc.apellidos = valim.apellidos;
                    clc.telefono = valim.telefono;
                    clc.correo = valim.correo;
                }

                // llamo al proceso que llama al select
                clsdatam.execPA("PA_PASAJEROS", "3,0,"+ clc.idtipodoc +",'"+ clc.numdoc +"','"+ clc.nombres + "','" + clc.apellidos + "','" + clc.telefono + "','" + clc.correo+"'");

            }
            catch (Exception ex)
            {
                var jsonconver = JsonConvert.SerializeObject(ex.Message);
                throw ex;
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public System.Data.DataTable Put(int id, [FromBody] ClsPasajero valim)
        {

            switch (id)
            {

                case 1:

                    try
                    {
                        // llamo a la clase cliente
                        ClsPasajero clc = new ClsPasajero();
                        {
                            clc.idpasajero= valim.idpasajero;
                            clc.idtipodoc = valim.idtipodoc;
                            clc.numdoc = valim.numdoc;
                            clc.nombres = valim.nombres;
                            clc.apellidos = valim.apellidos;
                            clc.telefono = valim.telefono;
                            clc.correo = valim.correo;
                        }

                        // llamo al proceso que llama al select
                        clsdatam.execPA("PA_PASAJEROS", "4,"+ clc.idpasajero+"," + clc.idtipodoc + ",'" + clc.numdoc + "','" + clc.nombres + "','" + clc.apellidos + "','" + clc.telefono + "','" + clc.correo + "'");

                    }
                    catch (Exception ex)
                    {
                        var jsonconver = JsonConvert.SerializeObject(ex.Message);
                        throw ex;
                    }

                    Dt_retorno = clsdatam.dt_exp_res;
                    return Dt_retorno;

                default:
                    Dt_retorno.Clear();
                    // return "Adios";
                    break;
            }
            return (Dt_retorno);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public System.Data.DataTable Delete(int id, [FromBody] ClsPasajero valim)
        {

            switch (id)
            {

                case 1:

                    try
                    {
                        // llamo a la clase cliente
                        ClsPasajero clc = new ClsPasajero();
                        {
                            clc.idpasajero = valim.idpasajero;
                            clc.idtipodoc = valim.idtipodoc;
                        }

                        // llamo al proceso que llama al select
                        clsdatam.execPA("PA_PASAJEROS", "5," + clc.idpasajero + ",null,null,null,null,null,null");

                    }
                    catch (Exception ex)
                    {
                        var jsonconver = JsonConvert.SerializeObject(ex.Message);
                        throw ex;
                    }

                    Dt_retorno = clsdatam.dt_exp_res;
                    return Dt_retorno;

                default:
                    Dt_retorno.Clear();
                    // return "Adios";
                    break;
            }
            return (Dt_retorno);
        }

    }
}