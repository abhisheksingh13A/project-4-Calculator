"use client"

import { useState } from "react";

export default function CompoundInterest() {
const [principal,setPrincipal] = useState("");
const [interest,setInterest] = useState("");
const [time,setTime] = useState("");
const [emi,setEmi] = useState("");
const [amount,setAmount] =useState("");
const [totalinterest,setTotalinterest] = useState("");

const handlePrincipalchange = (event) =>{
  setPrincipal(event.target.value)
  };
const handleInterestchange = (event) =>{
  setInterest(event.target.value)
  };
const handleTimechange = (event) =>{
  setTime(event.target.value)
  };

  const CalculateCompound = (event) => {
    let p = parseFloat(principal);
    let r = parseFloat(interest);
    let n = parseFloat(time);
    
    let actualRate = parseFloat(r/12/100 );
   
    let calcemi =p*(Math.pow(1 + actualRate ,12*n) );
    setEmi( Math.round(calcemi));
    setAmount( Math.round(calcemi * n) );
    setTotalinterest(Math.round((calcemi * n) - p) );
  }

  //A = P(1+r/12)^12t

  return (
    <div >
      <div className="flex gap-3 mx-24 mt-20">
        <div>
          <div >
            <div className="text-gray-400 text-2xl py-6">
              <h1>Compound Interest Calculator</h1>
            </div>
            <div className="flex justify-start gap-1">
              <button className="bg-orange-400 border border-gray-300 text-white rounded-3xl items-center px-2 py-2 text-sm  ">
              Compound Interest
              </button>
              <button className="bg-gray-400 border border-gray-300 text-white rounded-3xl items-center px-2 py-2 text-sm">
               Simple Interest
              </button>
              <button className="bg-gray-400 border border-gray-300 text-white rounded-3xl items-center px-2 py-2 text-sm  ">
            Daily Compound
              </button>
              <button className="bg-gray-400 border border-gray-300 text-white rounded-3xl items-center px-2 py-2 text-sm">
               Forex Compound
              </button>
            </div>
          </div>

          <div className="flex gap-5">
            <div className=" w-[550px] h-[560px] bg-gray-400 my-5 px-5 py-5 mx-5 rounded-3xl ">
<div className="w-[500px] h-[520px] bg-gray-300  py-3 px-5 rounded-3xl">
<h1 className="pl-5">Currency:</h1>
                <div className="flex  px-3 py-1 rounded-3xl bg-gray-100">
                  <label className="px-9 py-2 border-r-4">$</label>
                  <label className="px-9 py-2 border-r-4">€</label>
                  <label className="px-9 py-2 border-r-4">£</label>
                  <label className="px-9 py-2 border-r-4">₹</label>
                  <label className="px-9 py-2 border-r-4">¥</label>
                </div>
<div className="grid grid-flow-row grid-cols-1  gap-4 px-5 py-5">
    <div>
        <h1>Starting balance</h1>
        <div className="flex">
          <div className=" bg-gray-500 rounded-l-2xl p-[9px] px-4">$</div>
        <input type="number" onChange={handlePrincipalchange}  className=" rounded-r-2xl border focus:outline-none focus:border-sky-500 focus:ring-1 border-gray-400 w-64 h-10 p-2   " />
        </div>

    </div>
    <div>
        <h1>Interest Rate</h1>
        <input type="number" onChange={handleInterestchange}  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5" />
    </div>
    <div className="flex gap-8">
       <div>
       <h1>Years</h1>
       <input type="number" onChange={handleTimechange}  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5" />
       </div>
       <div>
       <h1>Months</h1>
       <input type="number"  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5" />
       </div>
    </div>
    <div>
        <h1>Starting balance</h1>
        <input type="number"  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5" />
    </div>
    <div>
                  <button
                    type="submit"  onClick={CalculateCompound}
                    className=" rounded-2xl border bg-orange-300 px-4 py-3  justify-center"
                  >
                    Calculate
                  </button>
                </div>
</div>

</div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 p-6 border">
          <div className="text-2xl font-bold">
<h1>Projection for {time}  years</h1>
          </div>
<div className="grid grid-flow-row grid-cols-2 gap-7 my-10 text-sm">
  <div>
    <h1>Future investment value</h1>
    <h1 className="text-2xl font-bold">${amount}</h1>
  </div>
  <div>
    <h1>Interest rate (yearly)</h1>
    <h1 className="flex justify-between text-2xl font-bold">{interest}<span>%</span></h1>
  </div>
  <div >
    <h1>Total interest earned</h1>
    <h1 className=" text-2xl px-5 font-bold">{totalinterest}</h1>
  </div>
  <div>
    <h1>Initial balance</h1>
    <h1 className="text-2xl font-bold">${principal}</h1>
  </div>
</div>
<div className="my-10">
  <h1>Yearly breakdown</h1>
<table className="w-full">
  <tr className="border border-spacing-2 p-4">
    <th>Years</th>
    <th>{emi}</th>
    <th>Balance</th>
  </tr>
  <tr className="border border-spacing-2 p-4">
    <td>1</td>
    <td>$</td>
    <td>$</td>
  </tr>
  <tr className="border border-spacing-2 p-4">
    <td>2</td>
    <td>$</td>
    <td>$</td>
  </tr>
 
  <tr className="border border-spacing-2 p-4">
    <td>3</td>
    <td>$</td>
    <td>$</td>
  </tr>
  <tr className="border border-spacing-2 p-4">
    <td>4</td>
    <td>$</td>
    <td>$</td>
  </tr>
  <tr className="border border-spacing-2 p-4">
    <td>5</td>
    <td>$</td>
    <td>$</td>
  </tr>
</table>
</div>
<div>
  <h1 className="text-xl font-semibold">Summery</h1>
  <div className="my-3">
    <h1>Initial deposit:</h1>
    <h1>Interest rate:</h1>
    <h1>Effective Rate:</h1>
    <h1>Compounding:</h1>
  </div>
  <div className="text-end">
                  <button type="submit"  className="px-5 py-3 bg-yellow-400 rounded-3xl">
                    Show Repayment Schedule
                  </button>
                </div>
</div>

        </div>
      </div>
    </div>
  );
}
