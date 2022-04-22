//Click no botão de cadastro
const passandoInfosDoForm = document.getElementById("register-button");
passandoInfosDoForm.addEventListener('click',function(event){

    criarNovoCadastro(event);    
    event.preventDefault() 
})

//amazena usuario(instancia da classe) para acesso no console
let user = {}

//Ponto de partida ID numerico
let nId  = 1


//Cria novo cadastro de pessoa
function criarNovoCadastro(event){ 
    
    let userNome        = event.target.parentNode.children[3].value
    let userSobrenome   = event.target.parentNode.children[5].value
    let userNascimento  = event.target.parentNode.children[7].value
    let userEmail       = event.target.parentNode.children[9].value
    let userContato     = event.target.parentNode.children[11].value
    let userTelefone    = event.target.parentNode.children[13].value
    let userCargo       = event.target.parentNode.children[15].value

    let analizaIdade = Pessoa.restricaoDeIdade(userNascimento)
    
    //verificação de idade
    if(analizaIdade === true){

        return alert("Usuario menor de 18 anos.\n\nÉ vetado o cadastro a menores de idade.")

    }else if(userNascimento === ''){

        return alert('Insira a data de nascimento.')
    }

    //Verificação de usuario existente, atraves do e-mail
    for(let i = 0; i < arraysFiltro.arrayTodos.length; i ++){

        if(arraysFiltro.arrayTodos[i]._email === userEmail){

            return alert("Usuario não pode ser registrado.\n\nE-mail já cadastrado!");
        }
    }

    //criação de instancia de pessoa
    user = new Pessoa (userNome,userSobrenome,userNascimento,userEmail,userContato, userTelefone,userCargo,nId)

    // Adiciona cadastrado no devido array para ser filtrado posteriormente
    if(user._cargo === 'Aluno'){

        arraysFiltro.arrayTodos.push(user);
        arraysFiltro.arrayAluno.push(user);

    }else if(user._cargo === 'Facilitador'){

        arraysFiltro.arrayTodos.push(user);
        arraysFiltro.arrayFacilitador.push(user);

    }else if(user._cargo === 'Instrutor'){

        arraysFiltro.arrayTodos.push(user);
        arraysFiltro.arrayInstrutor.push(user);

    }   

    Pessoa.addPessoaLista(user)

    //incremento do ID numerico
    nId++    
}