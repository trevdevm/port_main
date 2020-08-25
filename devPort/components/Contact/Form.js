import React, { useState, useEffect } from "react";
import formS from "./Form.css";
import useStyles from "isomorphic-style-loader/useStyles";

const Form = (props) => {
  useStyles(formS);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className={formS.contact} style={{ visibility: ready ? 'visible' : 'hidden' }}>
      <div className={formS.fHead}>
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
        <div className={formS.formgrid}>
          <div className={formS.nameRow}>
            <label className={formS.nameLab} htmlFor="name">
              Name
              </label>
            <div className={formS.name}>
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
          <div className={formS.emailRow}>
            <div className={formS.eLab}>
              <label htmlFor="email">
                Email
              </label>
            </div>
            <div className={formS.email}>
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
          <div className={formS.messageRow}>
            <label htmlFor="message" className={formS.mLab}>
              Message
              </label>
            <div className={formS.message}>
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
          <div className={formS.gridfButton}>
            <button
              type="submit"
              className={formS.fButton}
              disabled={props.disabled}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <div className={formS.fError}>
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