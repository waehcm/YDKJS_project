import React from 'react';
import './App.css';

function App() {

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


  return (
    <div className="App">
    </div>
  );
}

export default App;
