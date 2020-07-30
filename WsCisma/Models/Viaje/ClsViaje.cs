using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WsCisma.Models.Viaje
{
    public class ClsViaje
    {
            public int idpasajero { get; set; }
            public int idpais1 { get; set;}
            public int idciupais1 { get; set; }
            public int idpais2 { get; set; }
            public int idciupais2 { get; set; }
            public int tiposervicio { get; set; }
            public string fechaviaje { get; set; }
    }
}
