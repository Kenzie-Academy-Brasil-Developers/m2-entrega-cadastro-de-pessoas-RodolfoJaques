// Classe "molde de Pessoa"
class Pessoa {
    constructor(nome,sobrenome,DataDeNascimento,email,contato,telefone,cargo,id){

        this._nome              = nome
        this._sobrenome         = sobrenome
        this._DataDeNascimento  = DataDeNascimento
        this._email             = email
        this._contato           = contato
        this._telefone          = telefone
        this._cargo             = cargo 
        this.id                 = id

        this.quantidadeDeCadastrados()
    }
    
    //Adiciona usuario a lista
    static addPessoaLista(ppl){

        const lista             = document.getElementById('lista-de-alunos');

        const itemLista         = document.createElement('li');

        const spanNome          = document.createElement('span');
        spanNome.innerText      = `${ppl._nome} ${ppl._sobrenome}`;

        const spanEmail         = document.createElement('span');
        spanEmail.innerText     = ppl._email;

        const spanCargo         = document.createElement('span');
        spanCargo.innerText     = ppl._cargo;

        itemLista.append(spanNome, spanEmail, spanCargo);

        lista.append(itemLista);
        
        return this
    }

    //Filtra usuario
    static filtro(event){

        const lista         = document.getElementById('lista-de-alunos');
        lista.innerHTML     = '';

        if(event.target.parentNode.children[0].value === 'Todos'){

            for(let i = 0; i < arraysFiltro.arrayTodos.length; i++){

                Pessoa.addPessoaLista(arraysFiltro.arrayTodos[i]);
            }

        }else if(event.target.parentNode.children[0].value === 'Aluno'){

            for(let i = 0; i < arraysFiltro.arrayAluno.length; i++){

                Pessoa.addPessoaLista(arraysFiltro.arrayAluno[i]);
            }
            
        }else if(event.target.parentNode.children[0].value === 'Facilitador'){

            for(let i = 0; i < arraysFiltro.arrayFacilitador.length; i++){

                Pessoa.addPessoaLista(arraysFiltro.arrayFacilitador[i]);
            }
            
        }else if(event.target.parentNode.children[0].value === 'Instrutor'){

            for(let i = 0; i < arraysFiltro.arrayInstrutor.length; i++){

                Pessoa.addPessoaLista(arraysFiltro.arrayInstrutor[i]);
            }
            
        }
    }
    
    //função que restringe acesso a menores de idade
    static restricaoDeIdade(string){
    
    let data        = new Date()

    let diaAtual    = data.getDate();
    let mesAtual    = data.getMonth() + 1;
    let anoAtual    = data.getFullYear();

    let ano         = Number(string.slice(0,4));
    let mes         = Number(string.slice(6,7)); 
    let dia         = Number(string.slice(8));

    if(anoAtual - ano > 18){
        return false

    }else if(anoAtual - ano === 18){

        if(mes < mesAtual){
            return false

        }else if(mes === mesAtual){

            if(dia <= diaAtual){
                return false
            }
        }
    }
    return true 
    }

    //metodo que exibe quantidade de cadastrados
    quantidadeDeCadastrados(){

        const totalAlunos = document.getElementById("total-alunos");
        totalAlunos.innerText = this.id
    }
}

//Click no filtro
const filtrando = document.getElementById('btn');
filtrando.addEventListener('click', Pessoa.filtro);

// Classe com arrays para filtagem
class ArraysFiltro {
    constructor(){
        this.arrayTodos         = []
        this.arrayAluno         = []
        this.arrayFacilitador   = []
        this.arrayInstrutor     = []
    }
}
const arraysFiltro = new ArraysFiltro();