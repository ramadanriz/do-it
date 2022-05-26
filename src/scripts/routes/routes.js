import Homepage from '../views/pages/homepage'
import TodoPage from '../views/pages/todopage'
import About from '../views/pages/about'
import TimerPage from '../views/pages/timerpage'

const routes = {
  '/': Homepage, // default page
  '/todo': TodoPage,
  '/timer': TimerPage,
  '/about': About
}

export default routes
