function tes() {
  container = document.getElementById("container")  
  texts = document.getElementsByClassName("text")
  for (t of texts) {
    container.appendChild(t)
    t.classList.add("show")
    
    console.log(1)
  }
}