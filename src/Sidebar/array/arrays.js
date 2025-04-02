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
import { RiAiGenerate, RiLogoutBoxFill } from "react-icons/ri";
import { AiFillSignature } from "react-icons/ai";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import GenerateCertificate from "../navComponents/zoncert-components/GenerateCertificate";

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
        id: 1,
        title: "Registration",
        icon: <AiFillSignature />,
        path: "",
        component: <Registration />,
      },
      {
        id: 2,
        title: "Records",
        icon: <MdOutlineRecordVoiceOver />,
        path: "",
        component: <BpRecords />,
      },
      {
        id: 3,
        title: "Report",
        icon: <HiDocumentReport />,
        path: "",
        component: <Reports />,
      },
      {
        id: 4,
        title: "Print / Download",
        icon: <FaPrint />,
        path: "",
        component: <PrintDownload />,
      },
      {
        id: 5,
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
    subMenu: [
      {
        id: 1,
        title: "Generate Certificate",
        icon: <RiAiGenerate />,
        path: "",
        component: <GenerateCertificate />,
      },
    ],
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
  "City",
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
  "Gasoline Station",
  "Agri Industrial",
  "Surplus Display",
  "Commercial Building",
];

export const legalBasis = [
  "City ordinance no. 64 (s. 2021)",
  "CDPC - Resolution No. 2025 - ",
];

