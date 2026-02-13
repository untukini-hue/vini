const puisiMata = [
  "hadirmu selaluku tunggu <br> hadir yang menjanjikan terangnya jalan pulang <br>",
  "Di gelap yang panjang <br> engkaulah yang menjadi cahaya pertama <br> menghilangkan sisa sisa gelap malam <br> mengisi hatiku dengan penuh kehangantan",
  "terangmu membuka segala makna <br> memperjelas arah tujuan yang telah dicari cari dari dulu",
  "Datangnya matahari menandakan akan munculnya hari baru <br> hadirmu dalam hidupku memberikanku harapan baru <br> demikian akan terbentuknya kisah baru"
]

const puisiBulan = [
  "aku rasa engkau datang <br> takku sangka alam tiada takut dengan kehadiranmu <br> tiada lagi matahari yang selalu ia banggakan",
  "engkau datang dengan cahayamu yang redup <br> memberikan isyarat untuk tenang <br> sejukmu menyelimuti mempersilahkan untuk mengistirahatkan diri",
  "menengada melihat keindahan yang kau bawa bersamamu <br> tiada lagi selain bulan yang dapat menemaniku saat malam menerkam",
  "tiada lagi selain kamu yang dapat menjadi bulanku <br> saat kekacauan menggelapkan pikiranku"
]

bulanElement = document.getElementsByClassName("bulan")[0]
matahariElement = document.getElementsByClassName("matahari")[0]

function run(){
  document.getElementsByClassName("matahari")[0].classList.add("kiri")

  document.getElementsByClassName("bulan")[0].classList.add("kanan")

  document.body.classList.add("bgDark")
}

function reset(){
  if (matahariElement.classList.contains("pojok")){
    document.getElementsByClassName("matahari")[0].classList.remove("pojok")
    document.getElementsByClassName("matahari")[0].classList.add("kiri")

    document.getElementsByClassName("bulan")[0].classList.remove("geser")
    document.getElementsByClassName("bulan")[0].classList.add("kanan")

    document.getElementsByClassName("text")[0].classList.remove("show")
    document.getElementsByClassName("judul")[0].classList.remove("show")
    document.getElementsByClassName("keluar")[0].classList.remove("show")
  }

  if (bulanElement.classList.contains("pojok")){
    document.getElementsByClassName("bulan")[0].classList.remove("pojok")
    document.getElementsByClassName("bulan")[0].classList.add("kanan")

    document.getElementsByClassName("matahari")[0].classList.remove("geser")
    document.getElementsByClassName("matahari")[0].classList.add("kiri")

    document.getElementsByClassName("text")[0].classList.remove("show")
    document.getElementsByClassName("judul")[0].classList.remove("show")
    document.getElementsByClassName("keluar")[0].classList.remove("show")
  }
  
  if (bulanElement.classList.contains("sudah") && (matahariElement.classList.contains("sudah"))){
    alert("sudah keduanya")
  }
}

//matahari
function matahari(){
  document.getElementsByClassName("matahari")[0].classList.remove("kiri")
  document.getElementsByClassName("matahari")[0].classList.add("pojok")

  document.getElementById("judul").innerHTML = "Kehadiran yang Datang Tanpa direncanakan"

  if(document.getElementsByClassName("image")[0].classList.contains("show")){
    document.getElementsByClassName("image")[0].classList.add("geser")
    document.getElementsByClassName("image")[0].classList.remove("show")
  }
  
  document.getElementsByClassName("bulan")[0].classList.remove("kanan")
  document.getElementsByClassName("bulan")[0].classList.add("geser")

  document.getElementsByClassName("text")[0].classList.add("show")
  document.getElementsByClassName("judul")[0].classList.add("show")

  i = 0
  document.getElementById("isi").innerHTML = puisiMata[i]

  document.getElementsByClassName("matahari")[0].classList.add("sudah")
}

function bulan(){
  document.getElementsByClassName("bulan")[0].classList.remove("kanan")
  document.getElementsByClassName("bulan")[0].classList.add("pojok")

  document.getElementById("judul").innerHTML = "Cahaya yang Dinanti Ketika Gelap Menyelimuti"

  if(document.getElementsByClassName("image")[0].classList.contains("show")){
    document.getElementsByClassName("image")[0].classList.add("geser")
    document.getElementsByClassName("image")[0].classList.remove("show")
  }

  document.getElementsByClassName("matahari")[0].classList.remove("kiri")
  document.getElementsByClassName("matahari")[0].classList.add("geser")

  document.getElementsByClassName("text")[0].classList.add("show")
  document.getElementsByClassName("judul")[0].classList.add("show")

  i = 0
  document.getElementById("isi").innerHTML = puisiBulan[i]

  document.getElementsByClassName("bulan")[0].classList.add("sudah")
}

function gantiKanan(){
  if (bulanElement.classList.contains("pojok")){
    i += 1
    if (i > 3) i = 3;
    document.getElementById("isi").innerHTML = puisiBulan[i]
    if (i == 3) document.getElementsByClassName("keluar")[0].classList.add("show");
  }

  if (matahariElement.classList.contains("pojok")){
    i += 1
    if (i > 3) i = 3;
    document.getElementById("isi").innerHTML = puisiMata[i]
    if (i == 3) document.getElementsByClassName("keluar")[0].classList.add("show");
  } 
}
function gantiKiri(){
  if (bulanElement.classList.contains("pojok")){
    i -= 1
    if (i < 0) i = 0;
    document.getElementById("isi").innerHTML = puisiBulan[i]
  }

  if (matahariElement.classList.contains("pojok")){
    i -= 1
    if (i < 0) i = 0;
    document.getElementById("isi").innerHTML = puisiMata[i]
  }
}
//login
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function prosesLogin(){
  Username = document.getElementById("Username").value
  Password = document.getElementById("Password").value

  if (Username == "wajib ini?" && Password == "12612961"){
    document.body.classList.add("get-it")
    document.getElementById("pertanyaan").classList.add("get-per")
    document.getElementById("h1").innerHTML = `Ohh siap siap bos`
    document.getElementById("pernyataan").classList.add("get-par")

    await sleep(3000)
    window.location.href = "menu.html"
  }
}