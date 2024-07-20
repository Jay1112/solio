import React, { useId } from "react";

const Input = React.forwardRef(function Input({
  label = '',
  type = 'text',
  containerStyle = 'w-full',
  className="",
  ...props
}, ref) {
  const id = useId();
  
  return (
    <div className={`${containerStyle}`}>
      {
        label && 
        <label className="my-2" htmlFor={id}>{label}</label>
      }
      <input 
        className={className}
        type={type}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default Input;