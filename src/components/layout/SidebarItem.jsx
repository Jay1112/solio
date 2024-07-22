import React, { useState } from "react";
import NavLink from "../layout/NavLink";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

function SidebarItem({ itemData }) {
  const [open,setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={clsx("p-2 my-3 rounded-sm flex items-center justify-center", location.pathname === itemData.link ? 'bg-subsecondary text-subsecondary2nd' : 'bg-gray-400 text-dark')}>
      <i className={`${itemData.icon} px-2`}></i>
      <NavLink to={itemData.link} navLinkStyle='w-full inline-block font-poppins flex-1 px-2'>{itemData.text}</NavLink>
    </div>
  );
}

export default SidebarItem;
