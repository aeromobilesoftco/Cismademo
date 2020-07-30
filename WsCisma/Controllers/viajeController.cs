using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WsCisma.Models.DataBas;
using WsCisma.Models.Viaje;

namespace WsCisma.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class viajeController : Controller
    {
        ClsDatabas clsdatam = new ClsDatabas();
        DataTable Dt_retorno;
        // POST api/values
        [HttpPost]
        public System.Data.DataTable Post([FromBody] ClsViaje valim)
        {
            try
            {
                // llamo a la clase cliente
                ClsViaje clc = new ClsViaje();
                {
                    clc.idpasajero = valim.idpasajero;
                    clc.idpais1 = valim.idpais1;
                    clc.idciupais1 = valim.idciupais1;
                    clc.idpais2 = valim.idpais2;
                    clc.idciupais2 = valim.idciupais2;
                    clc.tiposervicio = valim.tiposervicio;
                    clc.fechaviaje = valim.fechaviaje;
                }

                // llamo al proceso que llama al select
                clsdatam.execPA("PA_INSERCION_VIAJE", "1,"+ clc.idpasajero + "," + clc.idpais1 + "," + clc.idciupais1 + "," + clc.idpais2 + "," + clc.idciupais2 + "," + clc.tiposervicio + ",'" + clc.fechaviaje+ "'");
                Dt_retorno = clsdatam.dt_exp_res;
            }
            catch (Exception ex)
            {
                var jsonconver = JsonConvert.SerializeObject(ex.Message);
                throw ex;
            }

            return Dt_retorno;
        }
    }
}