import React from 'react';
import './App.css';

function App() {
// Chapter 1 _ Up & Going YDKJS
/*
  const PHONE_PRICE = 830.25;
  const PHONE_ACCESSORIES = 49.99;
  const TAX_PRICE = 0.08;
  const SPEND_THRESHOLD = 0.15; // spending threshold not under 15% account
  var bank_balance = prompt(" Please input your bank account!");
  bank_balance = Number(bank_balance);
  console.log("bank balance: %d", bank_balance);
  function buy_phone() {
    let spendMoney = 0;
    let minM = bank_balance * SPEND_THRESHOLD; // limited spending money
    let compo = 0; // number of phones and accessories
    while( (bank_balance - spendMoney) > (minM + PHONE_ACCESSORIES + PHONE_PRICE)) {
        spendMoney+= PHONE_PRICE + PHONE_ACCESSORIES;
        compo++;
    }
    spendMoney = spendMoney*TAX_PRICE + spendMoney;
    spendMoney = String(spendMoney.toFixed(2));
    spendMoney = "$"+spendMoney;
    console.log("total: %s",spendMoney);
    console.log("total compo : %d",compo);
  }
  buy_phone();
*/
/* --------------------------------------------------- */
// Chapter 2  Up & Going YDKJS

/* Closure example
    function User () {
        let _userName = "", _passWord = "";

        function DoLogin (userName, passWord) {
          _userName = userName;
          _passWord = passWord;
          console.log(_userName);
          console.log(_passWord);
        }
        const loginAPi = {
          login: DoLogin
        };
        return loginAPi;
    }

    const user = User();
    
    console.log({user});
    //user.login("waehcm","waehcm123");
*/

var foo = {
	a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = "hello world";

console.log(bar.b);		// "hello world"
console.log(bar.a);		// 42 <-- delegated to `foo`










  return (
    <div className="App">
    </div>
  );
}

export default App;
