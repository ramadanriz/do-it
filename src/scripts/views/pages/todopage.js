import QuotesDbSource from '../../data/quotesdb-source'
import { sectionDailyMotivation, todoPageTemplate } from '../templates/template-creator'
import { main } from '../../utils/todo'

const TodoPage = {
  async render () {
    return `
      ${sectionDailyMotivation()}
      ${todoPageTemplate()}
    `
  },

  async afterRender () {
    const quoteText = document.querySelector('.quote')
    const authorName = document.querySelector('.name')
    const dailyMotivation = await QuotesDbSource.homePage()
    quoteText.innerText = dailyMotivation.content
    authorName.innerText = dailyMotivation.author

    const generateButton = document.querySelectorAll('.generateQuote')
    generateButton.forEach(button => {
      button.addEventListener('click', async () => {
        const nextquoteText = document.querySelector('.quote')
        const nextauthorName = document.querySelector('.name')
        const nextMotivation = await QuotesDbSource.homePage()
        nextquoteText.innerText = nextMotivation.content
        nextauthorName.innerText = nextMotivation.author
      })
    })

    main()
  }
}

export default TodoPage
