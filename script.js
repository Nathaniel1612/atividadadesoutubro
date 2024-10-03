//Crie um objeto do tipo pessoa que possua o nome, a idade e a cidade onde mora. Mostre esse objeto no console do navegador. Posteriormente, mostre um menu de atualização de idade ou cidade. Após o usuário escolher qual dado deseja atualizar, leia a atualização desse dado, faça a alteração no objeto e imprima novamente o objeto no console.


const pessoa={
    name: prompt('Digite seu nome'),
    idade: prompt('Digite sua idade'),
    cidade: prompt('Digite o nome da sua cidade'),
}

 console.log(pessoa.name)
 console.log(pessoa.idade)
 console.log(pessoa.cidade)

 let atua=prompt('Gostaria de atualizar a cidade ou sua idade?')
 if(atua='cidade'){
    pessoa.cidade=prompt('Indique a cidade')
    console.log(pessoa.cidade)
    console.log("Obrigado pela atualizaçao")
 }
 
 else if(atua='idade'){
    pessoa.idade=prompt('Indique a idade')
    console.log(pessoa.idade)
    console.log("obrigado pela atualizaçao")
    
 }else{
    console.log("Agradecemos pelo cadastro")
 }
 




    