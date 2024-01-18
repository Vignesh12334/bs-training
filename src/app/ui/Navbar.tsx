           import Image from "next/image";
           import Link from "next/link";
  
  
  
    const Navbar = () =>  {

     return (

        <nav className="fixed top-0 left-0 w-full bg-white z-20 h-16 ">
           
            <Link href='/' >
              <Image className="mt-5 ml-9"  src='/logo1.svg'  alt="logo" width={154} height={32}/>
            </Link>
            <div className=" flex justify-end  ">
              <ul className="flex space-x-11 pb-20 mr-11 mb-30 font-medium">
                <li>Our Services</li>
                <li>About us</li>
                <li> Careers</li>
                <li className="bg-green-900 text-slate-100">Contact us</li>
               </ul>
            </div>
            
        </nav>
        )
 }
    


 export default Navbar;