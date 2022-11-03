var callbackQiwi = require('node-qiwi-api').callbackApi;
var asyncQiwi = require('node-qiwi-api').asyncApi;
const token = '' //toketn QWI
const wallet = '' //Номер кошелька без плюса (+) и с префиксом (79991234567)

var callbackWallet = new callbackQiwi(token);
var asyncWallet = new asyncQiwi(token);

//Перевод на QWI кошелек
// callbackWallet.toWallet({ amount: '10.00', comment: 'test', account: '+79265033928' }, (err, data) => {
//   if(err) {
//     /* handle err*/
//     console.log(err);
//     }
//   console.log(data);
// })

//История операций
// callbackWallet.getOperationHistory(wallet, {rows: 1, operation: "ALL"}, (err, data) => {
//   if(err) {
//     /*hanle error*/
//   }
//   console.log(data.data);
// })