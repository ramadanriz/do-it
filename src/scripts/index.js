import 'regenerator-runtime'
import 'bootstrap'
import '../styles/style.css'
import '../styles/bootstrap.css'
import './component/app-bar'
import './component/app-footer'
import App from './views/app'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
