import { contactImg, contactMobileImg } from "images/Index";
import Image from "next/image";
import ContactForm from "components/molecules/contact-form/contact-form";
import React from "react";

const ContactContent = () => {

  return ( 
    <div className="flex w-full justify-between items-center">
      <div className="hidden max-h-[900px] xl:flex lg:flex" data-testid="desktop">

        <Image src={ contactImg } alt="Contact Form Image" />
        
      </div>
      
      <div className="w-full lg:w-1/2 lg:px-32 px-5 md:px-10 my-10 flex flex-col">

        <div className="lg:hidden absolute right-0 top-[6rem]" data-testid="mobile">
          <Image src= {contactMobileImg} alt="contact form mobile image" width={150} height={180} />
        </div>

        <ContactForm />
          
      </div>
    </div>

  );
};
 
export default ContactContent;