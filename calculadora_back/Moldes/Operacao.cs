using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace calculadora_back.Moldes
{
    public class Operacao
    {
         public int Id { get; set; }
        public string Expressao { get; set; }
        public string Resultado { get; set; }
    }
}