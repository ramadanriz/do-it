import QuotesDbSource from '../../data/quotesdb-source'
import { heroTemplate, sectionThird, sectionFirst, sectionDailyMotivation } from '../templates/template-creator'

const Homepage = {
  async render () {
    return `
    ${heroTemplate()}
    ${sectionFirst()}
    ${sectionDailyMotivation()}
    ${sectionThird()}
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
  }
}

export default Homepage
