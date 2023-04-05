let id = document.getElementById('id')
let pagina1 = document.getElementById("primera-hoja")
let siguiente = document.getElementById('siguiente')
let pasado = document.getElementById("pasado")
let andrea = document.getElementById("andreafoto")
let briant = document.getElementById("briantfoto")
let presentaciona = document.getElementById("presentacion-andrea")
let presentacionb =document.getElementById("presentacion-briant")
let seguira = document.getElementById('seguira')
let seguirb = document.getElementById('seguirb')

// trabajos del pasado. 
let trabajo1pasado = document.getElementById('trabajo1pasado')
let trabajo2pasado = document.getElementById('trabajo2pasado')
let trabajo3pasado = document.getElementById('trabajo3pasado')
let trabajo4pasado = document.getElementById('trabajo4pasado')
let trabajo5pasado = document.getElementById('trabajo5pasado')
let trabajo6pasado = document.getElementById('trabajo6pasado')
let trabajosdelpasado = document.getElementById('trabajosdelpasado')

let pasadoprimero = document.getElementById('pasadoprimero')
let para2pasado = document.getElementById('para2pasado')

let pasadosegundo = document.getElementById('pasadosegundo')
let para3pasado = document.getElementById('para3pasado')

let pasadotercero = document.getElementById('pasadotercero')
let tocame = document.getElementById("tocameysalgo")
let para4pasado = document.getElementById('para4pasado')

let pasadocuarto = document.getElementById('pasadocuarto')
let conversacionpp = document.getElementById('conversacionpp')
let para5pasado = document.getElementById('para5pasado')

let pasadoquinto = document.getElementById('pasadoquinto')
let para6pasado = document.getElementById('para6pasado')


let pasadosexto = document.getElementById('pasadosexto')
let parapresente = document.getElementById('parapresente')
// Llegó el presente
 
let presenteac = document.getElementById("presenteac")
let jugar = document.getElementById('jugar')
let encontrar = document.getElementById('encontrar')
let primerobjeto = document.getElementById('primerobjeto')
let segundoobjeto = document.getElementById('segundoobjeto')
let tercerobjeto = document.getElementById('tercerobjeto')
let cuartoobjeto = document.getElementById('cuartoobjeto')
let quintoobjeto = document.getElementById('quintoobjeto')

let encontrar2 = document.getElementById('encontrar2')
let encontrar3 = document.getElementById('encontrar3')
let encontrar4 = document.getElementById('encontrar4')
let encontrar5 = document.getElementById('encontrar5')
let futuro1 = document.getElementById('futuro1')




function iniciarprograma(){
    pagina1.style.display = "flex"
    pasado.style.display = "none"
    presentaciona.style.display = "none"
    presentacionb.style.display = "none"
    trabajosdelpasado.style.display = "none"
    presenteac.style.display = "none"
    encontrar.style.display = 'none'
    encontrar2.style.display = 'none'
    encontrar3.style.display = 'none'
    encontrar4.style.display = 'none'
    
    encontrar5.style.display = 'none'
    futuro1.style.display = 'none'
    

    andrea.addEventListener('click', infoandrea)
    briant.addEventListener('click', infobriant)
    siguiente.addEventListener('click', pasarpagina)

}
function infoandrea() {
    presentaciona.style.display = "flex"
    pagina1.style.display = "none"
    siguiente.addEventListener('click', pasarpagina)
    seguira.addEventListener('click', iniciarprograma)
}
function infobriant( ){
    presentacionb.style.display = "flex"
    pagina1.style.display = "none"
    siguiente.addEventListener('click', pasarpagina)
    seguirb.addEventListener('click', iniciarprograma)
}

