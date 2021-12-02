import { useState } from "react/cjs/react.development";
import Login from "./components/Login";
import MainHeader from "./components/MainHeader";

function App() {
  
  function loginHandler(mail, password) {
    console.log(mail, password);
  }
  return (
    <>
      <MainHeader />
      <Login onLogin={loginHandler} />
    </>
  );
}

export default App;
