
const Label = ({children}: any) => {
  return ( 
    <label htmlFor={children}  className="capitalize text-primary font-bold text-[17px] not-italic leading-9">{children}</label>
  );
};
 
export default Label;