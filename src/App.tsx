import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import routes from './routes'
import { ArticlesProvider } from './context/articles/context'

function App() {

// render throught RouterProvider
  return (
    <div className = "App">
      <ArticlesProvider>
        <RouterProvider router={routes} />
      </ArticlesProvider>
    </div>
  )
}
export default App