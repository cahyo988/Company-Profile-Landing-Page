"use client"

import Logo from "../../Assets/Logo.png";
import Image from 'next/image';
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import { useState } from 'react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [{
        text: "Home",
        icon: <HomeIcon />
    }, {
        text: "About",
        icon: <InfoIcon />
    }, {
        text: "Testimonials",
        icon: <CommentRoundedIcon />
    }, {
        text: "Contact",
        icon: <PhoneRoundedIcon />
    }, {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon />
    }
    ]
    return <nav>
        <div className='nav-logo-container flex gap-3'>
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <span className="nav-logo-text pt-4 uppercase">Helios FOOD</span>
        </div>
        <div className="navbar-links-container">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Testimonials</Link>
            <Link href="">Contact</Link>
            <Link href="">Cart</Link>
            <button className="primary-button">Booking NOW!</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{ width: 250 }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Drawer>
    </nav>
}

export default Navbar