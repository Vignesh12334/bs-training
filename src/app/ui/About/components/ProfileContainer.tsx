import Image from "next/image"

export interface propTypes {
    img? : string
    heading : string
    subHeading : string
    para : string
}



const ProfileContainer = ({img, heading, subHeading, para}: propTypes ) => {
    // console.log(img); => ""
    return <div className=" border border-solid border-[#D8D8D8] mt-5 px-2 md:p-14">
        {img && 
         <Image src={img} alt=""  width={204} height={204} />
        }

        {
           <h3 className=" text-[#000] text-[26.372px] not-italic font-semibold leading-[32.996px] ">{heading} </h3>
        }

        {
            <h4 className="text-[#1A603B]  text-[18.131] not-italic font-medium leading-[27.886px] ">{subHeading}</h4>
        }

        {
             <p className="text-[#000] text-[14.835] not-italic ont-normal leading-[18.131px] ">{para} </p>
        }
    </div>

}

export default ProfileContainer;