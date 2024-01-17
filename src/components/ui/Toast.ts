import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    PromiseLikeOfReactNode,
  } from "react";
  import { toast, Slide, ToastContentProps } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  interface toastOption {
    position: string;
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress?: any;
    theme: string;
    transition: any;
  }
  const options:any = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:'',
    theme: "colored",
    transition: Slide,
  };
  
 export const Toast = (
    notificationType: string,
    notificationMessage:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | PromiseLikeOfReactNode
      | ((props: ToastContentProps<unknown>) => ReactNode)
      | null
      | undefined
  ) => {
    switch (notificationType) {
      case "success":
        toast.success(notificationMessage,options);
        break;
      case "error":
        toast.error(notificationMessage,options);
        break;
      case "info":
        toast.info(notificationMessage,options);
        break;
      case "warning":
        toast.warning(notificationMessage,options);
        break;
      default:
        break;
    }
  };
  
  export default Toast