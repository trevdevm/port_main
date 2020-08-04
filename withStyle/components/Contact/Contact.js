import React, { useState, useReducer, useEffect } from "react";
import Form from "./Form";
import Load from "../Load";
import initialState from "./InitialState";
import { limits, reducer } from "./Reducer";
import axios from "axios";
import loadable from "@loadable/component";
//import "./Form.css";
const shitModule = () => {
  import(/* webpackPrefetch: true */"../getShit");
};

const Thanks = loadable(() => import(/* webpackPrefetch: true */"./Thanks"), {
  fallback: <Load />,
});

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [legit, setLegit] = useState("");
  const [temp, setTemp] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [auth, setAuth] = useState(false);
  const [serveErr, setServe] = useState(false);

  const [
    { nLengthErr, nPatErr, eLengthErr, ePatErr, mLengthErr, report },
    dispatch,
  ] = useReducer(reducer, initialState);

  const onName = (name) => {
    setName(name);

    if (name.length >= limits.name) {
      dispatch({ type: "MAX_NAME" });
      return;
    }

    dispatch({ type: "NAME_RESET" });
    return;
  };

  const onEmail = (email) => {
    setEmail(email);

    if (email.length >= limits.email) {
      dispatch({ type: "MAX_EMAIL" });
      return;
    }

    dispatch({ type: "EMAIL_RESET" });
    return;
  };

  const onMessage = (message) => {
    setMessage(message);
    if (message.length >= limits.message) {
      dispatch({ type: "MAX_MESSAGE" });
      return;
    }

    dispatch({ type: "MESSAGE_RESET" });
    return;
  };

  const enableButton = () => {
    if (name.length >= limits.minName && email.length >= limits.minEmail && message.length >= limits.minMessage) {
      setDisabled(false);
      return;
    }

    setDisabled(true);
    return;
  };

  useEffect(() => {
    enableButton();
  }, [onName, onEmail, onMessage]);

  const nameReport = () => {
    if (email.length > 0) {
      const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!emailRegex.test(email)) {
        dispatch({ type: "EMAIL_PATTERN" });
      }

      if (email.length < limits.minEmail) {
        dispatch({ type: "MIN_EMAIL" });
      }

    }

    if (message.length > 0) {
      if (message.length < limits.minMessage) {
        dispatch({ type: "MIN_MESSAGE" });
      }
    }

    return;
  }

  const emailReport = () => {
    if (name.length > 0) {
      const letters = /^[A-Za-z]+$/;

      if (!letters.test(name)) {
        dispatch({ type: "NAME_PATTERN" });
      }

      if (name.length < limits.minName) {
        dispatch({ type: "MIN_NAME" });
      }
    }

    if (message.length > 0) {
      if (message.length < limits.minMessage) {
        dispatch({ type: "MIN_MESSAGE" });
      }

    }

    return;
  }

  const messageReport = () => {
    if (email.length > 0) {
      const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!emailRegex.test(email)) {
        dispatch({ type: "EMAIL_PATTERN" });
      }

      if (email.length < limits.minEmail) {
        dispatch({ type: "MIN_EMAIL" });
      }
    }

    if (name.length > 0) {
      const letters = /^[A-Za-z]+$/;

      if (!letters.test(name)) {
        dispatch({ type: "NAME_PATTERN" });
      }

      if (name.length < limits.minName) {
        dispatch({ type: "MIN_NAME" });
      }
    }

    return;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let getShit;
    shitModule().then((myMod) => {
      getShit = myMod.default;
    }).catch((err) => {
      console.log(`Error processing request: ${err}`);
    })

    axios
      .post(
        "/send/",
        {
          name: name,
          email: email,
          message: message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data.auth) {
          setTemp(response.data.message);
          setLegit(response.data.name);
          setName("");
          setEmail("");
          setMessage("");
          dispatch({ type: "RESET" });
          setAuth(true);
          setServe(false);

          return;
        }

        if (response.errors || response.status == 400) {
          const pulled = getShit(response.data.errors);
          const shown = `Errors: ${pulled}`;
          setTemp(shown);
          setServe(true);

          return;
        }

        if (response.status == 404) {
          setAuth(false);
          setTemp("Email is currently unavailable. Sorry for the inconvenience.");

          setServe(true);

          return;
        }
        if (response.status == 500) {
          setAuth(false);
          setTemp("I can only except so many requests with my current server. This means I'm either very busy or being hacked :) Try me again later if you'd like my help.");

          setServe(true);

          return;
        }
      })
      .catch((err) => {

        if (err.response.status == 400) {
          let sug = err.response.data.errors;

          let pulled = getShit(sug);
          const shown = `Errors: ${pulled}`;
          setTemp(shown);
          setServe(true);

          return;
        }

        if (err.response.status == 404) {
          setAuth(false);
          setTemp("Email is currently unavailable. Sorry for the inconvenience.");
          setServe(true);

          return;
        }

        if (err.response.status == 500) {
          setAuth(false);

          setTemp("I can only except so many requests with my current server. This means I'm either very busy or being hacked :) Try me again later if you'd like my help.");

          setServe(true);

          return;
        }

        setTemp("Email is currently unavailable. Sorry for the inconvenience.");
        setServe(true);

        return;
      });
  };

  return (
    <div>
      {auth ? (
        <Thanks
          legit={legit} />) :
        (<Form
          onName={onName}
          onEmail={onEmail}
          onMessage={onMessage}
          disabled={disabled}
          name={name}
          email={email}
          message={message}
          handleSubmit={handleSubmit}
          temp={temp}
          report={report}
          err={[nLengthErr, nPatErr, eLengthErr, ePatErr, mLengthErr]}
          serveErr={serveErr}
          nameReport={nameReport}
          emailReport={emailReport}
          messageReport={messageReport}
        />)
      }
    </div>
  );
};

export default Contact;
