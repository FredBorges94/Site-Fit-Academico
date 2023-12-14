const form = document.getElementById("form");


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let cartao = document.querySelector('#cartao')
let labelCartao = document.querySelector('#labelCartao')
let validCartao = false

let mesValidade = document.querySelector('#mesValidade')
let labelMes = document.querySelector('#labelMes')
let validMes = false

let anoValidade = document.querySelector('#anoValidade')
let labelAno = document.querySelector('#labelAno')
let validAno = false

let cvv = document.querySelector('#cvv')
let labelCvv = document.querySelector('#labelCvv')
let validCvv = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.length <= 4){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira no minimo 5 caracteres'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

endereco.addEventListener('keyup', () => {
  if(endereco.value.length <= 4){
    labelEndereco.setAttribute('style', 'color: red')
    labelEndereco.innerHTML = 'Endereço'
    endereco.setAttribute('style', 'border-color: red')
    validEndereco = false
  } else {
    labelEndereco.setAttribute('style', 'color: green')
    labelEndereco.innerHTML = 'Endereço'
    endereco.setAttribute('style', 'border-color: green')
    validEndereco = true
  }
})

cidade.addEventListener('keyup', () => {
  if(cidade.value.length <= 5){
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'Cidade'
    cidade.setAttribute('style', 'border-color: red')
    validCidade = false
  } else {
    labelCidade.setAttribute('style', 'color: green')
    labelCidade.innerHTML = 'Cidade'
    cidade.setAttribute('style', 'border-color: green')
    validCidade = true
  }
})
estado.addEventListener('keyup', () => {
  if(estado.value.length != 2){
    labelEstado.setAttribute('style', 'color: red')
    labelEstado.innerHTML = 'Estado'
    estado.setAttribute('style', 'border-color: red')
    validEstado = false
  } else {
    labelEstado.setAttribute('style', 'color: green')
    labelEstado.innerHTML = 'Estado'
    estado.setAttribute('style', 'border-color: green')
    validEstado = true
  }
})
cep.addEventListener('keyup', () => {
  if(cep.value.length != 8){
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = 'CEP INVALIDO'
    cep.setAttribute('style', 'border-color: red')
    validCep = false
  } else {
    labelCep.setAttribute('style', 'color: green')
    labelCepinnerHTML = 'CEP VALIDO'
    cep.setAttribute('style', 'border-color: green')
    validCep = true
  }
})
cpf.addEventListener('keyup', () => {
  if(cpf.value.length != 11){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'Insira 11 numeros'
    cpf.setAttribute('style', 'border-color: red')
    validCpf = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'CPF Verificado'
    cpf.setAttribute('style', 'border-color: green')
    validCpf = true
  }
})
cartao.addEventListener('keyup', () => {
  if(cartao.value.length != 16){
    labelCartao.setAttribute('style', 'color: red')
    labelCartao.innerHTML = 'Cartao invalido'
    cartao.setAttribute('style', 'border-color: red')
    validCartao = false
  } else {
    labelCartao.setAttribute('style', 'color: green')
    labelCartao.innerHTML = 'Cartão válido'
    cartao.setAttribute('style', 'border-color: green')
    validCartao = true
  }
})
mesValidade.addEventListener('keyup', () => {
  if(mesValidade.value.length == 12){
    labelMes.setAttribute('style', 'color: red')
    labelMes.innerHTML = 'Mês inválido'
    mesValidade.setAttribute('style', 'border-color: red')
    validMes = false
  } else {
    labelMes.setAttribute('style', 'color: green')
    labelMes.innerHTML = 'Mês valido'
    mesValidade.setAttribute('style', 'border-color: green')
    validMes = true
  }
})
anoValidade.addEventListener('keyup', () => {
  if(anoValidade.value.length == 12){
    labelAno.setAttribute('style', 'color: red')
    labelAno.innerHTML = 'Ano invalido'
    anoValidade.setAttribute('style', 'border-color: red')
    validAno = false
  } else {
    labelAno.setAttribute('style', 'color: green')
    labelAno.innerHTML = 'Ano valido'
    anoValidade.setAttribute('style', 'border-color: green')
    validAno = true
  }
})
cvv.addEventListener('keyup', () => {
  if(cvv.value.length <= 2){
    labelCvv.setAttribute('style', 'color: red')
    labelCvv.innerHTML = 'CVV invalido'
    cvv.setAttribute('style', 'border-color: red')
    validCvv = false
  } else {
    labelCvv.setAttribute('style', 'color: green')
    labelCvv.innerHTML = 'CVV valido'
    cvv.setAttribute('style', 'border-color: green')
    validCvv = true
  }
})

function cadastrar(){
  if(validNome && validEmail && validEndereco && validCidade && validEstado && validCep && validCpf && validCartao && validMes && validAno && validCvv){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      enderecoCad: endereco.value,
      cidadeCad: cidade.value,
      estadoCad: estado.value,
      cepCad: cep.value,
      cpfCad: cpf.value,
      cartaoCad: cartao.value,
      mesValidade: mesValidade.value,
      anoValidadeCad: anoValidade.value,
      cvvCad: cvv.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Processando Pagamento..</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de Processar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
// app.js
const mysql = require('mysql');

const con = mysql.createConnection({
    host: '127.0.0.1', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '84256112Fred!', // A senha do usuário. Ex: user123
    database: 'C:\Users\fredb\OneDrive\Documentos\Codigo\Codigo\node-mysql>' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})
