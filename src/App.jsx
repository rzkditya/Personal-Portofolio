import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/page/Route'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(far)
library.add(fab)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
