var html = require("choo/html");


module.exports = function(name, state, emit){

  let toggleLoginModal = function(){

    emit("user:loginModal")
  }

  // ${ () => state.user.loginModal ? "dn" : "" }

  return html`
    <div id="loginModal" class="dn">
    <div class="w-100 h-100 absolute flex flex-column justify-center items-center bg-navy dark-pink" style="top:0; left:0">
      <div class="w-40">
        <div class="w-100 flex flex-row items-end justify-end">
          <a class="right" onclick=${toggleLoginModal}>close</a>
        </div>
        <h3>Welcome back lovely person!</h3>
        <form class="w-100 mt1">
          <input class="w-100 pa2 br2 ba b--dark-pink dark-pink" type="email" placeholder="youremail@email.com">
          <input class="w-100 mt1 pa2 br2 ba b--dark-pink dark-pink" type="password" placeholder="supersecretpassword">
          <input class="pa2 mt2 br2 ba b--dark-pink dark-pink" type="submit" value="Login!">
        </form>
      </div>
    </div>
  `
}
