import React from 'react'
import './App.scss'
import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import TourPage from './pages/TourPage'
import Error from './pages/Error'

export default function App() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/detail/:slug" component={TourPage} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}
