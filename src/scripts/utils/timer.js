function timer () {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')
  const stopCountdownButton = document.getElementById('stop-session')
  const startCountdownButton = document.getElementById('start-session')
  const timerContainer = document.getElementById('countdown-container')
  const settingTimerButton = document.getElementById('setting-timer')
  const settingTimer = document.getElementById('settingTimerModal')
  const settingTimerInput = document.getElementById('timeSettingInput')
  const audio = new Audio('/audio/alarm.mp3')
  settingTimerInput.value = localStorage.getItem('focusTimer') || 25
  minutesElement.innerText = localStorage.getItem('focusTimer') || 25

  let progress = null
  let progressStart = 0

  function startCountdown () {
    const minutesElementText = minutesElement.innerText
    const secondsElementText = secondsElement.innerText
    const speed = 1000
    progress = setInterval(() => {
      timerContainer.classList.remove('bg-altviolet', 'text-white')
      let minutes = 0
      let seconds = 0
      const progressEnd = parseInt(minutesElementText) * 60 + parseInt(secondsElementText)

      progressStart++
      minutes = Math.floor((progressEnd - progressStart) / 60)
      seconds = Math.floor((progressEnd - progressStart) % 60)

      minutesElement.innerText = minutes.toString().length === 2 ? minutes : `${minutes}`
      secondsElement.innerText = seconds.toString().length === 2 ? seconds : `0${seconds}`

      if (progressStart === progressEnd) {
        clearInterval(progress)
        progress = null
        progressStart = 0
        playAlarm()
        timerContainer.classList.add('bg-altviolet', 'text-white')
      }
    }, speed)
  }

  function stopCountdown () {
    clearInterval(progress)
    progress = null
    progressStart = 0
    minutesElement.innerText = localStorage.getItem('focusTimer') || 25
    secondsElement.innerText = '00'
    startCountdownButton.removeAttribute('disabled')
    settingTimerButton.removeAttribute('disabled')
    timerContainer.classList.remove('bg-altviolet', 'text-white')
  }

  function playAlarm () {
    audio.loop = true
    audio.play()
  }

  function stopAlarm () {
    audio.pause()
  }

  startCountdownButton.addEventListener('click', () => {
    startCountdownButton.setAttribute('disabled', 'disabled')
    settingTimerButton.setAttribute('disabled', 'disabled')
    startCountdown()
  })

  stopCountdownButton.addEventListener('click', () => {
    stopCountdown()
    stopAlarm()
  })

  settingTimer.addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.setItem('focusTimer', settingTimerInput.value)
    minutesElement.innerText = localStorage.getItem('focusTimer')
  })
}

export default timer
