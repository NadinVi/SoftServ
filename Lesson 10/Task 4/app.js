// Change the code so that bind is not used but functionality will be same.
//Змініть код так, щоб зв’язування не використовувалося, але функціональність залишалася такою самою.

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//       callback(
//         function () {
//           return this.data + "";
//         }.bind(this)
//       );
//     },
//   };
//   let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//     },
//     notification: function () {
//       return function (callback) {
//         this.result = callback();
//       }.bind(this);
//     },
//   };


// Рішення
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//       callback(
//         () => {
//           return this.data + "";
//         }
//       );
//     },
//   };
//   let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//     },
//     notification: function () {
//       return (callback) => {
//         this.result = callback();
//       }
//     },
//   };