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
 var num_item = document.getElementById("Rollbox")
 var produto = document.getElementById("Namebox")
 var unidade = document.getElementById("Secbox")
 var genbox = document.getElementById("Genbox")

 var ml = document.getElementById("ml")
 var kg = document.getElementById("kg")
 var fabricado = document.getElementById("fabricado")
 var validade = document.getElementById("validade")
 var observacao = document.getElementById("obs")


 var insBtn = document.getElementById("Insbtn")
 var selBtn = document.getElementById("Selbtn")
 var updBtn = document.getElementById("Updbtn")
 var delBtn = document.getElementById("Delbtn")

//--------------ENVIAR----------------------------------------------//
 function InserirDado(){
     set(ref(db, "Inventario/"+ produto.value), {
         Unidade: unidade.value,
         ml: ml.value,
         kg: kg.value,
         Fabricado: fabricado.value,
         Validade: validade.value,
         Observação: observacao.value
         
     }).then(() => {
        alert("Produto enviado") 
     }).catch((error)=> {
         alert("falha, error"+error)
     })
 }

//--------------Select Datas----------------------------------------------//
 
 function SelectData(){
     const dbref = ref(db);

     get(child(dbref,"Inventario/"+ produto.value)).then((snapshot) => {
         if(snapshot.exists()){
             produto.value = snapshot.val().Produto;
             unidade.value = snapshot.val().Unidade;
             ml.value = snapshot.val().ml;
             kg.value = snapshot.val().kg;
             fabricado.value = snapshot.val().Fabricado;
             validade.value = snapshot.val().Validade;
             observacao.value = snapshot.val().Observação;
         }
         else {
             alert("Produto não encontrado, digite o mesmo nome que foi enviado")
         }
     }).catch((error) => {
         alert("falha, error"+error);
     })
 }

//--------------UPDATE----------------------------------------------//
 function Update() {
     update(ref(db, "Inventario/"+ produto.value), {
        Produto: produto.value,
        Unidade: unidade.value,
        ml: ml.value,
        kg: kg.value,
        Fabricado: fabricado.value,
        Validade: validade.value,
     }).then(() => {
        alert("Dados do produto atualizado no banco de dados.")             
     }).catch((error)=> {
         alert("falha ao atualizar, error"+error)
     })
 }

//--------------DELETE----------------------------------------------//
 function Delete() {
     remove(ref(db, "Inventario/"+ produto.value), {
     }).then(() => {
     alert("item removido") 
     }).catch((error)=> {
         alert("falha ao remover, error"+error)
     })
 }        

 insBtn.addEventListener('click', InserirDado)
 selBtn.addEventListener('click', SelectData)
 updBtn.addEventListener('click', Update)
 





