//Variáveis de desenvolvimento não podem ser utilizadas em produção.
//Isto é apenas um TESTE.
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require('dotenv').config();
console.log(process.env.NODE_ENV);