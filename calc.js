let soma
let subtraçao
let mult
let div
let v1=parseInt(prompt("indique o primeiro numero:"))
let v2=parseInt(prompt("Indique seu segundo número "))


function adiçao(n1,n2){
      soma=n1+n2
      return soma
}
function sub(n1,n2){
    subtraçao=n1-n2
   return subtraçao
}
function multp(n1,n2){
    mult=n1+n2
    return mult
}
function diva(n1,n2){
    div=n1+n2
    return div
}
function ope(){
    let valor=prompt("escolha a operaçao que sera efetuada")
    return valor
}
   
let recepçao =ope()
console.log(recepçao) 

if(recepçao=="soma"){
    let result=adiçao(v1,v2)
    console.log(result)
}
else if(recepçao=="subtraçao"){
    let result=sub(v1,v2)
    console.log(result)
}
else if(recepçao=="multiplicaçao"){
    let result=multp(v1,v2)
    console.log(result)
}
else if(recepçao=="divisao"&& v2!=0){
    let result=diva(v1,v2)
    console.log(result)
}
else{
    console.log("essa funçao nao existe")
}
