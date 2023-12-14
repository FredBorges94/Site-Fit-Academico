window.addEventListener('DOMContentLoaded', () => {

    
    const clienteForm = document.getElementById('clientForm');
    
    
    clienteForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const nomeInput = document.getElementById('Nome');
        const emailInput = document.getElementById('email');
        const cpfInput = document.getElementById('CPF');
        const senhaInput = document.getElementById('senha');
      
        
        const emailPadronizado = "'"+emailInput.value+"'";
        
        const clienteData = {
          
          "cpf": cpfInput.value,
          "nome": nomeInput.value,
          "email": emailPadronizado,
          "senha": senhaInput.value

        };
    

        fetch('http://localhost:8090/api/Cliente', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(clienteData)
    
        })
          .then(response => response.json())
          .then(data => {
            console.log('Cliente cadastrado:', data);

            alert("Cadastro Realizado Com Sucesso");

            window.location.href = '../login.html';
           
          })
          .catch(error => {

            
            alert("Falha Em Realizar O Cadastro");
            console.error('Ocorreu um erro ao cadastrar o cliente:', error);
          });
      });

});


window.addEventListener('DOMContentLoaded', () => {

    
    const clienteForm = document.getElementById('clientForm');
    
    
    clienteForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const nomeInput = document.getElementById('Nome');
        const emailInput = document.getElementById('email');
        const cpfInput = document.getElementById('CPF');
        const senhaInput = document.getElementById('senha');
      
        
        const emailPadronizado = "'"+emailInput.value+"'";
        
        const clienteData = {
          
          "cpf": cpfInput.value,
          "nome": nomeInput.value,
          "email": emailPadronizado,
          "senha": senhaInput.value

        };
    

        fetch('http://localhost:8090/api/Cliente', {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(clienteData)
    
        })
          .then(response => response.json())
          .then(data => {
            console.log('Cliente cadastrado:', data);

            alert("Cadastro Realizado Com Sucesso");

            window.location.href = 'login.html';
           
          })
          .catch(error => {

            
            alert("Falha Em Realizar O Cadastro");
            console.error('Ocorreu um erro ao cadastrar o cliente:', error);
          });
      });

});
