import { useState } from "react";
import { contactImg } from "images/Index";
import DefaultImage from "components/atoms/image/image";
import ContactHeading from "components/molecules/contact-heading/contact-heading";
import ContactForm from "components/molecules/contact-form/contact-form";

const ContactContent = () => {

  return ( 
    <div>
      <div className="flex w-full ">
        <div className="lg:w-[45%] hidden xl:flex lg:flex justify-center items-center">
          <DefaultImage 
            src={"https://res.cloudinary.com/phantom1245/image/upload/v1675875866/techishiring/techish_qcfih9.png" || contactImg}
            alt="contact-img" 
            w={"100%"}
            h={"auto"}
          />
        </div>
        <div className="w-full lg:w-1/2 lg:px-32 mt-10 flex flex-col">
          <ContactHeading />
          <ContactForm />
          
        
        </div>
      </div>
    </div>

  );
};
 
export default ContactContent;