import { timerPageTemplate } from '../templates/template-creator'
import timer from '../../utils/timer'

const TimerPage = {
  async render () {
    return `
        ${timerPageTemplate()}
      `
  },

  async afterRender () {
    timer()
  }
}

export default TimerPage
