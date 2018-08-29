module.exports = store

function store (state, emitter) {
  state.user = {
    authenticated: false,
    loginModal: false,
    logoutBtn: false,
    signupModal: false
  }

  emitter.on('DOMContentLoaded', function () {

    emitter.on('user:loginModal', function (count) {

      let el = document.querySelector("#loginModal")

      if(state.user.loginModal === true){
          el.classList.add("dn")
      } else{
          el.classList.remove("dn")
      }

      state.user.loginModal = !state.user.loginModal;
      emitter.emit(state.events.RENDER)
    })


  })
}
