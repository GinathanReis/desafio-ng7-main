using desafio_ng7_main.Entity;
using desafio_ng7_main.Interface;
using desafio_ng7_main.ViewModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using static System.Net.Mime.MediaTypeNames;

namespace desafio_ng7_main.Service
{
    public class BuscaClienteService : IBuscaClienteService
    {
        const string linkAPI = "https://randomuser.me/api/1.1/?results=500";

        public BuscaClienteService()
        {
        }

        public async Task<ReponseViewModel> GetBuscarClientes()
        {
            ReponseViewModel responseModel = new ReponseViewModel();
            BuscaClienteViewModel buscaCliente = new BuscaClienteViewModel();
            BuscaClienteNacionalidadeViewModel buscaClienteNacionalidade = new BuscaClienteNacionalidadeViewModel();
            List<BuscaClienteMulheresAdultasViewModel> buscaClienteMulheresAdultas = new List<BuscaClienteMulheresAdultasViewModel>();

            try
            {
                var httpClient = new HttpClient();
                var request = new HttpRequestMessage();

                var response = await httpClient.GetAsync(linkAPI);

                var data = await response.Content.ReadAsStringAsync();

                var result = JsonConvert.DeserializeObject<BuscaCliente>(data);

                buscaCliente.TotalClienteMulheres = result.Results.Count(x => x.Gender == "female");
                buscaCliente.TotalClientesHomens = result.Results.Count(x => x.Gender == "male");
                buscaCliente.TotalClientes = result.Results.Count();
                buscaClienteNacionalidade = await GetBuscarClientesNacionalidade(result);
                buscaClienteMulheresAdultas = await GetBuscarClientesMulheresAdultas(result);

                responseModel.BuscaCliente = buscaCliente;
                responseModel.BuscaClienteNacionalidade = buscaClienteNacionalidade;
                responseModel.BuscaClienteMulheresAdultas = buscaClienteMulheresAdultas;
            }
            catch (Exception ex)
            {

            }

            return responseModel;
        }

        public async Task<BuscaClienteNacionalidadeViewModel> GetBuscarClientesNacionalidade(BuscaCliente result)
        {
            List<PaisesClientesViewModel> dados = new List<PaisesClientesViewModel>();
            BuscaClienteNacionalidadeViewModel retorno = new BuscaClienteNacionalidadeViewModel();

            try
            {
                for (var i = 0; i < result.Results.Count(); i++)
                {
                    if (result.Results[i].Nat == "AU") 
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Austrália",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "BR")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Brasil",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "CA")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Canadá",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "CH")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Suíça",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "DE")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Alemanha",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "DK")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Dinamarca",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "ES")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Espanha",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "FI")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Finlândia",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "FR")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "França",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "GB")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Reino Unido",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "IE")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Irlanda",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "IR")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Irã",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "NL")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Holanda",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "NZ")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Nova Zelândia",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "TR")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Turquia",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }
                    else if (result.Results[i].Nat == "US")
                    {
                        dados.Add(new PaisesClientesViewModel
                        {
                            Nome = "Estados Unidos da América",
                            Sigla = result.Results[i].Nat,
                            
                        });
                    }

                }

                retorno.Australia = dados.Count(x => x.Nome == "Austrália");
                retorno.Brasil = dados.Count(x => x.Nome == "Brasil");
                retorno.Canada = dados.Count(x => x.Nome == "Canadá");
                retorno.Suica = dados.Count(x => x.Nome == "Suíça");
                retorno.Alemanha = dados.Count(x => x.Nome == "Alemanha");
                retorno.Dinamarca = dados.Count(x => x.Nome == "Dinamarca");
                retorno.Espanha = dados.Count(x => x.Nome == "Espanha");
                retorno.Finlandia = dados.Count(x => x.Nome == "Finlândia");
                retorno.Franca = dados.Count(x => x.Nome == "França");
                retorno.ReinoUnido = dados.Count(x => x.Nome == "Reino Unido");
                retorno.Irlanda = dados.Count(x => x.Nome == "Irlanda");
                retorno.Ira = dados.Count(x => x.Nome == "Irã");
                retorno.Holanda = dados.Count(x => x.Nome == "Holanda");
                retorno.NovaZelandia = dados.Count(x => x.Nome == "Nova Zelândia");
                retorno.Turquia = dados.Count(x => x.Nome == "Turquia");
                retorno.EstadosUnidosAmerica = dados.Count(x => x.Nome == "Estados Unidos da América");
            }
            catch (Exception ex)
            {

            }

            return retorno;
        }

        public async Task<List<BuscaClienteMulheresAdultasViewModel>> GetBuscarClientesMulheresAdultas(BuscaCliente result)
        {
            List<BuscaClienteMulheresAdultasViewModel> retorno = new List<BuscaClienteMulheresAdultasViewModel>();

            try
            {
                var mulheres = result.Results.FindAll(x => x.Gender == "female");

                for (var i = 0; i < mulheres.Count; i++)
                {
                    int idade = DateTime.Now.Year - mulheres[i].Dob.Year;

                    if (idade >= 18)
                    {
                        retorno.Add(new BuscaClienteMulheresAdultasViewModel {
                            Nome = mulheres[i].Name.First,
                            SobreNome = mulheres[i].Name.Last,
                            Email = mulheres[i].Email,
                            Telefone = mulheres[i].Phone,
                            Idade = idade,
                        });
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return retorno;
        }
    }
}
