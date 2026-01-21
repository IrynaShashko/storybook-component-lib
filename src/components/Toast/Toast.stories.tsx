import { Toast } from "./Toast";

export default {
  title: "Feedback/Toast",
  component: Toast,
};

export const Success = {
  args:{
    message:"Operation successful!",
    type:"success",
    duration:0
  },
};
