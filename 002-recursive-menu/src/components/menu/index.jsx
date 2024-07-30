import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import classNames from "./menu.module.css";

const menuList = [
    {
        title: "Level:1 Item:1",
        subMenu: [
            {
                title: "Level:2 Item:1",
                subMenu: [
                    {
                        title: "Level:3 Item:1",
                        subMenu: [
                            {
                                title: "Level:4 Item:1",
                                subMenu: [],
                            },
                        ],
                    },
                    {
                        title: "Level:3 Item:2",
                        subMenu: [
                            {
                                title: "Level:4 Item:1",
                                subMenu: [],
                            },
                        ],
                    },
                    {
                        title: "Level:3 Item:3",
                        subMenu: [],
                    },
                ],
            },
            {
                title: "Level:2 Item:2",
                subMenu: [],
            },
        ],
    },
    { title: "Level:1 Item:2", subMenu: [] },
];

const Menu = () => {
    return (
        <ul className={classNames.list}>
            {menuList.map((menu) => (
                <MenuItem key={menu.title} menu={menu} />
            ))}
        </ul>
    );
};

export default Menu;

const MenuItem = ({ menu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <li key={menu.title} className={classNames.list_item}>
            <span>{menu.title}</span>
            {menu.subMenu.length > 0 && (
                <button
                    onClick={toggleMenuHandler}
                    className={classNames.toggle_btn}
                >
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </button>
            )}
            {isOpen && (
                <ul className={classNames.sub_list}>
                    {menu.subMenu.map((menu) => (
                        <MenuItem key={menu.title} menu={menu} />
                    ))}
                </ul>
            )}
        </li>
    );
};
