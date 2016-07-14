document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('bubble'))
}

    // BIND YOUR EVENT LISTENERS HERE
function bindEventListeners (square) {
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', makePop)
  }
}

// CREATE FUNCTION makePop HERE
function makePop (evt) {
  // evt.preventDefault()
  console.log(evt.target.innerHTML)
  evt.target.removeChild(evt.target.children[0])
  console.log ("hello")
  // popped()
}
