import Link from "next/link";
import {BsFacebook,BsInstagram,BsWhatsapp} from "react-icons/bs"
export default function InsideFooter() {
  return (
    <div className="py-10 bg-orange-400">
      <div className="grid grid-flow-col grid-cols-4 gap-2 px-20 py-10 border-b-2 border-gray-400 text-gray-100">
        <div>
          <h1 className="text-3xl text-red-600 pb-5">Finance</h1>
          <div>
            <Link href="/">Compound interest Calculator</Link>
          </div>
          <div>
            <Link href="/">CAGR Calculator</Link>
          </div>
          <div>
            <Link href="/">Margin Calculator</Link>
          </div>
          <div>
            <Link href="/">Salary to Hourly Calculator</Link>
          </div>
          <div>
            <Link href="/">All Interest Calculator.. </Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-red-600 pb-5">Home & Garden</h1>
          <div>
            <Link href="/">Cubic Feet Calculator</Link>
          </div>
          <div>
            <Link href="/">Cubic Yards Calculator</Link>
          </div>
          <div>
            <Link href="/">Gravel Calculator</Link>
          </div>
          <div>
            <Link href="/">Mulch Calculator</Link>
          </div>
          <div>
            <Link href="/">All Construction Calculator...</Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-red-600 pb-5">Cooking</h1>
          <div>
            <Link href="/">Cooking Calculator</Link>
          </div>
          <div>
            <Link href="/">Cups to Grams</Link>
          </div>
          <div>
            <Link href="/">mL to Teaspoons</Link>
          </div>
          <div>
            <Link href="/">Grams to Tablespoons</Link>
          </div>
          <div>
            <Link href="/">All Cooking Calculator</Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-red-600 pb-5">Company</h1>
          <div>
            <Link href="/">About The Calculator Site</Link>
          </div>
          <div>
            <Link href="/">Advertise With Us</Link>
          </div>
          <div>
            <Link href="/">Privacy & Cookie Use</Link>
          </div>
          <div>
            <Link href="/">Disclaimer</Link>
          </div>
          <div>
            <Link href="/">Contact Us</Link>
          </div>
        </div>

      </div>
     <div className="flex justify-between py-5 px-4 text-white">
     <div >
    <h1>
    © Copyright 2023, Abhishek Industries Ltd
    </h1>
</div>
<div className="flex gap-4 text-2xl">
                    <BsFacebook />
                    <BsWhatsapp />
                    <BsInstagram />
                </div>
     </div>
    </div>
  );
}
