import { aboutPageTemplate } from '../templates/template-creator'

const About = {
  async render () {
    return `
      ${aboutPageTemplate()}
        `
  },

  async afterRender () {

  }
}

export default About
