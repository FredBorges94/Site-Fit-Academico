var Db = require('./dboperations');
var Cliente = require('./cliente');

const dboperations = require('./dboperations');
const nodemailer = require('nodemailer');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

//Fica esperando as proximas chamadas
router.use((request,response,next)=> {
    console.log('middleware');
    next();
})



// Operações com o Cliente

router.route('/Cliente').get((request, response) => {
    dboperations.getClientes().then(result => {
        if (result && result.length > 0) {
            response.json(result);
        } else {
            response.json({ message: 'Nenhum cliente encontrado.' });
        }
    }).catch(error => {
        console.error(error);
        response.status(500).json({ error: 'Erro ao obter clientes do banco de dados.' });
    });
});


router.route('/Cliente/:CPF').get((request,response)=>{
    dboperations.getCliente(request.params.CPF).then(result =>{
        response.json(result[0]);
    })
})


router.route('/Cliente/resgatarEmail/:email').get((request,response)=>{
    dboperations.getCliente(request.params.email).then(result =>{
        response.json(result[0]);
    })
})

router.route('/Cliente').post((request,response)=>{
    let Cliente = {...request.body}


    dboperations.addCliente(Cliente).then(result =>{
        response.status(201).json(result);
    })
})



var port = process.env.PORT || 8090;
app.listen(port);
console.log('API de Clientes esta rodando na ' + port);
