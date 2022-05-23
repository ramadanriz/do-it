import QuotesDbSource from '../../data/quotesdb-source'
import { heroTemplate, sectionDailyMotivation, sectionThird, sectionFirst } from '../templates/template-creator'

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
  }
}

export default Homepage
