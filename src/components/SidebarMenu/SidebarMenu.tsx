import { X } from "lucide-react";
import { useState } from "react";
import { RecursiveMenuItem } from "./RecursiveMenuItem";

export interface MenuItemData {
  id: string;
  label: string;
  children?: MenuItemData[];
}

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItemData[];
}

export const SidebarMenu = ({ isOpen, onClose, items }: SidebarMenuProps) => {
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <>
      <div
        className={`
          fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Navigation</h3>
          <button
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="h-[calc(100%-73px)] overflow-y-auto py-4">
          {items.map((item) => (
            <RecursiveMenuItem
              key={item.id}
              item={item}
              expandedIds={expandedIds}
              onToggle={toggleExpand}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};
