"use client";
import { SidebarItem } from "./sidebar-item";
import { Compass, Layout } from "lucide-react";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    }
]
export const SidebarRoutes = () => {
const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((routes) => (
                <SidebarItem
                key={routes.href}
                icon={routes.icon}
                label={routes.label}
                href={routes.href}
                />
            ))}
        </div>
    )
}