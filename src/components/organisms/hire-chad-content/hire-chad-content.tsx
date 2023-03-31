import Image from "next/image";
import HireChadDetails from "components/molecules/hire-chad-details/hire-chad-details";
import { ChadProfilePic } from "images/Index";

const HireChadContent = () => {

  return ( 
    <div className="flex flex-col lg:flex-row w-full justify-between items-center">
      <div className="lg:w-[50%] xl:flex lg:flex">

        <Image src={ ChadProfilePic } alt="Chad Stewart Profile Pic" />
        
      </div>
      
      <div className="w-full lg:w-1/2 lg:px-16 px-5 md:px-10 my-10 flex flex-col">

        <HireChadDetails />
          
      </div>
    </div>

  );
};
 
export default HireChadContent;