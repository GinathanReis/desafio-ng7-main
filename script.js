const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

/*  Botão para abri a aba deshbor   */


let dashboard = window.document.getElementById('dashboard')
let bnt_dash = window.document.getElementById('bnt_dashboard')
let imagem_dashboard = window.document.getElementById('imagem_dashboard')
let h2_bnt_dashboard = window.document.getElementById('h2_bnt_dashboard')

let Sdecrevendoafonte = window.document.getElementById('Sdecrevendoafonte')
let bntINS = window.document.getElementById('bntINS')
let imagemInst = window.document.getElementById('imagemInst')
let H2inst = window.document.getElementById('H2inst')

let bntKPIS = window.document.getElementById('bntKPIS')
let imagemKPIS = window.document.getElementById('imagemKPIS')
let h2_KPIS = window.document.getElementById('h2_KPIS')

let abaConfig = window.document.getElementById('abaConfig')
let AbaKpis = window.document.getElementById('AbaKpis')


function bnt_dashboard(){
  dashboard.style.display='block';
  bnt_dash.style.background='#F2F2F2';
  imagem_dashboard.style.filter = "none";
  h2_bnt_dashboard.style.color ='#828284'

  Sdecrevendoafonte.style.display='none'
  bntINS.style.background='none';
  imagemInst.style.filter = 'brightness(0) invert(1)';
  H2inst.style.color='white'

  AbaKpis.style.display='none';
  bntKPIS.style.background='none';
  imagemKPIS.style.filter = 'brightness(0) invert(1)';
  h2_KPIS.style.color='white';
}


async function InicializaChamadas(){
  fetch('http://localhost:23692/BuscaClientes/GetBuscarClientes', {method: 'GET'})
    .then(res => {
      return res.json();
    })
    .then(data => {

      /*  Preenche informações dos totais de cada cliente   */
      window.document.getElementById('ClientesHomens').innerHTML = data.buscaCliente.totalClientesHomens;
      window.document.getElementById('ClientesMulheres').innerHTML = data.buscaCliente.totalClienteMulheres;
      window.document.getElementById('ClientesTotais').innerHTML = data.buscaCliente.totalClientes;

      /*  Preenche gráfico do chart.js   */
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Alemanha", "Austrália", "Brasil", "Canadá", "Dinamarca", "Espanha", "Estados Unidos da América", "Finlândia", "França", "Holanda", "Irã", "Irlanda", "Nova Zelândia", "Reino Unido", "Suiça", "Turquia"],
          datasets: [{
            label: 'Países que mais possuem possíveis clientes',
            data: [data.buscaClienteNacionalidade.alemanha, 
                  data.buscaClienteNacionalidade.australia, 
                  data.buscaClienteNacionalidade.brasil,
                  data.buscaClienteNacionalidade.canada, 
                  data.buscaClienteNacionalidade.dinamarca, 
                  data.buscaClienteNacionalidade.espanha, 
                  data.buscaClienteNacionalidade.estadosUnidosAmerica, 
                  data.buscaClienteNacionalidade.finlandia, 
                  data.buscaClienteNacionalidade.franca, 
                  data.buscaClienteNacionalidade.holanda, 
                  data.buscaClienteNacionalidade.ira, 
                  data.buscaClienteNacionalidade.irlanda, 
                  data.buscaClienteNacionalidade.novaZelandia, 
                  data.buscaClienteNacionalidade.reinoUnido, 
                  data.buscaClienteNacionalidade.suica, 
                  data.buscaClienteNacionalidade.turquia],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ["Clientes Homens", "Clientes Mulheres"],
          datasets: [{
            label: 'Genêros Clientes',
            data: [data.buscaCliente.totalClientesHomens, data.buscaCliente.totalClienteMulheres],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      /*  Preenche clientes mulheres acima dos 18 anos   */
      let dataColuna = [];
      for(let i = 0; i < data.buscaClienteMulheresAdultas.length; i++){
        dataColuna.push([data.buscaClienteMulheresAdultas[i].nome, data.buscaClienteMulheresAdultas[i].sobreNome, data.buscaClienteMulheresAdultas[i].idade.toString(), data.buscaClienteMulheresAdultas[i].email, data.buscaClienteMulheresAdultas[i].telefone]);
      }

      new gridjs.Grid({
        columns: ["Nome", "Sobrenome", "Idade", "Email", "Telefone"],
        data: dataColuna,
        resizable: true,
        sort: true,
        search: true,
        pagination: {
          limit: 6
        },
        fixedHeader: true,
      }).render(document.getElementById("wrapper"))

    })
    .catch(error => {
      console.log(error);
    })
}



/*  Botão para abri a aba instituitons   */

function bnt_institutions(){
  dashboard.style.display='none'
  bnt_dash.style.background='none';
  imagem_dashboard.style.filter = "brightness(0) invert(1)";
  h2_bnt_dashboard.style.color ='white';
  
  Sdecrevendoafonte.style.display='block'
  bntINS.style.background='#F2F2F2';
  imagemInst.style.filter = "none";
  H2inst.style.color='#828284'

  AbaKpis.style.display='none';
  bntKPIS.style.background='none';
  imagemKPIS.style.filter = 'brightness(0) invert(1)';
  h2_KPIS.style.color='white';
}


/*  Botão para abri a aba KPIS   */

function bnt_KPIs(){
  dashboard.style.display='none'
  bnt_dash.style.background='none';
  imagem_dashboard.style.filter = "brightness(0) invert(1)";
  h2_bnt_dashboard.style.color ='white';


  bntINS.style.background='none';
  imagemInst.style.filter = 'brightness(0) invert(1)';
  H2inst.style.color='white'

  Sdecrevendoafonte.style.display='none'
  AbaKpis.style.display='block';
  bntKPIS.style.background='#F2F2F2';
  imagemKPIS.style.filter = "none";
  h2_KPIS.style.color='#828284';
}

/*  Botão para abri e fechar a aba config  */

function bntConfig(){
  abaConfig.style.display='block';

}
function frecharconf(){
  abaConfig.style.display='none';
  dashboard.style.display='block';

  Sdecrevendoafonte.style.display='none'
  bnt_dash.style.background='#F2F2F2';
  imagem_dashboard.style.filter = "none";
  h2_bnt_dashboard.style.color ='#828284'
  

  bntINS.style.background='none';
  imagemInst.style.filter = 'brightness(0) invert(1)';
  H2inst.style.color='white'

  
  abaConfig.style.display='nono';
  AbaKpis.style.display='none';
  bntKPIS.style.background='none';
  imagemKPIS.style.filter = 'brightness(0) invert(1)';
  h2_KPIS.style.color='white';
}