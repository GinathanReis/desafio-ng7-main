const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: 'Numero de Clientes por Região',
        data: [12, 19, 3, 5, 2, 3],
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


function bnt_dashboard(){
  dashboard.style.display='block';
  bnt_dash.style.background='#F2F2F2';
  imagem_dashboard.style.filter = "none";
  h2_bnt_dashboard.style.color ='#828284'

  Sdecrevendoafonte.style.display='none'
  bntINS.style.background='none';
  imagemInst.style.filter = 'brightness(0) invert(1)';
  H2inst.style.color='white'

  bntKPIS.style.background='none';
  imagemKPIS.style.filter = 'brightness(0) invert(1)';
  h2_KPIS.style.color='white';
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

  bntKPIS.style.background='none';
  imagemKPIS.style.filter = 'brightness(0) invert(1)';
  h2_KPIS.style.color='white';
}