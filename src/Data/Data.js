// Sidebar imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';


import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import EuroIcon from '@mui/icons-material/Euro';
import EventIcon from '@mui/icons-material/Event';

// Analytics Cards imports
// import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
// import img1 from "../imgs/img1.png";
// import img2 from "../imgs/img2.png";
// import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [{
        id: 1,
        url: '/Dashboard',
        icon: < DashboardIcon /> ,
        heading: "Dashboard",
    },
    {
        id: 2,
        url: '/Orders',
        icon: < EventNoteIcon /> ,
        heading: "Orders",
    },
    {
        id: 3,
        url: '/Orders',
        icon: < EventNoteIcon /> ,
        heading: "Orders",
    },
    {
        id: 4,
        url: '/Orders',
        icon: < EventNoteIcon /> ,
        heading: "Orders",
    },
    {
        id: 5,
        url: '/Orders',
        icon: < EventNoteIcon /> ,
        heading: "Orders",
    },
    {
        id: 6,
        url: '/Orders',
        icon: < EventNoteIcon /> ,
        heading: "Orders",
    },

]

export const cardsData = [{
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: < EuroIcon /> ,
        series: [{
            name: "Sales",
            data: [31, 40, 28, 51, 42, 109, 100],
        }, ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: < EventIcon /> ,
        series: [{
            name: "Revenue",
            data: [10, 100, 50, 70, 80, 30, 40],
        }, ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: < DocumentScannerIcon /> ,
        series: [{
            name: "Expenses",
            data: [10, 25, 15, 30, 12, 15, 20],
        }, ],
    },
];