import React from "react";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
{
	title: "Data Management",
	path: "/data-management",
	icon: <FcIcons.FcDataConfiguration />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "User Roles",
		path: "/data-management/userRoles",
	},
	{
		title: "User Details",
		path: "/data-management/userDetails",
	},
	],
},
{
	title: "Master Data",
	path: "/masterData",
	icon: <FcIcons.FcKey />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Items",
		path: "/masterData/items",
		cName: "sub-nav",
	},
	{
		title: "Orders",
		path: "/masterData/orders",
		cName: "sub-nav",
	},
	{
		title: "Inventory",
		path: "/masterData/inventory",
		cName: "sub-nav",
	},
	],
},
{
	title: "Support",
	path: "/support",
	icon: <FcIcons.FcQuestions />,
},
{
	title: "Logout",
	path: "/logout",
	icon: <CgIcons.CgLogOut />,
},
];
