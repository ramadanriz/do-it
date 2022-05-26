const pomodoro = {
  init: function () {
    this.domVariables()
    this.timeVariables()
    this.allEvents()
    this.updateAllDisplay()
  },

  domVariables: function () {
    this.toggleTimerButtons = document.getElementsByClassName('toggle-timer')
    this.increaseFocusButton = document.getElementById('increase-focus')
    this.decreaseFocusButton = document.getElementById('decrease-focus')
    this.increaseBreakButton = document.getElementById('increase-break')
    this.decreaseBreakButton = document.getElementById('decrease-break')
    this.focusLengthDisplay = document.getElementById('focus-length')
    this.breakLengthDisplay = document.getElementById('break-length')
    this.countdownDisplay = document.getElementById('countdown')
    this.typeDisplay = document.getElementById('type')
    this.resetCountdownButton = document.getElementById('reset-session')
    this.stopCountdownButton = document.getElementById('stop-session')
    this.startCountdownButton = document.getElementById('start-session')
    this.countdownContainer = document.getElementById('countdown-container')
  },

  timeVariables: function () {
    this.focusLength = 25
    this.breakLength = 5
    this.timeinterval = false
    this.focusSession = true
    this.pausedTime = 0
    this.timePaused = false
    this.timeStopped = false
  },

  allEvents: function () {
    this.increaseFocusButton.addEventListener('click', pomodoro.increaseFocus)
    this.decreaseFocusButton.addEventListener('click', pomodoro.decreaseFocus)
    this.increaseBreakButton.addEventListener('click', pomodoro.increaseBreak)
    this.decreaseBreakButton.addEventListener('click', pomodoro.decreaseBreak)
    this.countdownDisplay.addEventListener('click', pomodoro.startCountdown)
    this.resetCountdownButton.addEventListener('click', pomodoro.resetCountdown)
    this.stopCountdownButton.addEventListener('click', pomodoro.stopCountdown)
    this.startCountdownButton.addEventListener('click', pomodoro.startCountdown)
  },

  updateAllDisplay: function () {
    pomodoro.focusLengthDisplay.innerHTML = this.focusLength
    pomodoro.breakLengthDisplay.innerHTML = this.breakLength
    pomodoro.countdownDisplay.innerHTML = this.focusLength + ':00'
    pomodoro.resetVariables()
  },

  increaseFocus: function () {
    if (pomodoro.focusLength < 59) {
      pomodoro.focusLength += 1
      pomodoro.updateAllDisplay()
    }
  },

  decreaseFocus: function () {
    if (pomodoro.focusLength > 1) {
      pomodoro.focusLength -= 1
      pomodoro.updateAllDisplay()
    }
  },

  increaseBreak: function () {
    if (pomodoro.breakLength < 30) {
      pomodoro.breakLength += 1
      pomodoro.updateAllDisplay()
    }
  },

  decreaseBreak: function () {
    if (pomodoro.breakLength > 1) {
      pomodoro.breakLength -= 1
      pomodoro.updateAllDisplay()
    }
  },

  resetVariables: function () {
    pomodoro.timeinterval = false
    pomodoro.focusSession = true
    pomodoro.pausedTime = 0
    pomodoro.timeStopped = false
    pomodoro.timePaused = false
  },

  startCountdown: function () {
    pomodoro.disableButtons()
    pomodoro.displayType()
    pomodoro.startCountdownButton.innerText = 'Pause'
    if (pomodoro.timeinterval !== false) {
      pomodoro.pauseCountdown()
    } else {
      pomodoro.startTime = new Date().getTime()
      if (pomodoro.timePaused === false) {
        pomodoro.resumeCountdown()
      } else {
        pomodoro.endTime = pomodoro.startTime + pomodoro.pausedTime
        pomodoro.timePaused = false
      }
      pomodoro.timeinterval = setInterval(pomodoro.updateCountdown, 990)
    }
  },

  updateCountdown: function () {
    const currTime = new Date().getTime()
    const difference = pomodoro.endTime - currTime
    let seconds = Math.floor((difference / 1000) % 60)
    const minutes = Math.floor((difference / 1000) / 60 % 60)
    if (seconds < 10) {
      seconds = '0' + seconds
    }

    if (difference > 1000) {
      pomodoro.countdownDisplay.innerHTML = minutes + ':' + seconds
    } else {
      pomodoro.changeSessions()
    }
  },

  changeSessions: function () {
    clearInterval(pomodoro.timeinterval)
    pomodoro.playSound()
    if (pomodoro.focusSession === true) {
      pomodoro.focusSession = false
    } else {
      pomodoro.focusSession = true
    }

    pomodoro.timeinterval = false
    pomodoro.startCountdown()
  },

  pauseCountdown: function () {
    pomodoro.startCountdownButton.innerText = 'Resume'
    const currTime = new Date().getTime()
    pomodoro.pausedTime = pomodoro.endTime - currTime
    pomodoro.timePaused = true
    clearInterval(pomodoro.timeinterval)
    pomodoro.timeinterval = false
  },

  resumeCountdown: function () {
    if (pomodoro.focusSession === true) {
      pomodoro.endTime = pomodoro.startTime + (pomodoro.focusLength * 60000)
    } else {
      pomodoro.endTime = pomodoro.startTime + (pomodoro.breakLength * 60000)
    }
  },

  resetCountdown: function () {
    clearInterval(pomodoro.timeinterval)
    pomodoro.resetVariables()
    pomodoro.startCountdown()
  },

  stopCountdown: function () {
    pomodoro.startCountdownButton.innerText = 'Start'
    clearInterval(pomodoro.timeinterval)
    pomodoro.updateAllDisplay()
    pomodoro.resetVariables()
    pomodoro.enableButtons()
  },

  displayType: function () {
    if (pomodoro.focusSession === true) {
      pomodoro.typeDisplay.innerHTML = 'Focus Session'
      pomodoro.countdownContainer.className = pomodoro.countdownContainer.className.replace('break', '')
    } else {
      pomodoro.typeDisplay.innerHTML = 'Break'
      if (pomodoro.countdownContainer.className !== 'break') {
        pomodoro.countdownContainer.className += 'break'
      }
    }
  },

  playSound: function () {
    const mp3 = 'http://soundbible.com/grab.php?id=1746&type=mp3'
    const audio = new Audio(mp3)
    audio.play()
  },

  disableButtons: function () {
    for (let i = 0; i < pomodoro.toggleTimerButtons.length; i++) {
      pomodoro.toggleTimerButtons[i].setAttribute('disabled', 'disabled')
      pomodoro.toggleTimerButtons[i].setAttribute('title', 'Stop the countdown to change timer length')
    }
  },

  enableButtons: function () {
    for (let i = 0; i < pomodoro.toggleTimerButtons.length; i++) {
      pomodoro.toggleTimerButtons[i].removeAttribute('disabled')
      pomodoro.toggleTimerButtons[i].removeAttribute('title')
    }
  }
}

export default pomodoro
