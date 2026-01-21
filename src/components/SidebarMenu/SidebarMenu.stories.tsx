import { useState } from "react";

import { LayoutPanelLeft } from "lucide-react";

import type { MenuItemData } from "./SidebarMenu";
import { SidebarMenu } from "./SidebarMenu";

export default {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};

const nestedItems: MenuItemData[] = [
  { id: "1", label: "Dashboard" },
  {
    id: "2",
    label: "Settings",
    children: [
      { id: "2-1", label: "Profile" },
      {
        id: "2-2",
        label: "Privacy",
        children: [
          { id: "2-2-1", label: "Blocked Users" },
          { id: "2-2-2", label: "Data Usage" },
        ],
      },
    ],
  },
];

const SidebarStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-sm font-bold mb-4">Sidebar Menu Demo</h1>
        <p className="text-slate-500 mb-8">
          Click below to test the sliding sidebar.
        </p>

        <button
          className="inline-flex flex-row items-center gap-2 border-2 border-transparent hover:border-pink-700  text-black px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          onClick={() => setOpen(true)}
        >
          <LayoutPanelLeft size={20} />
          Open Sidebar Menu
        </button>
      </div>
      <SidebarMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        items={nestedItems}
      />
    </div>
  );
};

export const NestedMenu = {
  render: () => <SidebarStory />,
};
