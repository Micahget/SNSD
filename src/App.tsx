import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import routes from './routes'
import { ArticlesProvider } from './context/articles/context'
// import { MatchesProvider } from './context/matches/context'

function App() {

// render throught RouterProvider
  return (
    <div className="App">
      <ArticlesProvider>
        {/* <MatchesProvider > */}
        <RouterProvider router={routes} />
      {/* </MatchesProvider> */}
        </ArticlesProvider>
    </div>
  )
}
export default App