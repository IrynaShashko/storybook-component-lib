import { useEffect } from "react";

import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const toastConfig = {
  success: {
    icon: <CheckCircle2 className="text-green-500" size={20} />,
    styles: "border-green-100 bg-green-50/90 text-green-900",
  },
  error: {
    icon: <AlertCircle className="text-red-500" size={20} />,
    styles: "border-red-100 bg-red-50/90 text-red-900",
  },
  info: {
    icon: <Info className="text-blue-500" size={20} />,
    styles: "border-blue-100 bg-blue-50/90 text-blue-900",
  },
};

export const Toast = ({
  message,
  type,
  duration = 3000,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const config = toastConfig[type];

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3 min-w-[320px] max-w-md
        p-4 rounded-2xl border shadow-xl backdrop-blur-md
        animate-in slide-in-from-right-full fade-in duration-300
        ${config.styles}
      `}
    >
      <div className="shrink-0">{config.icon}</div>

      <p className="flex-1 text-sm font-medium leading-tight">{message}</p>

      <button
        onClick={onClose}
        aria-label="Close notification"
        className="
          p-1 rounded-lg transition-colors
          hover:bg-black/5 text-current/50 hover:text-current
        "
      >
        <X size={18} />
      </button>
    </div>
  );
};
