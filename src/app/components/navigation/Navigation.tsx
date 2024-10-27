import Link from "next/link";
import {fetchMenu} from "@/services/fetchMenu";
import MobileMenu from "@/app/components/navigation/components/MobileMenu";
import DesktopMenu from "@/app/components/navigation/components/DesktopMenu";
import {cn} from "@/utils/utils";
import {ReactNode} from "react";


export default async function Navigation() {
    let menuItems = [];
    menuItems = await fetchMenu();

    return (
        <nav className="bg-neutral-0" data-cypress="navigation">
            <div className="container flex items-center justify-between z-50 h-12">
                <Link href={'/home'} data-cypress="navigation-home">
                    <h1 className="text-2xl font-bold text-red-300">Bonaparte</h1>
                </Link>

                <NavigationWrapper className={"flex lg:hidden"}>
                    <MobileMenu menuItems={menuItems}/>
                </NavigationWrapper>

                <NavigationWrapper className={"hidden lg:flex"}>
                    <DesktopMenu menuItems={menuItems}/>
                </NavigationWrapper>
            </div>
        </nav>
    );
}

function NavigationWrapper({children, className}: { children: ReactNode, className: string }) {
    return (
        <div className={cn("flex items-center gap-x-5 md:gap-x-11 lg:gap-x-9", className)}>
            {children}
        </div>
    );
}
