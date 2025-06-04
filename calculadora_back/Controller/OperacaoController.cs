using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using calculadora_back.contexto;
using calculadora_back.Moldes;

namespace calculadora_back.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class OperacaoController : ControllerBase
    {
        private readonly Context _context;

        public OperacaoController(Context context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult SubirOperacao(Operacao operacao)
        {
            _context.Operacoes.Add(operacao);
            _context.SaveChanges();
            return Ok(operacao);
        }
        [HttpGet]
        public IActionResult ListarOperacoes()
        {
            var operacoes = _context.Operacoes.ToList();
            return Ok(operacoes);
        }
    }
}