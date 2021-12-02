import { useState } from "react";
import Login from "./components/Login";
import MainHeader from "./components/MainHeader";
import Home from './components/Home';

function App() {
  
  function logOutHandler() {
      setLoggedIn(false);
  }

  const [loggedIn, setLoggedIn]=useState();
  function loginHandler(mail, password) {
    setLoggedIn(true);
  }
  return (
    <>
      < MainHeader loggedIn={loggedIn} logOut={logOutHandler} />
      <main>
      {!loggedIn && <Login onLogin={loginHandler} />}
      {loggedIn && <Home/>}
      </main>
    </>
  );
}

export default App;
