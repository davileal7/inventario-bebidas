// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDIS2HLr-EP9ct41eloVyCbubLeE8yW6Q",
  authDomain: "projeto-app-57ff8.firebaseapp.com",
  projectId: "projeto-app-57ff8",
  storageBucket: "projeto-app-57ff8.appspot.com",
  messagingSenderId: "30541203678",
  appId: "1:30541203678:web:018b455f0dd95173305a4f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

const db = getDatabase();
//--------------Referencias----------------------------------------------//

var bebida = document.getElementById("Namebox")
var unidade = document.getElementById("Secbox")

var ml = document.getElementById("ml")
var kg = document.getElementById("kg")
var fabricado = document.getElementById("fabricado")
var validade = document.getElementById("validade")
var observacao = document.getElementById("obs")


var insBtn = document.getElementById("Insbtn")
var selBtn = document.getElementById("Selbtn")



//--------------ENVIAR----------------------------------------------//
function InserirDado(){

    if (bebida.value === '') {
        alert("Preencha o nome do produto!");
        return;
      }

    set(ref(db, "Bebidas/"+ bebida.value), {
        Estoque_Atual: unidade.value,
        Litros: ml.value,
        kg: kg.value,
        Fabricado: fabricado.value,
        Validade: validade.value,
        Observacao: observacao.value
    }).then(() => {
       alert("Produto Bebida enviado") 
    }).catch((error)=> {
        alert("falha, error"+error)
    })

   

    bebida.value = ""
    unidade.value = ""
    ml.value = ""
    kg.value = ""
    fabricado.value = ""
    validade.value = ""
    observacao.value = ""
}


//--------------Select Datas----------------------------------------------//

function SelectData(){
    const dbref = ref(db);

    get(child(dbref,"Bebidas/"+ bebida.value)).then((snapshot) => {
        if(snapshot.exists()){
            unidade.value = snapshot.val().Estoque_Atual;
            ml.value = snapshot.val().Litros;
            kg.value = snapshot.val().kg;
            fabricado.value = snapshot.val().Fabricado;
            validade.value = snapshot.val().Validade;
            observacao.value = snapshot.val().Observacao;
        }
        else {
            alert("Produto não encontrado, digite o mesmo nome que foi enviado")
        }
    }).catch((error) => {
        alert("falha, error"+error);
    })
}

//--------------UPDATE----------------------------------------------//


//--------------DELETE----------------------------------------------//
 

insBtn.addEventListener('click', InserirDado)
selBtn.addEventListener('click', SelectData)