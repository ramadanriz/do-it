import { aboutPageTemplate } from '../templates/template-creator'
import teams from '../../data/teamlist-source'

const About = {
  async render () {
    return `
      ${aboutPageTemplate()}
        `
  },

  async afterRender () {
    const teamsContainer = document.getElementById('team-list')
    teamsContainer.innerHTML = ''
    teams.forEach(team => {
      const { name, image, twitter, instagram, github, linkedin } = team
      const teamListElement = document.createElement('div')
      teamListElement.classList.add('col-lg-3', 'col-md-6', 'mb-4', 'mb-lg-0')

      teamListElement.innerHTML = `
      <div class="card shadow-sm border-0 rounded">
        <div class="photo-container">
          <img src="${image}" alt="${name} photo" class="w-100 card-img-top">
        </div>
          <div class="card-body p-0">
            <div class="p-4">
              <h5 class="mb-0">${name}</h5>
              <p class="small text-muted">Web Developer</p>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item m-0"><a href="${twitter}" class="social-link" target="_blank"><ion-icon name="logo-twitter" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="${instagram}" class="social-link" target="_blank"><ion-icon name="logo-instagram" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="${github}" class="social-link" target="_blank"><ion-icon name="logo-github" size="small"></ion-icon></a></li>
                <li class="list-inline-item m-0"><a href="${linkedin}" class="social-link" target="_blank"><ion-icon name="logo-linkedin" size="small"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
      `
      teamsContainer.append(teamListElement)
    })
  }
}

export default About
