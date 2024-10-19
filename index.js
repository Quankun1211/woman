const number = document.querySelectorAll(".num")
const card = document.querySelector(".card")
const cardText = document.querySelector(".card-text")
const backIcon = document.querySelector(".back-icon")
const passText = document.querySelector(".password")
const hidePass = document.querySelector(".hide-pass")
const flipBox = document.querySelectorAll(".flip-box")
const flipInner = document.querySelectorAll(".flip-box-inner")
const giftBtn = document.querySelector(".btn-gift")
const gift = document.querySelector(".gift")
const password = "1206"
const password1 = "2004"
let res = []
let hidePassArr = []
let pass = ""
number.forEach((item, index) => {
  item.onclick = () => {
    const itemNum = Number(item.textContent).toString()
    if(res.length < 4) {
      res.push(itemNum)
      pass = res.join("");
      passText.classList.add("none")
      hidePass.classList.remove("none")
      hidePassArr.push("*")
      hidePass.innerHTML = hidePassArr.join("")
    } 
    if(res.length == 4) {
      if(pass == password) {
        card.classList.add("none")
        cardText.classList.add("active")
      }
      if(pass == password1) {
        card.classList.add("none")
        gift.classList.add("active")
      }
      hidePassArr = []
      res = []
      passText.classList.remove("none")
      hidePass.classList.add("none")
    }
  }
})

backIcon.onclick = () => {
  card.classList.remove("none")
  cardText.classList.remove("active")
}
let indexFlip = []
flipBox.forEach((item, index) => {
  item.onclick = () => {
    flipInner[index].style.transform = "rotateY(180deg)"
    giftBtn.classList.add("active")
    indexFlip.push(index)
    if(index != indexFlip[0]) {
      flipInner[index].style.transform = "rotateY(0deg)"
    }
  }
})

const overlay = document.querySelector(".overlay")
const overlayBtn = document.querySelector(".btn-overlay")

giftBtn.onclick = () => {
  overlay.classList.add("active")
}

overlayBtn.onclick = () => {
  gift.classList.remove("active")
  card.classList.remove("none")
  overlay.classList.remove("active")
}