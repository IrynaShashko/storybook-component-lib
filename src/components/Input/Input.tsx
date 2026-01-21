import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";

interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

export const Input = ({
  type = "text",
  clearable,
  placeholder,
  label,
}: InputProps) => {
  const [value, setValue] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="flex flex-row gap-1.5 w-full max-w-sm">
      {label && (
        <label className="text-sm font-semibold text-slate-700 ml-1">
          {label}
        </label>
      )}

      <div className="relative flex items-center group">
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="
            w-full px-4 py-2.5 
            bg-white border border-slate-200 rounded-xl
            text-slate-900 placeholder:text-slate-400
            transition-all duration-200 outline-none
            hover:border-slate-300
            focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
          "
        />

        <div className="absolute right-3 flex items-center gap-2 text-slate-400">
          {type === "password" && (
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="p-1 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>
      {clearable && value && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="p-0 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};
