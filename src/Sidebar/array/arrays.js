import BpRecords from "../../Components/BpRecords";
import Registration from "../../Components/Registration";
import Reports from "../../Components/Reports";
import ZoningCertificate from "../navComponents/ZoningCertificate";
import Settings from "../navComponents/Settings";
import Logout from "../navComponents/Logout";
import BuildingPermit from "../navComponents/BuildingPermit";
import BusinessPermit from "../navComponents/BusinessPermit";
import PrintDownload from "../../Components/PrintDownload";
import MainPage from "../navComponents/MainPage";
import { FaHome, FaPrint } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { HiDocumentChartBar } from "react-icons/hi2";
import { SiGoogledocs } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillSignature } from "react-icons/ai";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";

export const navItems = [
  {
    id: 1,
    title: "Home",
    subMenu: [],
    icon: <FaHome />,
    path: "",
    component: <MainPage />,
  },
  {
    id: 2,
    title: "Business Permit",
    subMenu: [
      {
        id: "1",
        title: "Registration",
        icon: <AiFillSignature />,
        path: "",
        component: <Registration />,
      },
      {
        id: "2",
        title: "Records",
        icon: <MdOutlineRecordVoiceOver />,
        path: "",
        component: <BpRecords />,
      },
      {
        id: "3",
        title: "Report",
        icon: <HiDocumentReport />,
        path: "",
        component: <Reports />,
      },
      {
        id: "4",
        title: "Print / Download",
        icon: <FaPrint />,
        path: "",
        component: <PrintDownload />,
      },
      {
        id: "5",
        title: "Settings",
        icon: <IoMdSettings />,
        path: "",
        component: <Settings />,
      },
    ],
    icon: <IoDocumentTextSharp />,
    path: "",
    component: <BusinessPermit />,
  },
  {
    id: 3,
    title: "Zoning Certificate",
    subMenu: [],
    icon: <HiDocumentChartBar />,
    path: "",
    component: <ZoningCertificate />,
  },
  {
    id: 4,
    title: "Building Permit",
    subMenu: [
      {
        id: "1",
        title: "Zaf",
        icon: "",
        path: "",
        component: <Registration />,
      },
      {
        id: "2",
        title: "Zaf1",
        icon: "",
        path: "",
        component: <BpRecords />,
      },
    ],
    icon: <SiGoogledocs />,
    path: "",
    component: <BuildingPermit />,
  },
  {
    id: 5,
    title: "Settings",
    subMenu: [],
    icon: <IoMdSettings />,
    path: "",
    component: <Settings />,
  },
  {
    id: 6,
    title: "Logout",
    subMenu: [],
    icon: <RiLogoutBoxFill />,
    path: "",
    component: <Logout />,
  },
];

export const barangay = [
  "Bulacao",
  "Candulawan",
  "Cansojong",
  "Dumlog",
  "Jaclupan",
  "Lagtang",
  "Lawaan I",
  "Linao",
  "Maghaway",
  "Manipis",
  "Mohon",
  "Poblacion",
  "Pooc",
  "San Isidro",
  "San Roque",
  "Tabunoc",
  "Tangke",
  "Tapul",
  "Biasong",
  "Camp IV",
  "Lawaan II",
  "Lawaan III",
];

export const production = [
  "Not Specified",
  "As per customer",
  "As per client",
  "As per delivery",
  "As per rental",
  "As per customer/delivery",
];

const date = new Date();

export const decision = [
  `Locational Clearance Granted (valid until december 31, ${date.getFullYear()}`,
  "Locational Clearance Granted",
  `Valid Until December 31, ${date.getFullYear()}`,
  `City Ordinance No. 64 (s. 2021) / CPDC Board Res. No. ${date.getFullYear()}`,
];

export const zoningClassification = [
  "Road",
  "Residential",
  "Residential/Commercial",
  "Commercial",
  "Commercial/Industrial",
  "Institutional",
  "Industrial",
  "Industrial/Residential",
  "Forest Reserved",
  "Store",
  "Bank",
  "School",
  "Vacant Lot",
  "Creek",
  "Cliff",
  "Tourism",
];

export const legalBasis = [
  "City ordinance no. 64 (s. 2021)",
  "CDPC - Resolution No. 2025 - ",
];

export const inspector = [
  {
    id: 1,
    name: "Mario. P. Cabigas",
    position: "Admin. Asst. II / Zoning Inspector Designate",
  },
  {
    id: 2,
    name: "Erwin C. Bacalso",
    position: "Administrative Aide IV",
  },
];

export const errorMessage = [
  {
    id: 1,
    name: "date",
    message: "Invalid date format",
  },
  {
    id: 2,
    name: "lName",
    message: "Last name is required",
  },
  {
    id: 3,
    name: "fName",
    message: "First name is required",
  },
  {
    id: 4,
    name: "mName",
    message: "Middle name is required",
  },
  {
    id: 5,
    name: "building",
    message: "Building is required",
  },
  {
    id: 6,
    name: "city",
    message: "City is required",
  },
  {
    id: 7,
    name: "cNumber",
    message: "Invalid Contact Number",
  },
  {
    id: 8,
    name: "corpName",
    message: "Corporation name is required",
  },
  {
    id: 9,
    name: "busName",
    message: "Business name is required",
  },
  {
    id: 10,
    name: "busType",
    message: "Business type is required",
  },
  {
    id: 11,
    name: "busCapital",
    message: "Capital: Invalid Number",
  },
  {
    id: 12,
    name: "male",
    message: "Male: Invalid Number",
  },
  {
    id: 13,
    name: "female",
    message: "Female: Invalid Number",
  },
  {
    id: 14,
    name: "front",
    message: "Front is required",
  },
  {
    id: 15,
    name: "back",
    message: "Back is required",
  },
  {
    id: 16,
    name: "left",
    message: "Left is required",
  },
  {
    id: 17,
    name: "right",
    message: "Right is required",
  },
  {
    id: 18,
    name: "zonClassification",
    message: "Zoning classification is required",
  },
  {
    id: 19,
    name: "area",
    message: "Area: Invalid number",
  },
  {
    id: 20,
    name: "orNumber",
    message: "Invalid OR Number",
  },
  {
    id: 21,
    name: "orDate",
    message: "Invalid OR Date",
  },
  {
    id: 22,
    name: "amountPaid",
    message: "Invalid Amount Paid",
  },
  {
    id: 23,
    name: "decisionNumber",
    message: "Invalid Decision Number",
  },
];
