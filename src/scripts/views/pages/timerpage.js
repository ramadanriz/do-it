import { timerPageTemplate } from '../templates/template-creator'
import pomodoro from '../../utils/pomodoro'

const TimerPage = {
  async render () {
    return `
        ${timerPageTemplate()}
      `
  },

  async afterRender () {
    pomodoro.init()
  }
}

export default TimerPage
