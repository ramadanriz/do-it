import { heroTemplate, sectionThird, sectionFirst } from '../templates/template-creator'

const Homepage = {
  async render () {
    return `
    ${heroTemplate()}
    ${sectionFirst()}
    ${sectionThird()}
    `
  },

  async afterRender () {

  }
}

export default Homepage
