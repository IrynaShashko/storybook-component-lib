import { ChevronRight } from "lucide-react";

import type { MenuItemData } from "./SidebarMenu";

export const RecursiveMenuItem = ({
  item,
  expandedIds,
  onToggle,
  level = 0,
}: {
  item: MenuItemData;
  expandedIds: string[];
  onToggle: (id: string) => void;
  level?: number;
}) => {
  const isExpanded = expandedIds.includes(item.id);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="w-full">
      <div
        className={`
          flex items-center justify-between py-3 px-5 cursor-pointer transition-colors
          ${isExpanded ? "bg-slate-50 text-blue-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
        `}
        style={{ paddingLeft: `${(level + 1) * 20}px` }}
        onClick={() => hasChildren && onToggle(item.id)}
      >
        <span className="text-sm font-medium">{item.label}</span>
        {hasChildren && (
          <ChevronRight
            className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
            size={16}
          />
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-1 duration-200">
          {item.children!.map((child: MenuItemData) => (
            <RecursiveMenuItem
              key={child.id}
              item={child}
              expandedIds={expandedIds}
              onToggle={onToggle}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
