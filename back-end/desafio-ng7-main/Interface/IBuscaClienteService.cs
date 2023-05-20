using desafio_ng7_main.Entity;
using desafio_ng7_main.ViewModel;

namespace desafio_ng7_main.Interface
{
    public interface IBuscaClienteService
    {
        Task<ReponseViewModel> GetBuscarClientes();
        Task<BuscaClienteNacionalidadeViewModel> GetBuscarClientesNacionalidade(BuscaCliente result);
        Task<List<BuscaClienteMulheresAdultasViewModel>> GetBuscarClientesMulheresAdultas(BuscaCliente result);
    }
}
