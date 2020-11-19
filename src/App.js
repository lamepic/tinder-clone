import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
