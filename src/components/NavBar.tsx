"use client";

import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Lisk from "next/link";

const NavBar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Lisk href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Lisk>
            </Menu>
        </div>
    );
};

export default NavBar;
