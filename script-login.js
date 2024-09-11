function irParaCadastro() {
    document.location.href = './cadastro.html'
  }

  function login() {
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;

// EXERCICIO verificar se o usuário digitou o nome e a senha antes de buscar o login do localStorage
if (name === '' || password === '') {
          alert('Preencha todos os campos');
          return;
      }

      const obj = {
          name: name,
          password: password
      };

      const login = JSON.parse(localStorage.getItem('login'));

      if (obj.name === login.name && obj.password === login.password) {

// EXERCICIO redirecionar o usuário para a tela de bem vindo 
          document.location.href = './bemvindo.html'


        alert('Pode Entrar');
      } else {
        alert('Usuário ou senha inválidos');
      }

  }