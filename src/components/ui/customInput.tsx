import {
    JSXElementConstructor,
    KeyboardEventHandler,
    PromiseLikeOfReactNode,
    ReactElement,
    ReactNode,
    ReactPortal,
    useState,
  } from "react";
  import { VscEye, VscEyeClosed } from "react-icons/vsc";
  
  export const InputField = (props: {
    onChange: (arg0: any) => void;
    width: string | number | undefined;
    label?:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
    border?: any;
    borderRight?: any;
    borderTop?: any;
    borderBottom?: any;
    rounded?: any;
    paddingX?: any;
    type: string;
    placeholder?: string | undefined;
    required: boolean | undefined;
    value?: string | number | readonly string[] | undefined;
    defaultValue: string | number | readonly string[] | undefined;
    handleSubmit?: KeyboardEventHandler<HTMLInputElement> | undefined;
    emailError?: any;
  }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    //show reveal password function
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleChange = (e: { target: { value: any } }) => {
      props.onChange(e.target.value);
    };
  
    return (
      <div
        className={`${props.width} text-gray-500 font-poppins text-sm flex flex-col gap-1`}
      >
        {props.label && <div>{props.label}</div>}
        <div
          className={`flex gap-1 items-center justify-center bg-white ${props.border} ${props.borderRight} ${props.borderTop} ${props.borderBottom} border-black ${props.rounded} ${props.paddingX} mt-[10px]`}
        >
          <input
            type={
              props.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : "text"
            }
            placeholder={props.placeholder}
            required={props.required}
            width={props.width}
            value={props.value}
            defaultValue={props.defaultValue}
            onChange={handleChange}
            onKeyUp={props.handleSubmit}
            className="input text-black text-[14px] h-10 w-full py-3 tracking-wide  focus:outline-none  font-Regular font-poppins"
          />
  
          {props.type == "password" && (
            <div onClick={toggleShowPassword}>
              {props.type === "password" && props.value != "" && showPassword ? (
                <VscEye className="text-xl text-black cursor-pointer hover:text-brand" />
              ) : (
                <VscEyeClosed className="text-xl text-black cursor-pointer hover:text-brand" />
              )}
            </div>
          )}
        </div>
        {props.type == "email" && props.emailError && (
          <p className="text-red-400 text-sm">invalid email address</p>
        )}
      </div>
    );
  };
  