function pasarpagina(){
    pagina1.style.display = 'none'
    presentaciona.style.display = 'none'
    presentacionb.style.display = 'none'
    pasado.style.display = "flex"
    trabajo1pasado.addEventListener('click', pasado1)
    trabajo2pasado.addEventListener('click', pasado2)
    trabajo3pasado.addEventListener('click', pasado3)
    trabajo4pasado.addEventListener('click', pasado4)
    trabajo5pasado.addEventListener('click', pasado5)
    trabajo6pasado.addEventListener('click', pasado6)

}
//trabajos del pasado
//Trabajos del pasado
//trabajos del pasado
function pasado1(){
    pasado.style.display= 'none'
    trabajosdelpasado.style.display = 'flex'
    pasadoprimero.style.display = 'flex'
    pasadosegundo.style.display = 'none'
    pasadotercero.style.display = 'none'
    pasadocuarto.style.display = 'none'
    pasadoquinto.style.display = 'none'
    pasadosexto.style.display = 'none'
    para2pasado.addEventListener('click', pasado2)

}
function pasado2(){
    pasado.style.display= 'none'
    trabajosdelpasado.style.display = 'flex'
    pasadoprimero.style.display = 'none'
    pasadosegundo.style.display = 'flex'
    pasadotercero.style.display = 'none'
    pasadocuarto.style.display = 'none'
    pasadoquinto.style.display = 'none'
    pasadosexto.style.display = 'none'
    para3pasado.addEventListener('click', pasado3)
    
}
function pasado3(){
    pasado.style.display= 'none'
    trabajosdelpasado.style.display = 'flex'
    pasadoprimero.style.display = 'none'
    pasadosegundo.style.display = 'none'
    pasadotercero.style.display = 'flex'
    pasadocuarto.style.display = 'none'
    pasadoquinto.style.display = 'none'
    pasadosexto.style.display = 'none'
    tocame.style.display = 'none'
    para4pasado.addEventListener('click', pasado4)
}
function texto(){
    tocame.style.display = 'flex'
    
}
function borrar(){
    tocame.style.display = 'none'
}
function conversacion() {
    conversacionpp.style.display = 'flex'
}
function detenerMovimiento() {
    conversacionpp.style.display = 'none'
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowDown':
           conversacion()
            break;
    
        default:
            break;
    }
        
     
}

function pasado4(){
    pasado.style.display= 'none'
    trabajosdelpasado.style.display = 'flex'
    pasadoprimero.style.display = 'none'
    pasadosegundo.style.display = 'none'
    pasadotercero.style.display = 'none'
    pasadocuarto.style.display = 'flex'
    pasadoquinto.style.display = 'none'
    pasadosexto.style.display = 'none'
    conversacionpp.style.display = 'none'
    para5pasado.addEventListener('click', pasado5)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)   
}

function pasado5(){
    pasado.style.display= 'none'
    trabajosdelpasado.style.display = 'flex'
    pasadoprimero.style.display = 'none'
    pasadosegundo.style.display = 'none'
    pasadotercero.style.display = 'none'
    pasadocuarto.style.display = 'none'
    pasadoquinto.style.display = 'flex'
    pasadosexto.style.display = 'none'
    para6pasado.addEventListener('click', pasado6)
}
function pasado6(){
    pasado.style.display= 'none'
    trabajosdelpasado.style.display = 'flex'
    pasadoprimero.style.display = 'none'
    pasadosegundo.style.display = 'none'
    pasadotercero.style.display = 'none'
    pasadocuarto.style.display = 'none'
    pasadoquinto.style.display = 'none'
    pasadosexto.style.display = 'flex'
    parapresente.addEventListener('click', presente)
}
function presente(){
 presenteac.style.display = "flex"
 pasadosexto.style.display = 'none'
 trabajosdelpasado.style.display = 'none'
 jugar.addEventListener('click', Buscalo)
}
function Buscalo(){
    presenteac.style.display = "none"
    encontrar.style.display = 'flex'
    primerobjeto.addEventListener('click', twix)
}
function twix(){
    encontrar.style.display = 'none'
    encontrar2.style.display = 'flex'
    segundoobjeto.addEventListener('click', jalo)

}
function jalo(){
    encontrar2.style.display = 'none'
    encontrar3.style.display = 'flex'
    tercerobjeto.addEventListener('click', buya)
}
function buya(){
    encontrar3.style.display = 'none'
    encontrar4.style.display = 'flex'
    cuartoobjeto.addEventListener('click', quinto)
}
function quinto(){
    encontrar4.style.display = 'none'
    encontrar5.style.display = 'flex'
    quintoobjeto.addEventListener('click', futuro123)
}
function futuro123(){
    encontrar5.style.display = 'none'
    futuro1.style.display = 'flex'
}



window.addEventListener('load', iniciarprograma)