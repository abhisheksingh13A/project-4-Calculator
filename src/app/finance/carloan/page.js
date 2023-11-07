import InsideFooter from "@/app/footer/insidefooter/page"

export default function CarLoan(){
    return(
        <div>
             <div className="mx-24 mt-20">
            <div className="text-gray-400 text-2xl py-6">
            <h1>Car Loan Payoff Calculator</h1>
            </div>
           <div className="">
<div className="flex justify-start gap-1">
    <button className="bg-orange-400 border border-gray-300 text-white rounded-3xl items-center px-2 py-2 text-sm  ">Car Loan Calculator</button>
    <button className="bg-gray-400 border border-gray-300 text-white rounded-3xl items-center px-2 py-2 text-sm">Boat Loan Calculator</button>
</div>
<div className="flex gap-5">
<div className=" w-[810px] h-[560px] bg-gray-400 my-5 p-5 rounded-3xl">
<div className="w-[500px] h-[520px] bg-gray-300 mx-28 py-3 px-3 rounded-3xl ">
<h1 className="pl-5">Currency:</h1>
<div className="flex  px-3 py-1 rounded-3xl bg-gray-100">
    <label className="px-9 py-2 border-r-4">$</label>
    <label className="px-9 py-2 border-r-4">€</label>
    <label className="px-9 py-2 border-r-4">£</label>
    <label className="px-9 py-2 border-r-4">₹</label>
    <label className="px-9 py-2 border-r-4">¥</label>
</div>
<h1 className="mt-5 pl-5">Car value :</h1>
<div className="flex rounded-2xl border border-gray-400 w-96 h-10 mb-5">
    <span className="w-24 text-center pt-2">₹</span>
    <input type="text"  className="w-full px-3"/>
</div>
<h1 className=" pl-5">Interest rate:</h1>
    <input type="text"  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5"/>


    <div className="flex gap-3 mt-5">
        <div>
            <h1 className=" pl-5">Years:</h1>
            <input type="text"  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5"/>
        </div>
        <div>
            <h1 className=" pl-5">Months:</h1>
            <input type="text"  className=" rounded-2xl border border-gray-400 w-40 h-10 p-5"/>
        </div>
    </div>

<div className="my-5">
    <h1 className=" pl-5">Car loan start date?</h1>
    <input type="date" className=" rounded-2xl border border-gray-400 w-46 h-10 p-5"/>
</div>
<div>
<button type="submit"  className=" rounded-2xl border bg-orange-300 px-4 py-3  justify-center">Calculate</button>
</div>
</div>

</div>
<div className="w-full rounded-3xl  text-center bg-gray-400 text-xl py-4 px-3">
<div className="grid  gap-8">
<div>
    <h1 className="text-3xl font-bold text-orange-300 ">Car Loan Calculation</h1>
</div>
<div className="flex justify-between gap-3  font-bold">
    <div>
    <h1>Monthly payment</h1>
    <h1 className="text-2xl font-bold">$1200</h1>
    </div>
    <div>
        <h1>Loan amount</h1>
        <h1 className="text-2xl font-bold">$2400000</h1>
    </div>
</div>
<div>
    <h1>Total interest</h1>
    <h1 className="text-2xl font-bold">5.4%</h1>
</div>
<div>
    <h1>Total payments</h1>
    <h1 className="text-2xl font-bold">$200000</h1>
</div>
<div>
    <h1>Estimated payoff date</h1>
    <h1 className="text-2xl font-bold">07/11/2023</h1>
</div>
<div>
    <h1 className="text-2xl font-bold">Graph</h1>
    
</div>
<div>
    <button className="px-5 py-3 bg-yellow-400 rounded-3xl">Show Repayment Schedule</button>
</div>
</div>
</div>
</div>

<div className="inline-block gap-5  my-10 mx-10">
    <div>
        <h1 className="text-2xl font-bold text-yellow-400 py-5">How does the car loan payoff calculator work?</h1>
        <h3>Our calculator helps you work out the costs associated with purchasing a car on credit. Once you have entered
         the amount, the interest rate and the period of the loan, the calculator will return the total repayment amount, the total interest and the monthly payment figure, as well as full amortization.</h3>
    </div>
    <div>
        <h1 className="text-2xl font-bold  text-black  py-5">How much interest will I pay on my car loan?</h1>
        <h3>The costs associated with purchasing a car on credit. Once you have entered
         the amount, the interest rate and the period of the loan, the calculator will return the total repayment amount, the total interest and the monthly payment figure, as well as full amortization.</h3>
    </div>
    <div>
        <h1 className="text-2xl font-bold text-yellow-400  py-5">Why take out a car loan?</h1>
        <h3>When it comes to financing a new car, there are a number of options available to you: outright purchase, personal loan, leasing, hire purchase or dealer financing. advisable to read up on the pros and cons of each of these before
             deciding upon the best one for you. Should you be considering taking out a different type of loan, give our standard loan calculator a try. You can even include extra payments in your calculation.</h3>
    </div>
    <div>
        <h1 className="text-2xl font-bold  text-black  py-5">What is a balloon payment?</h1>
        <h3>A balloon payment is a large, lump-sum payment made at the end of a long-term loan. It is commonly used in car finance loans as a way of reducing monthly repayment figures. Be aware that once you reach the end of your loan period, the balloon amount becomes payable</h3>
    </div>
</div>




{/* <div className="w-[400px] h-[400px] bg-red-400">
<div className="my-10 mx-10 bg-orange-500">
<input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript">JavaScript</label>
</div>
</div> */}
           </div>
        </div>
        <div className="bg-gary-900 text-center p-5">
    <div className="bg-gray-300 px-3 py-3  h-[300px]">
        <h1>Advertisements</h1>
    </div>
</div>

<InsideFooter />
        </div>
    )
}
