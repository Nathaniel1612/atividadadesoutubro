 let soma
let subtraçao
let mult
let div
let n1=parseInt(prompt("indique o primeiro numero:"))
let n2=parseInt(prompt("Indique seu segundo número "))


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
let ope=prompt("qual a operaçao desejada?")
if(ope=soma){
    console.log( adiçao)
}
else if(ope=subtraçao){
    console.log(sub)
}
else if(ope=mult){
    console.log(multp)
}
else if(ope=div){
    console.log(diva)
}

