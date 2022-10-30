// informacion fecha y hora de la charla
spanNumberLeonidas = document.querySelector('#span_number__leonidas');
spanNumberFreddy = document.querySelector('#span_number__freddy');
spanNumberVander = document.querySelector('#span_number__vander');
spanNumberSacha = document.querySelector('#span_number__sacha');

// boton charla 
btnPrimaryLeonidas = document.getElementById('btn_primary__leonidas');
btnPrimaryFreddy = document.getElementById('btn_primary__freddy');
btnPrimaryVander = document.getElementById('btn_primary__vander');
btnPrimarySacha = document.getElementById('btn_primary__sacha');


let now = new Date();

// eventos para mostrar fecha y hora de las charlas 
btnPrimaryLeonidas.addEventListener('click', ()=>{
    spanNumberLeonidas.innerHTML= now.toLocaleDateString()+':  10:00hs  11:00hs';
   
})

btnPrimaryFreddy.addEventListener('click', ()=>{
    spanNumberFreddy.innerHTML= now.toLocaleDateString()+':  12:00hs  13:00hs';
   
})

btnPrimaryVander.addEventListener('click', ()=>{
    spanNumberVander.innerHTML= now.toLocaleDateString()+':  14:00hs  15:00hs';
   
})


btnPrimarySacha.addEventListener('click', ()=>{
    spanNumberSacha.innerHTML= now.toLocaleDateString()+':  8:00hs  9:00hs';
   
})