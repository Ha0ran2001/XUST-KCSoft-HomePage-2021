import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './components/Home';
import Bounce from './components/Bounce';
import Members from './components/Members';
import Car from './components/Car'
import Technologys from './components/Technologys';
import Award from './components/Award';

import Recruit from './components/Recruit';

function App() {


  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/recruit'><Recruit /></Route>
          <Route path='/'>
            <div className='text-gray-400'>
              <NavBar />
              <Home />
              <Bounce />
              <Members />
              <Technologys />
              <Car />
              <Award />
            </div>
          </Route>
        </Switch>
      </HashRouter>
    </>
  )
}

export default App
