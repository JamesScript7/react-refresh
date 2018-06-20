import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// STYLES
import './App.css';

// COMPONENTS
import Clock from './clock/Clock';
import Timer from './timer/Timer';
import Guess from './guess/Guess';
import Tweet from './tweety/Tweet';
import Game from './tictactoe/Game';

const Navigation = () => (
  <nav>
    <ul className="home-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/clock" component={Clock}></Route>
    <Route exact path="/timer" component={Timer}></Route>
    <Route exact path="/guessing-game" component={Guess}></Route>
    <Route exact path="/tweet-simulator" component={Tweet}></Route>
    <Route exact path="/tic-tac-toe" component={Game}></Route>
  </Switch>
);

const Home = () => (
  <main>
    <h1>Component-o-rama!</h1>

    <div className="link-list">
      <ul>
        <li><NavLink to="/clock">Clock</NavLink></li>
        <li><NavLink to="/timer">Quick Timer</NavLink></li>
        <li><NavLink to="/guessing-game">Guessing Game</NavLink></li>
        <li><NavLink to="/tweet-simulator">Tweet Simulator</NavLink></li>
        <li><NavLink to="/tic-tac-toe">Tic Tac Toe</NavLink></li>
      </ul>
    </div>
  </main>
);

const App = () => (
  <div className="app">
    <Navigation />
    <Main />
  </div>
);

export default App;
