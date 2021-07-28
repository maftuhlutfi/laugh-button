var neutralIcon = document.getElementById("neutral")
var laughIcon = document.getElementById("laugh")
var laughBtn = document.getElementById("laugh-btn")

const laugh = () => {
  if (laughIcon.style.display == 'none') {
    neutralIcon.style.display = 'none'
    laughIcon.style.display = 'block'
    laughBtn.classList.add('show')
  } else {
    neutralIcon.style.display = 'block'
    laughIcon.style.display = 'none'
    laughBtn.classList.remove('show')
  }
}