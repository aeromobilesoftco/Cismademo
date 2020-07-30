using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WsCisma.Models.DataBas;
using WsCisma.Models.Maleta;

namespace WsCisma.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class maletaController : Controller
    {
        ClsDatabas clsdatam = new ClsDatabas();
        DataTable Dt_retorno;

        // POST api/values
        [HttpPost]
        public System.Data.DataTable Post([FromBody] ClsMaleta valim)
        {
            try
            {
                // llamo a la clase cliente
                ClsMaleta clc = new ClsMaleta();
                {
                    clc.idviajepersona = valim.idviajepersona;
                    clc.alto = valim.alto;
                    clc.ancho = valim.ancho;
                    clc.largo = valim.largo;
                    clc.peso = valim.peso;
                }

                // llamo al proceso que llama al select
                clsdatam.execPA("PA_INSERCION_MALETA", "1," + clc.idviajepersona + "," + clc.alto + "," + clc.ancho + "," + clc.largo + "," + clc.peso);
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