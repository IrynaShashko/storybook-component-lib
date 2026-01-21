// src/components/Input/Input.stories.tsx
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const PasswordWithToggle = {
  args:{
    type:"text",
    placeholder:"Enter text...",
    clearable:true,
  },
};
