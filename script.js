function run(){
  document.getElementById("topLeft").classList.add("topLeft")
  document.getElementById("topRight").classList.add("topRight")
  document.getElementById("bottomLeft").classList.add("bottomLeft")
  document.getElementById("bottomRight").classList.add("bottomRight")
}

function prosesLogin(){
  Username = document.getElementById("Username").value
  Password = document.getElementById("Password").value

  if (Username == "wajib ini?" && Password == "12612961"){
    document.body.classList.add("get-it")
    document.getElementById("pertanyaan").classList.add("get-per")
    document.getElementById("h1").innerHTML = `Ohh siap siap bos`
    document.getElementById("pernyataan").classList.add("get-par")
  }
}