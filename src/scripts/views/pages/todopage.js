import { todoPageTemplate } from '../templates/template-creator'
import { main } from '../../utils/todo'

const TodoPage = {
  async render () {
    return `
      ${todoPageTemplate()}
    `
  },

  async afterRender () {
    main()
  }
}

export default TodoPage
