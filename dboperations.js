var config = require("./dbconfig"); //Pegando o arquivo que definimos como padrao
const sql = require('mssql'); //Padronização para conseguir fazer consultas


//Buscando todos os clientes de uma vez
async function getClientes(){

    try {
        

        let pool = await sql.connect(config);
        let fitCenter = await pool.request().query("SELECT * from [dbo].[Cliente]");

        //let fitCenter = await pool.request().query("SELECT * from Cliente");

        return fitCenter.recordsets;

    } catch (error) {
        
        console.log(error);
    }
}



async function getCliente(clientCPF){

    try {
        

        let pool = await sql.connect(config);
        let fitCenter = await pool.request()
        .input('input_parameter', sql.VarChar, clientCPF)
        .query("SELECT * from [dbo].[Cliente] where cpf = @input_parameter");

        return fitCenter.recordsets;

    } catch (error) {
        
        console.log(error);
    }
}


async function getClienteEmail(clientEmail){

    try {
        

        let pool = await sql.connect(config);
        let fitCenter = await pool.request()
        .input('input_parameter', sql.VarChar, clientEmail)
        .query("SELECT * from [dbo].[Cliente] where email = @input_parameter");

        return fitCenter.recordsets;

    } catch (error) {
        
        console.log(error);
    }
}



async function addCliente(client) {
    try {
      const pool = await sql.connect(config);
      const fitCenter = await pool.request()
        .query(`
            INSERT INTO [dbo].[Cliente] (
                [cpf],
                [nome],
                [email],
                [senha]
            ) VALUES (
                '${client.cpf}',
                '${client.nome}',
                ${client.email},
                '${client.senha}'
            )
        `);
  
      return fitCenter.recordsets;
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  }

  async function updSenha(Cliente) {
    try {

        let pool = await sql.connect(config);
        let loja = await pool.request()
            .input('input_parameter', sql.NVarChar(20), Cliente.cpf)
            .query(`UPDATE [dbo].[Cliente] SET
         
            [senha] = '${Cliente.senha}' 
            WHERE cpf = @input_parameter`);

        return loja.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {

    getClientes : getClientes,
    getCliente : getCliente,
    addCliente : addCliente,
    getClienteEmail : getClienteEmail,
    updSenha : updSenha

}
