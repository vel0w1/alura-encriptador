const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// Reglas de encriptación //

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat" 

function botonEncrypt(){
  const textEncrypt = encriptar(textarea.value)
  mensaje.value = textEncrypt
  textarea.value = "";
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncrypt){
  let matrizEnc = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncrypt = stringEncrypt.toLowerCase()

  for(let i = 0; i < matrizEnc.length; i++){
    if(stringEncrypt.includes(matrizEnc[i][0])){
      stringEncrypt = stringEncrypt.replaceAll(matrizEnc[i][0], matrizEnc[i][1])
    }
  }
  return stringEncrypt
}

function botonDecrypt(){
  const textEncrypt = decrypt(textarea.value)
  mensaje.value = textEncrypt
  textarea.value = "";
}


function decrypt(stringDecrypt){
  let matrizEnc = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDecrypt = stringDecrypt.toLowerCase()

  for(let i = 0; i < matrizEnc.length; i++){
    if(stringDecrypt.includes(matrizEnc[i][1])){
      stringDecrypt = stringDecrypt.replaceAll(matrizEnc[i][1], matrizEnc[i][0])
    }
  }
  return stringDecrypt
}

function copiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
  alert("El texto encriptado ha sido copiado")
}
