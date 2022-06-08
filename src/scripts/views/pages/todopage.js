import { todoPageTemplate } from '../templates/template-creator'
import main from '../../utils/todo'
import crudTodo from '../../utils/crud-todo'

const TodoPage = {
  async render () {
    return `
      ${todoPageTemplate()}
    `
  },

  async afterRender () {
    main()
    crudTodo()
  }
}

export default TodoPage
