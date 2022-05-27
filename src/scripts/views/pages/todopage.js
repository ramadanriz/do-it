import { todoPageTemplate } from '../templates/template-creator'

const TodoPage = {
  async render () {
    return `
        ${todoPageTemplate()}
      `
  },

  async afterRender () {

  }
}

export default TodoPage
