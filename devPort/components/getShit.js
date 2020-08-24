const getShit = (arrOf) => {
  let name = [];
  let email = [];
  let message = [];

  const size = arrOf.length;
  for (let i = 0; i < size; i++) {
    if (arrOf[i].name) {
      name.push(arrOf[i].name);
    }
    if (arrOf[i].email) {
      email.push(arrOf[i].email);
    }
    if (arrOf[i].message) {
      message.push(arrOf[i].message);
    }
  }
  let results = [];
  if (name.length > 0) {
    results.push(name.join(' '));
  }

  if (email.length > 0) {
    results.push(email.join(' '));
  }

  if (message.length > 0) {
    results.push(message.join(' '));
  }

  results = results.join(' ');

  return results;
}

export default getShit;