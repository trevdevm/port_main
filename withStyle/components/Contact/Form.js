import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="contact" style={{ visibility: ready ? 'visible' : 'hidden' }}>
      <div className="fHead">
        {props.serveErr ? (
          <p id="resp">{props.temp}</p>
        ) : (
            <p>
              Please enter your first and last name, email, and a brief message and I will
              get back to you shortly. Look forward to hearing from you!
            </p>
          )}
      </div>
      <form id="contact-form" onSubmit={props.handleSubmit}>
        <div className="formgrid">
          <div className="nameRow">
            <label className="nameLab" htmlFor="name">
              Name
              </label>
            <div className="name">
              <input
                type="text"
                className="form-control"
                required
                value={props.name}
                placeholder="Enter Name"
                onChange={(e) => props.onName(e.target.value)}
                onFocus={(e) => props.nameReport()}
              />
              <span></span>
            </div>
          </div>
          <div className="emailRow">
            <div className="eLab">
              <label htmlFor="email">
                Email
              </label>
            </div>
            <div className="email">
              <input
                type="email"
                className="form-control"
                required
                value={props.email}
                placeholder="Your Email Goes Here"
                onChange={(e) => props.onEmail(e.target.value)}
                onFocus={(e) => props.emailReport()}
              />
              <span></span>
            </div>
          </div>
          <div className="messageRow">
            <label htmlFor="message" className="mLab">
              Message
              </label>
            <div className="message">
              <textarea
                className="form-control"
                id="message"
                required
                value={props.message}
                onChange={(e) => props.onMessage(e.target.value)}
                onFocus={(e) => props.messageReport()}
              ></textarea>
              <span></span>
            </div>
          </div>
          <div className="gridfButton">
            <button
              type="submit"
              className="fButton"
              disabled={props.disabled}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <div className="fError">
        {props.report && !props.serveErr ? (
          <ul>{props.err.map((err, index) => (
            <li key={index.toString()} id="clientErr">{err}</li>
          ))}</ul>
        ) : (
            <span></span>
          )}
      </div>
    </div>
  );
};

export default Form;
