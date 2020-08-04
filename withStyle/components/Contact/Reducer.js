import intialState from "./InitialState";

export const limits = {
  name: 25,
  minName: 2,
  email: 64,
  minEmail: 3,
  message: 900,
  minMessage: 5
}

const emes = {
  N_MAX: `Max length of name is ${limits.name} characters.\n`,
  N_MIN: `Min length of name is ${limits.minName} characters.\n`,
  E_MAX: `Max length of email address is ${limits.email} characters.\n`,
  E_MIN: `Min length of email address is ${limits.minEmail} characters.`,
  M_MAX: `Max length of message is ${limits.message} characters.\n`,
  M_MIN: `Min length of message is ${limits.minMessage} characters.\n`,
  N_PAT: "Please only enter letters for name.",
  E_PAT: "Invalid Email."
}

export const reducer = (state, action) => {
  if (action.type === "MAX_NAME") {
    state = { ...state, nLengthErr: emes.N_MAX, report: true };
    return state;
  }
  if (action.type === "MIN_NAME") {
    state = { ...state, nLengthErr: emes.N_MIN, report: true };
    return state;
  }
  if (action.type === "NAME_PATTERN") {
    state = { ...state, nPatErr: emes.N_PAT, report: true };
    return state;
  }
  if (action.type === "NAME_RESET") {
    state = { ...state, nPatErr: "", nLengthErr: "" };
    return state;
  }
  if (action.type === "MAX_EMAIL") {
    state = { ...state, eLengthErr: emes.E_MAX, report: true };
    return state;
  }
  if (action.type === "MIN_EMAIL") {
    state = { ...state, eLengthErr: emes.E_MIN, report: true };
    return state;
  }
  if (action.type === "EMAIL_PATTERN") {
    state = { ...state, ePatErr: emes.E_PAT, report: true };
    return state;
  }
  if (action.type === "EMAIL_RESET") {
    state = { ...state, eLengthErr: "", ePatErr: "" };
    return state;
  }
  if (action.type === "MAX_MESSAGE") {
    state = { ...state, mLengthErr: emes.M_MAX, report: true };
    return state;
  }
  if (action.type === "MIN_MESSAGE") {
    state = { ...state, mLengthErr: emes.M_MIN, report: true };
    return state;
  }
  if (action.type === "MESSAGE_RESET") {
    state = { ...state, mLengthErr: "" }
  }
  if (action.type === "RESET") {
    state = intialState;
    return state;
  }

  return state;
};