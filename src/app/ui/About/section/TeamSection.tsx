import ProfileContainer from "../components/ProfileContainer";

const TeamSection = () => {
    return <div className=" mt-10 md:flex md:flex-wrap md:py-20 md:w-[1440px] md:h-[1320px] md:flex-shrink-0  ">
   <div className="md:flex  md:gap-7  md:mt-32">
         <ProfileContainer 
          img= '/Ellipse 1.png '
           heading="Hari"
           subHeading="CEO"
           para="“I want to use my abilities and energy to help people take climate action”
           Hari discovered his ikigai was to 
           become a social entre ....    see more " />

      <ProfileContainer 
          img= '/Ellipse 1 (1).png'  
          heading="Manoj"
          subHeading="Project lead"
          para="“I want to be a superhero. Neither can I fly, nor stop trains; 
          but I’m sure to help win this war against climate change with the superpowers i possess” ...see more" />

      <ProfileContainer 
         img="/Ellipse 1 (2).png"
          heading="Jyothsna" 
          subHeading="Project lead" 
          para='"The proper use of science is not to conquer nature, but to live in it."
          Her objective is to instill an awareness in the society that our interactions with the ..... see more'  />
   </div>

   <div className="hidden md:flex md:gap-7  ">
        <ProfileContainer 
           img='/Ellipse 1 (3).png'
           heading="Arun Kumar NT(AK)" 
           subHeading="Sale Partner" 
           para="“I want to solve critical market challenges and build impactful business by providing turnkey solutions”
            After his Mechanical ..... see more  " />

       <ProfileContainer  
         img='/Ellipse 1 (4).png'
          heading="Shanthi Priya Lobo" 
          subHeading="Project associate" 
          para="After graduating from college as an Environmental engineer, Shanthi worked in different industries looking for excitement, job satisfaction, and completeness to .......     see more"/>

       <ProfileContainer  
         img='/Ellipse 1 (5).png'
          heading="Aamina Rukhiya" 
          subHeading="Project associate" 
          para="“I wish to be an entity that makes a difference in the space of climate change”
          Aamina is an all time nature lover who went on to pursue .... see more"/>
      </div>
    </div>

    

}


export default TeamSection;