import Link from "next/link";
import {BiChevronDown} from "react-icons/bi"
import {BsFacebook,BsInstagram,BsWhatsapp} from "react-icons/bs"

export default function Navbar(){
    return(
        <div className="">
            <div className="flex justify-between h-24 items-center bg-orange-300   px-10 ">
                <div>
                    <h1 className="text-3xl"><span className="text-sm align-top">The</span>Calculator<span className="text-sm  align-bottom ">Site</span></h1>
                </div>
                <div className="flex gap-5 text-4xl">
                    <BsFacebook />
                    <BsWhatsapp />
                    <BsInstagram />
                </div>
            </div>
         <div className=" bg-gray-400">
         <div className="flex justify-center  ">
         <div  className="bg-gray-400  relative  flex items-center justify-between w-40 px-5 py-4 border-x-2 border-gray-600   group">
         <Link href="/" >Finance</Link>
<BiChevronDown size={20} />
<div className="absolute hidden group-hover:block  top-full  bg-white">
    
<ul className="bg-white mt-2 max-h-60">
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white"><Link href="/finance/compoundinterest">Compound Interest</Link></li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white"><Link href="/finance/carloan">Car Loan</Link></li>

    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
</ul>
</div>
</div>
         <div  className="bg-gray-400  relative  flex items-center justify-between w-40 px-5 py-1 border-r-2 border-gray-600   group">
         <Link href="/" >Featured</Link>
<BiChevronDown size={20} />
<div className="absolute hidden group-hover:block  top-full  bg-white">
    
<ul className="bg-white mt-2 max-h-60">
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
</ul>
</div>
</div>
         <div  className="bg-gray-400  relative  flex items-center justify-between w-40 px-5 py-1 border-r-2 border-gray-600   group">
         <Link href="/" >Cooking</Link>
<BiChevronDown size={20} />
<div className="absolute hidden group-hover:block  top-full  bg-white">
    
<ul className="bg-white mt-2 max-h-60">
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
</ul>
</div>
</div>
         <div  className="bg-gray-400  relative  flex items-center justify-between w-40 px-5 py-1 border-r-2 border-gray-600   group">
         <Link href="/" >Articles</Link>
<BiChevronDown size={20} />
<div className="absolute hidden group-hover:block  top-full  bg-white">
    
<ul className="bg-white mt-2 max-h-60">
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
</ul>
</div>
</div>
         <div  className="bg-gray-400  relative  flex items-center justify-between w-40 px-5 py-1 border-r-2 border-gray-600   group">
         <Link href="/" >Health</Link>
<BiChevronDown size={20} />
<div className="absolute hidden group-hover:block  top-full  bg-white">
    
<ul className="bg-white mt-2 max-h-60">
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
</ul>
</div>
</div>
         <div  className="bg-gray-400  relative  flex items-center justify-between w-40 px-5 py-1  border-r-2 border-gray-600  group">
         <Link href="/" >Contact Us</Link>
<BiChevronDown size={20} />
<div className="absolute hidden group-hover:block  top-full  bg-white">
    
<ul className="bg-white mt-2 max-h-60">
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
    <li className="p-2 text-sm hover:bg-sky-500 hover:text-white">Sample</li>
</ul>
</div>
</div>
                
                
            </div>
         </div>

        </div>
    )
}