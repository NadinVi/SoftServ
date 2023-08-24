// Complete the following asynchronous promise chain:

new Promise(function (resolve, reject) {
  let number = +prompt();
  if (isNaN(number)) reject();
  else resolve(number);
}).catch(function (error) {
  return new Promise(function (resolve, reject) {
    let number
    while (isNaN(number)) {
      number = +prompt()
    }
    resolve(number);
  });
}).then(function (result) {
  console.log(result);
});


