let user = {
  dad: {name: 'Dad Doe', age: 67},
  daddy: {name: 'Daddy Doe', age: 67},
  mum: {name: 'Mum Doe', age: 34},
};

const checkIfKeyExist = (objectName, keyName) => {
  for (const userKey in user) {
    if (userKey?.includes(keyName)) {
      console.log({found: user[userKey]});
    }
  }
  // let keyExist = Object.keys(objectName).some(key => key?.includes(keyName));
  // console.log({objectName});
  // return keyExist;
};

console.log(checkIfKeyExist(user, 'd')); // Returns true
