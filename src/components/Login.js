import { useRef, useState } from "react";
import classes from "./Login.module.css";

function Login(props) {
  const enteredInputMail = useRef();
  const enteredInputPassword = useRef();

  const [validForm, setValidForm] = useState(false);
  const [isValidMail, setIsValidMail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [enteredMail, setEnteredMail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  function emailHandler(event) {
    setEnteredMail(event.target.value);
    setValidForm(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  }

  function passwordHandler(event) {
    setEnteredPassword(event.target.value);
    setValidForm(
      event.target.value.trim().length > 6 && enteredMail.includes("@")
    );
  }

  function validateMail() {
    //setIsValidMail(enteredInputMail.current.value.includes("@"));
    //setValidForm(isValidMail && enteredInputPassword.current.value.trim().length > 6);
    //setValidForm navic musi byt v tom emailHandleru!!!! aby to na to okamzite reagovalo.
    setIsValidMail(enteredMail.includes("@"));
  }

  function validatePassword() {
    //setIsValidPassword(enteredInputPassword.current.value.trim().length > 6);
    //setValidForm(isValidPassword && enteredInputMail.current.value.includes("@"));
    setIsValidPassword(enteredPassword.trim().length > 6);
  }

  function submitHandler(event) {
    event.preventDefault();
    /*
    const enteredMail = enteredInputMail.current.value;
    const enteredPassword = enteredInputPassword.current.value;
    if (enteredMail.includes("@") && enteredPassword.trim().length > 6) {
      setValidForm(true);
    }
    */
    props.onLogin(enteredMail, enteredPassword);
  }

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div
          className={`${classes.inputs} ${isValidMail ? "" : classes.invalid}`}
        >
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            id="email"
            ref={enteredInputMail}
            onChange={emailHandler}
            onBlur={validateMail}
          />
        </div>
        <div
          className={`${classes.inputs} ${
            isValidPassword ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={enteredInputPassword}
            onChange={passwordHandler}
            onBlur={validatePassword}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit" disabled={!validForm}>
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;

/*
Zatim mam enteredMail nadefinovany jen v submitHandleru pomoci ref.
Ale abych mohla urcit ze je validniMail, tak na to pouzivam funkci, ktera nezna ten muj enteredMail.

Pak jsem myslela, ze to nebudu potrebovat (funkce v onBLur eventu jsem overovala pomoci enteredInputMail.current.value), 
ale nakonec to budu potrebovat, protoze takhle mi to reaguje na tu hodnotu jen kdyz kliknu mimo ten input (tedy outfocuju z inputu = blur),
ale ja bych potrebovala, aby mi to na to reagovalo uz kdyz pisu, tedy aby to reagovalo na keystroke (zmacknuti klavesnice),
a na to je prave dobry useState.
Takze useRef zde nakonec nevyuziju.
*/
