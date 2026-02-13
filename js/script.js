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

const BulanMatahari = [
  "ada apasih dengan matahari kenapa harus itu?? <br> Matahari merupakan energi yang dibutuhkan orang orang yang mau berusaha, matahari tanda bahwa masih ada hari baru yang layak untuk di usahakan <br> dan kamu pembawa harapan itu pendorong untuk usaha yang tiada batas, pemberi harapan tiap harinya. <br> Matahari dengan senjanya, lelah dan mencoba menghilang perlahan, makaku tahan kamu dengan pelukan yang erat membantu meniadakan setiap kacau, kutahan panas yang membakar kulit kulitku agak kamu dapat kembali terbit dengan lebih indahnya.",
  "Kenapa bulan harus sekali bulan? <br> Bulan yang datang bersamaan dengan gelap gulita tiada takut dia datang menggantikan matahari <br> bulan mendatangkan sejuk dan ketenangan yang memberikan kesempatan istirahat <br> dan tiada lagi selain engkau yang dapat menjadi bulanku saat kekacauan menggelapkan pikiranku",
  "Ingat Ingat ya"
]

const tidakBoleh = [
  "Eits baca ulang cepat!!!",
  "Hahhh masih tidak paham?!!??",
  "Pliss tekan aja PAHAMM 🙏🙏🙏",
  "Coba baca pelan pelannnn",
  "😑😫😭😭😭😭",
  "Kesempatan terakhir cepat baca lagi"
]

bulanElement = document.getElementsByClassName("bulan")[0]
matahariElement = document.getElementsByClassName("matahari")[0]
text = document.getElementsByClassName("text")[0]
judul = document.getElementsByClassName("judul")[0]
keluar = document.getElementsByClassName("keluar")[0]

function checkBoth() {
  if (bulanElement.classList.contains("sudah") &&
      matahariElement.classList.contains("sudah")) {

    console.log("BOTH DONE");

    matahariElement.classList.remove("show");
    bulanElement.classList.remove("show");

    document.getElementById("btnMatahari").disabled = true;
    document.getElementById("btnBulan").disabled = true;
  }
}

function run(){
  matahariElement.classList.add("kiri")

  bulanElement.classList.add("kanan")

  document.body.classList.add("bgDark")
}

function reset(){
  if (matahariElement.classList.contains("pojok")){
    matahariElement.classList.remove("pojok")
    matahariElement.classList.add("kiri")

    bulanElement.classList.remove("geser")
    bulanElement.classList.add("kanan")

    text.classList.remove("show")
    text.classList.remove("up")
    judul.classList.remove("show")
    keluar.classList.remove("show")
  }

  if (bulanElement.classList.contains("pojok")){
    bulanElement.classList.remove("pojok")
    bulanElement.classList.add("kanan")

    matahariElement.classList.remove("geser")
    matahariElement.classList.add("kiri")

    text.classList.remove("show")
    text.classList.remove("up")
    judul.classList.remove("show")
    keluar.classList.remove("show")
  }
  
  if (bulanElement.classList.contains("sudah") && (matahariElement.classList.contains("sudah"))){
    matahariElement.classList.remove("show")
    bulanElement.classList.remove("show")
    document.getElementsByClassName("penyampaian")[0].classList.add("show")
    document.getElementById("btnMatahari").disabled = true
    document.getElementById("btnBulan").disabled = true;
  }
}

//matahari
function matahari(){
  matahariElement.classList.remove("kiri")
  matahariElement.classList.add("pojok")

  document.getElementById("judul").innerHTML = "Kehadiran yang Datang Tanpa direncanakan"

  if(document.getElementsByClassName("image")[0].classList.contains("show")){
    document.getElementsByClassName("image")[0].classList.add("geser")
    document.getElementsByClassName("image")[0].classList.remove("show")
  }
  
  bulanElement.classList.remove("kanan")
  bulanElement.classList.add("geser")

  text.classList.add("show")
  text.classList.add("up")
  judul.classList.add("show")

  i = 0
  document.getElementById("isi").innerHTML = puisiMata[i]

  matahariElement.classList.add("sudah")
  checkBoth()
}

function bulan(){
  bulanElement.classList.remove("kanan")
  bulanElement.classList.add("pojok")

  document.getElementById("judul").innerHTML = "Cahaya yang Dinanti Ketika Gelap Menyelimuti"

  if(document.getElementsByClassName("image")[0].classList.contains("show")){
    document.getElementsByClassName("image")[0].classList.add("geser")
    document.getElementsByClassName("image")[0].classList.remove("show")
  }

  matahariElement.classList.remove("kiri")
  matahariElement.classList.add("geser")

  text.classList.add("show")
  text.classList.add("up")
  judul.classList.add("show")

  i = 0
  document.getElementById("isi").innerHTML = puisiBulan[i]

  bulanElement.classList.add("sudah")
  checkBoth()
}

function gantiKanan(){
  if (bulanElement.classList.contains("pojok")){
    i += 1
    if (i > 3) i = 3;
    document.getElementById("isi").innerHTML = puisiBulan[i]
    if (i == 3) keluar.classList.add("show");
  }

  if (matahariElement.classList.contains("pojok")){
    i += 1
    if (i > 3) i = 3;
    document.getElementById("isi").innerHTML = puisiMata[i]
    if (i == 3) keluar.classList.add("show");
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
    window.location.href = "awal.html"
  }
}

j = 0
//awal 
function tidak(){
  j += 1
  if (j > 5){
    window.location.href = "menu.html"
  }
  document.getElementById("tidak").value = tidakBoleh[j]
}

function paham(){
  window.location.href = "menu.html"
}

k = 0
async function Lanjut(){
  k += 1
  if (k > 2) k = 2;
  document.getElementById("asli").innerHTML = BulanMatahari[k]
  console.log(k)
  await sleep(2000)
  if (k == 2){
    window.location.href = "akhir.html"
  }
}

function Balik(){
  k -= 1
    if (k < 0) k = 0;
    document.getElementById("asli").innerHTML = BulanMatahari[k]
}

console.log(BulanMatahari[2])