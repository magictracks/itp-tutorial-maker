var html = require("choo/html")
var css = require("sheetify")


module.exports = function(state, emit) {


  let toggleLoginModal = function(){
    console.log("clicked")
    let els = document.querySelectorAll(".loginModal")
    for(let i = 0; i < els.length; i++){
      console.log(els)
      els[i].classList.toggle("dn")
      els[i].classList.toggle("flex")
      els[i].classList.toggle("flex-column")
      els[i].classList.toggle("justify-center")
      els[i].classList.toggle("items-center")
    }
  }

  return html`
  <header class="flex flex-row w-100 h3 bg-navy dark-pink">
    <nav class="z-1 flex flex-row w-100 h-100 justify-between">
      <ul class="flex flex-row items-center navRight list ma0 pa2 h-100">
        <li class="mr4 f2">🚂🏳️‍🌈✨</li>
        <li class="mr4"><a class="link dark-pink" href="/create">create</a></li>
        <li>browse</li>
      </ul>
      <ul class="navLeft flex flex-row items-center navRight list ma0 pa2 h-100">
        <li> <a onclick=${toggleLoginModal}>login</a> </li>
        <li> | </li>
        <li>logout</li>
      </ul>
    </nav>

    <div class="w-100 h-100 absolute dn loginModal bg-navy">
      <div class="w-40">
        <div class="w-100 flex flex-row items-end justify-end">
          <a class="right" onclick=${toggleLoginModal}>CLOSE</a>
        </div>
        <h3>Welcome back lovely person!</h3>
        <form class="w-100 mt1">

          <input class="w-100 pa2 br2 ba b--dark-pink dark-pink" type="email" placeholder="youremail@email.com">
          <input class="w-100 mt1 pa2 br2 ba b--dark-pink dark-pink" type="password" placeholder="supersecretpassword">
          <input class="pa2 mt2 br2 ba b--dark-pink dark-pink" type="submit" value="Login!">
        </form>
      </div>
    </div>

  </header>
  `
}
