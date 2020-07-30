using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WsCisma.Models.DataBas
{
    public class ClsDatabas
    {
        // conexion base de datos
        private SqlConnection Coner;

        // guardo mis resultados en un datatable
        public DataTable dt_exp_res;

        // respuesta evento
        public string resfunc;

        private void Conectar()
        {
            string constr = ConfigurationManager.ConnectionStrings["ConexLim"].ToString();
            Coner = new SqlConnection(constr);
        }

        public DataTable execPA(string nompa, string parami)
        {
            // conexion base de datos
            Conectar();

            try
            {
                SqlCommand CmdGeprogra = new SqlCommand("Exec " + nompa + " "+ parami, Coner);
                Coner.Open();
                SqlDataReader Programgene = CmdGeprogra.ExecuteReader();
                DataTable dtres1 = new DataTable();

                // cargo el datatable
                dtres1.Load(Programgene);
                dt_exp_res = dtres1;
            }
            catch (Exception ex)
            {
                dt_exp_res = null;
            }

            // cargo el datatable de respuesta
            return dt_exp_res;

        }
    }
}
