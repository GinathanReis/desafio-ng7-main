using desafio_ng7_main.Interface;
using desafio_ng7_main.Service;
using desafio_ng7_main.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace desafio_ng7_main.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BuscaClientesController : ControllerBase
    {
        private readonly IBuscaClienteService _buscaClienteService;

        public BuscaClientesController(IBuscaClienteService buscaClienteService)
        {
            _buscaClienteService = buscaClienteService;
        }

        [HttpGet("GetBuscarClientes")]
        public async Task<ActionResult<ReponseViewModel>> GetBuscarClientes()
        {
            return Ok(await _buscaClienteService.GetBuscarClientes());
        }
    }
}