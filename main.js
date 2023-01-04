let jugador1 = [];
let jugador2 = [];
combinacion1 = [1,2,3];
combinacion2 = [4,5,6];
combinacion3 = [7,8,9];
combinacion4 = [1,4,7];
combinacion5 = [2,5,8];
combinacion6 = [3,6,9];
combinacion7 = [1,5,9];
combinacion8 = [3,5,7];
let flagTurno = '1';
function Refresh(){
    location.reload();
}

function clic(id){
    let acum = 0;
    if(flagTurno=='1'){
        jugador1.push(id);
        document.getElementById('btn' + id).innerText = 'X';
        
        console.log("Id's Jugador 1")
        console.log(jugador1.toString());
        validar(jugador1,flagTurno);
        document.getElementById('turno').textContent = 'Turno Jugador 2';
        flagTurno = '2';
    }else{
        jugador2.push(id);
        document.getElementById('btn' + id).innerText = 'O';
        
        console.log("Id's Jugador 2")
        console.log(jugador2.toString());
        validar(jugador2,flagTurno);
        document.getElementById('turno').textContent = 'Turno Jugador 1';
        flagTurno = '1';
    }

    console.log("Turno : " + flagTurno);    
    console.log("==================================================");
}

//Recursivo
function ValidarRecursivo (indice,combinacion,jugador){
    console.log("ValidarRecursivo");
    let acumulador = 0;
    for(let i = 0  ; i < jugador.length ;i++){
        console.log("x : " + jugador[i]);
        for(let x = 0;x < combinacion.length ;x++){
           
            if(jugador[i] == combinacion[x]){
                console.log("ING");
                acumulador++;
                break;
            }
        }
    }
    acum = acumulador;
    console.log("ACUM : " + acumulador);
    if(acumulador < 3){
        indice ++;
        if(indice==1){
            console.log('1');
            ValidarRecursivo(indice,combinacion2,jugador);
        }else if(indice==2){
            console.log('2');
            ValidarRecursivo(indice,combinacion3,jugador);
        }else if(indice==3){
            console.log('3');
            ValidarRecursivo(indice,combinacion4,jugador);
        }else if(indice==4){
            console.log('4');
            ValidarRecursivo(indice,combinacion5,jugador);
        }else if(indice==5){
            console.log('5');
            ValidarRecursivo(indice,combinacion6,jugador);
        }else if(indice==6){
            console.log('6');
            ValidarRecursivo(indice,combinacion7,jugador);
        }else if(indice==7){
            console.log('7');
            ValidarRecursivo(indice,combinacion8,jugador);
        }
        
    }
}

function validar(jugador,flag){
    
    if(jugador.length>2){
        
        jugador.sort(function(a,b){
            return a - b ;
        })

        ValidarRecursivo(0,combinacion1,jugador);
       
        console.log("acum : " + acum.toString());
        if(acum == 3 ){
            if(flag=='1'){
                console.log("Ganador1");
                document.getElementById('estado').textContent = 'Ganador Jugador 1';
            }else{
                console.log("Ganador2");
                document.getElementById('estado').textContent = 'Ganador Jugador 2';
            }
        }
    }
}
