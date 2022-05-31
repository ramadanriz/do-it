import { todoList, todoPageTemplate } from '../templates/template-creator'
import crudTodo from '../../utils/crud-todo'

const TodoPage = {
  async render () {
    return `
        ${todoPageTemplate()}
      `
  },

  async afterRender () {
    crudTodo();
  }
}

export default TodoPage