export const inspector = [
  {
    id: 1,
    name: "MARIO P. CABIGAS",
    position: "Admin. Asst. II / Zoning Inspector Designate",
  },
  {
    id: 2,
    name: "ERWIN C. BACALSO",
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
  {
    id: 24,
    name: "remark",
    message: "Invalid Remarks",
  },
];

export const remarks = [
  {
    id: 1,
    remark: "Conforming",
  },
  {
    id: 2,
    remark: "Non-Conforming",
  },
];

export const requirements = [
  {
    id: 1,
    fields: "bbc",
    title: "Barangay Business Clearance",
    isActive: true,
  },
  {
    id: 2,
    fields: "bcr",
    title: "Barangay Council Resolution",
    isActive: true,
  },
  {
    id: 3,
    fields: "tct",
    title: "Transfer Certificate of Title",
    isActive: true,
  },
  {
    id: 4,
    fields: "tdrp",
    title: "Tax Declaration of Real Property",
    isActive: true,
  },
  {
    id: 5,
    fields: "cl",
    title: "Contract of Lease",
    isActive: true,
  },
  {
    id: 6,
    fields: "cbnr",
    title: "Certificate of Business Name Registration",
    isActive: true,
  },
  {
    id: 7,
    fields: "cis",
    title: "Certificate of Incorporation from SEC",
    isActive: true,
  },
  {
    id: 8,
    fields: "calo",
    title: "Consent and Authority from Lot Owner",
    isActive: true,
  },
  {
    id: 9,
    fields: "capha",
    title: "Consent and Authority from President of Homeowners Associations",
    isActive: true,
  },
  {
    id: 10,
    fields: "ano",
    title: "Affidavit of No-Objectives",
    isActive: true,
  },
  {
    id: 11,
    fields: "others",
    title: "Others for Example DENR Clearance & DOLE Clearance",
    isActive: true,
  },
];

export const regulations = [
  {
    id: 1,
    code: "tz",
    title: `Regulations on Tourism Zone`,
    descriptions:
      "No tourism project or tourist related activities shall be allowed in Tourism Zones unless developed or undertaken in compliance with the Department of Tourism (DOT) Guidelines and Standards.",
    uses: [
      {
        id: 1,
        item: "Agri-tourism",
        subItem: [],
      },
      {
        id: 2,
        item: "Resort areas, e.g. beach/mountain resort including accessory uses",
        subItem: [],
      },
      {
        id: 3,
        item: "Theme parks",
        subItem: [],
      },
      {
        id: 4,
        item: "Heritage and Historical Sites",
        subItem: [],
      },
      {
        id: 5,
        item: "Other related activities such as tree parks and botanical gardens",
        subItem: [],
      },
      {
        id: 6,
        item: "Tourism accommodation such as: Cottages",
        subItem: [],
      },
      {
        id: 7,
        item: "Tourism accommodation such as: Lodging Inns",
        subItem: [],
      },
      {
        id: 8,
        item: "Tourism accommodation such as: Restaurants",
        subItem: [],
      },
      {
        id: 9,
        item: "Tourism accommodation such as: Home stays",
        subItem: [],
      },
      {
        id: 10,
        item: "Souvenir shops",
        subItem: [],
      },
      {
        id: 11,
        item: "Open air or outdoor sports activities",
        subItem: [],
      },
      {
        id: 12,
        item: "Food production and processing activities such as vegetables, fruits and plantation crop and fish production to sustain tourism industry",
        subItem: [],
      },
      {
        id: 13,
        item: "Parking areas",
        subItem: [],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "",
        regulations: [],
      },
    ],
  },
  {
    id: 2,
    code: "r1",
    title: `Regulations on Residential–1 (R-1) Zone`,
    descriptions: `An area within cities or municipalities intended for low density residential use of 20 dwelling units per hectare. Per the National Building Code, R-1 Zone is characterized mainly by low-rise single-detached and duplex residential buildings for exclusive use as single (nuclear) family dwellings.`,
    uses: [
      {
        id: 1,
        item: "Single-detached dwelling units",
        subItem: [],
      },
      {
        id: 2,
        item: "Semi-detached family dwelling units, e.g. duplex",
        subItem: [],
      },
      {
        id: 3,
        item: "Upgrading/improvement/urban renewal of existing Residential subdivisions",
        subItem: [],
      },
      {
        id: 4,
        item: "New Residential Subdivisions and Medium-Rise Buildings for Socialized Housing program",
        subItem: [],
      },
      {
        id: 5,
        item: "Home occupation for the practice of one’s profession such as offices of physicians, surgeons, dentists, architects, engineers, lawyers, and other professionals or for engaging home business such as dressmaking, tailoring, baking, running a sari-sari store and the like, provided that:",
        subItem: [
          {
            id: 1,
            item: "The number of persons engaged in such business/industry shall not exceed five (5), inclusive of owner",
          },
          {
            id: 2,
            item: "There shall be no change in the outside appearance of the building premises",
          },
          {
            id: 3,
            item: "That in no case shall more than 20% of the building be used for said home occupation",
          },
          {
            id: 4,
            item: "No home occupation shall be conducted in any customary accessory uses cited above",
          },
          {
            id: 5,
            item: "No traffic shall be generated by such home occupation in greater volume than would normally be expected in a residential neighborhood and any need for parking generated by the conduct of such home occupation shall be met off the street and in a place other than the required front yard",
          },
          {
            id: 6,
            item: "No equipment or process shall be used in such home occupation which creates noise, vibration, glare, fumes, odors and electrical interference detectable to the normal senses and visual or audible interference in any radio or television receiver or causes fluctuations in line voltage off the premises.",
          },
        ],
      },
      {
        id: 6,
        item: "Home Industry classified as cottage industry, provided that:",
        subItem: [
          {
            id: 1,
            item: "Such home industry shall not occupy more than thirty percent (30%) of the floor area of the dwelling unit. There shall be no change or alteration in the outside appearance of the dwelling unit and shall not be a hazard or nuisance.",
          },
          {
            id: 2,
            item: "It shall be classified as non-pollutive/non-hazardous as provided in this integrated ZO.",
          },
          {
            id: 3,
            item: "Allotted capitalization shall not exceed the capitalization as set by the DTI.",
          },
          {
            id: 4,
            item: "Such shall consider the provisions pertaining to customary accessory uses, traffic and equipment/process under Home Occupation of this section.",
          },
        ],
      },
      {
        id: 7,
        item: "Recreational facilities for the exclusive use of the members of the family residing within the premises, such as:",
        subItem: [
          {
            id: 1,
            item: "Swimming pool",
          },
          {
            id: 2,
            item: "Tennis courts",
          },
          {
            id: 3,
            item: "Basketball courts",
          },
        ],
      },
      {
        id: 8,
        item: "Parks and Open Spaces",
        subItem: [],
      },
      {
        id: 9,
        item: "Nursery/Elementary School",
        subItem: [],
      },
      {
        id: 10,
        item: "Tutorial services",
        subItem: [],
      },
      {
        id: 11,
        item: "Sports club",
        subItem: [],
      },
      {
        id: 12,
        item: "Religious use",
        subItem: [],
      },
      {
        id: 13,
        item: "Multi-purpose/Barangay hall",
        subItem: [],
      },
      {
        id: 14,
        item: "Clinic, nursing and convalescing home, health center",
        subItem: [],
      },
      {
        id: 15,
        item: "Plant nursery",
        subItem: [],
      },
      {
        id: 16,
        item: "Customary accessory uses incidental to any of the principal uses provided that such accessory uses shall not include any activity conducted for monetary gain or commercial purposes such as",
        subItem: [
          {
            id: 1,
            item: "Servants quarters",
          },
          {
            id: 2,
            item: "Private garage",
          },
          {
            id: 3,
            item: "Guardhouse",
          },
          {
            id: 4,
            item: "Laundries",
          },
          {
            id: 5,
            item: "Non-commercial garages",
          },
          {
            id: 6,
            item: "Houses for pets such as dogs, birds, rabbits and the like of not more than 4.00 sq. m. in floor area",
          },
          {
            id: 7,
            item: "Pump houses",
          },
          {
            id: 8,
            item: "Generator houses",
          },
        ],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Per the relevant provisions of the NBC, PD 957 and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is three (3) as provided in the NBC",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 10.00 meters above highest grade as provided in the NBC",
          },
        ],
      },
    ],
  },
];
