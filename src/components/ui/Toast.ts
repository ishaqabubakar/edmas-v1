import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    PromiseLikeOfReactNode,
  } from "react";
  import { toast, Slide, ToastContentProps } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

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
  
 export const showToast = (
    notificationType: string,
    notificationMessage:string
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
  
  export default showToast