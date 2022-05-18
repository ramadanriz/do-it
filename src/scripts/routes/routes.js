import Homepage from '../views/pages/homepage'
import TodoPage from '../views/pages/todopage'
import About from '../views/pages/about'

const routes = {
  '/': Homepage, // default page
  '/todo': TodoPage,
  '/about': About
}

export default routes
