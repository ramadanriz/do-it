class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="app-bar__menu">
            <button id="hamburgerButton"><img src="icon/menu.svg" class="menu-button"></button>
        </div>
        <div class="app-bar__brand">
            <img src="logo/do-it-logoo.png" alt="do.it logo">
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/todo">Todo</a></li>
                <li><a href="#/timer">Timer</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
        </nav>
    `
  }
}

customElements.define('app-bar', AppBar)
