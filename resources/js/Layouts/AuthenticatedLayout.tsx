import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { User } from "@/types";
import {
    Flowbite,
    Navbar,
    Label,
    TextInput,
    Dropdown,
    CustomFlowbiteTheme,
    Tooltip,
    Button,
    DarkThemeToggle,
    Sidebar,
} from "flowbite-react";

import { HiBell, HiChartPie, HiMenuAlt1, HiSearch } from "react-icons/hi";
import useWindowDimension from "@/hooks/useWindowDimension";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [sidebarCollapse, setSidebarCollapse] = useState<boolean>(false);
    const { width, height } = useWindowDimension();

    useEffect(() => {
        if (width < 1024) {
            setSidebarCollapse(true);
        } else {
            setSidebarCollapse(false);
        }
    }, [width]);

    const customTheme: CustomFlowbiteTheme = {
        navbar: {
            root: {
                base: "fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",
                inner: {
                    base: "mx-auto flex flex-wrap items-center justify-between",
                },
            },
        },
        sidebar: {
            root: {
                base: "sidebar-root-base",
                inner: "sidebar-root-inner",
            },
        },
        tooltip: {
            target: "tooltip-target",
            animation: "tooltip-animation",
            base: "tooltip-base",
            style: {
                auto: "tooltip-style-auto",
            },
            hidden: "tooltip-hidden",
            content: "tooltip-content",
        },
    };

    const toggleSidebarCollapse = () => {
        setSidebarCollapse((previousValue) => {
            return !previousValue;
        });
    };

    const notificationTooltipContent: ReactNode = (
        <ul>
            <div className="max-w-[24rem]">
                <div className="block rounded-t-xl bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    Notifications
                </div>
                <div>
                    <a
                        href="#"
                        className="flex border-y py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                        <div className="shrink-0">
                            <img
                                alt=""
                                src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png"
                                className="h-11 w-11 rounded-full"
                            />
                            <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                                <svg
                                    className="h-3 w-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                New message from&nbsp;
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Bonnie Green
                                </span>
                                : "Hey, what's up? All set for the
                                presentation?"
                            </div>
                            <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                a few moments ago
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </ul>
    );

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Navbar fluid>
                <div className="w-full p-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                onClick={toggleSidebarCollapse}
                                className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
                            >
                                <span className="sr-only">Toggle sidebar</span>
                                <HiMenuAlt1 className="h-6 w-6" />
                            </button>

                            <Navbar.Brand href="https://flowbite-react.com">
                                <img
                                    alt="Flowbite React Logo"
                                    className="mr-3 h-6 sm:h-9"
                                    src="https://flowbite.com/application-ui/demo/images/logo.svg"
                                />
                                <span className="hidden md:inline self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                    Helpdesk UAI
                                </span>
                            </Navbar.Brand>

                            <form className="ml-16 hidden md:block">
                                <Label
                                    htmlFor="search"
                                    value="Search..."
                                    className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                                />
                                <TextInput
                                    id="search"
                                    type="search"
                                    name="search"
                                    icon={HiSearch}
                                    placeholder="Search"
                                    size={32}
                                    required
                                />
                            </form>
                        </div>

                        <div className="flex items-center lg:gap-3">
                            <div className="flex items-center">
                                <Tooltip
                                    style="auto"
                                    content={notificationTooltipContent}
                                    arrow={false}
                                    trigger="click"
                                    placement="bottom-end"
                                    animation="duration-100"
                                >
                                    <button className="flex items-center">
                                        <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="sr-only">
                                                Notifications
                                            </span>
                                            <HiBell className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white " />
                                        </span>
                                    </button>
                                </Tooltip>

                                <DarkThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>

            <div className="flex items-start pt-16">
                <div
                    className={`lg:!block ${
                        width < 1024 && sidebarCollapse ? "hidden" : ""
                    }`}
                >
                    <Sidebar as="aside" collapsed={sidebarCollapse}>
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <form className="pb-3 sm:hidden">
                                    <div className="flex">
                                        <TextInput
                                            icon={HiSearch}
                                            placeholder="Search"
                                            required
                                            size={32}
                                        />
                                    </div>
                                </form>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item icon={HiChartPie}>
                                            Dashboard
                                        </Sidebar.Item>
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </div>

                <main
                    className={`overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900 ${
                        sidebarCollapse ? "lg:ml-16" : "lg:ml-64"
                    }`}
                >
                    <div className="px-4 pt-6">{children}</div>
                </main>
            </div>
        </Flowbite>
    );
}
