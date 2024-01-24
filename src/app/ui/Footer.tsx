import Link from "next/link"
import Image from "next/image"
import TextL from "./Typography/TextL"

const Footer = () => {
  return (
    <div className="">
        <div className=" n space-x-10 ml-20">
          <Link href="/dashboard" >
          <Image src='/logo2.svg' alt="logo-img" width={154} height={32} />
          </Link>

          <Link href="/dashboard/service" >
          <p>Service</p>
          </Link>

          <Link href="/dashboard/service" >
          <p>About us</p>
          </Link>

          <Link href="/dashboard/service" >
          <p>Careers</p>
          </Link>

          <Link href="/dashboard/service" >
          <p>Blogs</p>
          </Link>
        </div>

             <div className="flex justify-between py-8">
            
             <Image src='/icon 2.png' alt="facebook" width={32} height={32} />
             <Image src='/icon 1.png' alt="Instagram" width={32} height={32} />
             <Image src='/icon 3.png' alt="tweeter" width={32} height={32} />
              <Image src='/icon5.png' alt="linkeDin" width={32} height={32} />
             <Image src='/icon 4.png' alt="Pintrest" width={32} height={32} />
             
            </div>

            <div className="text-center my-16 text-slate-500">
                <ul >
                  <li><TextL className="py-5">Privacy Policy</TextL> </li> 
                 <li><TextL  className="py-5">Terms of service</TextL> </li>
                 <li><TextL  className="py-5">Site Map</TextL> </li>
                 <li><TextL  className="py-5 ">© 2020 Beyond Sustainability. 
                       All right reserved.</TextL> </li>
                
                </ul>
            </div>
        
    </div>
  )
}

export default Footer