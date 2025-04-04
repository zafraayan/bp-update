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
    title: `Regulations on Residential–1 (R-1) Zone.`,
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
  {
    id: 3,
    code: "r2",
    title: `Regulations in Residential–2 (R-2) Zone.`,
    descriptions: `An area within cities or municipalities intended for medium density residential use. Per the National Building Code, R-2 Zone is characterized mainly by low-rise single- attached,  duplex, or multi-level structures   residential  buildings  for  exclusive  use  as multi- family dwellings.`,
    uses: [
      {
        id: 1,
        item: "All uses allowed in R-1 Zone",
        subItem: [],
      },
      {
        id: 2,
        item: "Apartments",
        subItem: [],
      },
      {
        id: 3,
        item: "Boardinghouses",
        subItem: [],
      },
      {
        id: 4,
        item: "Dormitories",
        subItem: [],
      },
      {
        id: 5,
        item: "Museums",
        subItem: [],
      },
      {
        id: 6,
        item: "Libraries",
        subItem: [],
      },
      {
        id: 7,
        item: "High School",
        subItem: [],
      },
      {
        id: 8,
        item: "Vocational School",
        subItem: [],
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
              "The number of allowable storeys/floors above established grade is five (5) as provided in the NBC.",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 15.00 meters above highest grade as provided in the NBC.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    code: "r3",
    title: `Regulations in Residential -3 (R-3) Zone.`,
    descriptions: `An area within cities or municipalities intended for medium to high density residential. Per the National Building Code, R3 Zone is characterized mainly by low-rise or medium- rise residential buildings for exclusive use as multi-family dwellings with mixed housing types.`,
    uses: [
      {
        id: 1,
        item: "All uses allowed in R-1 and R-2 Zones",
        subItem: [],
      },
      {
        id: 2,
        item: "Residential condominiums",
        subItem: [],
      },
      {
        id: 3,
        item: "Pension houses",
        subItem: [],
      },
      {
        id: 4,
        item: "Hotel apartments or apartels",
        subItem: [],
      },
      {
        id: 5,
        item: "Hotels",
        subItem: [],
      },
      {
        id: 6,
        item: "Parking buildings (aboveground/ underground)",
        subItem: [],
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
              "The number of allowable storeys/floors above established grade is twelve (12) as provided in the NBC.",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 36.00 meters above highest grade as provided in the NBC.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    code: "pa",
    title: `Production Agricultural Sub-Zone.`,
    descriptions: `These are areas that are outside of NPAAAD and declared by the City for agricultural use.`,
    uses: [
      {
        id: 1,
        item: "Cultivation, raising and growing of staple crops such as rice, corn, camote, cassava, and the like",
        subItem: [],
      },
      {
        id: 2,
        item: "Growing of diversified plants and trees, such as fruit and flower bearing trees, coffee, tobacco, etc.",
        subItem: [],
      },
      {
        id: 3,
        item: "Silviculture, mushroom culture, and the like",
        subItem: [],
      },
      {
        id: 4,
        item: "Pastoral activities such as goat raising and cattle fattening",
        subItem: [],
      },
      {
        id: 5,
        item: "Fishpond activities",
        subItem: [],
      },
      {
        id: 6,
        item: "Poultry and piggery subject to the HLURB Rules and Regulation Governing the Processing of Applications for Locational Clearance of Poultry and Piggery",
        subItem: [],
      },
      {
        id: 7,
        item: "Rice/corn mill (single pass such as cono mill)",
        subItem: [],
      },
      {
        id: 8,
        item: "Rice/corn warehouses and solar dryers",
        subItem: [],
      },
      {
        id: 9,
        item: "Agricultural research and experimentation facilities such as breeding stations, fish farms, nurseries, demonstration farms, etc.",
        subItem: [],
      },
      {
        id: 10,
        item: "Plant nursery",
        subItem: [],
      },
      {
        id: 11,
        item: "Single-detached dwelling units of landowners",
        subItem: [],
      },
      {
        id: 12,
        item: "Customary support facilities such as palay dryers, rice threshers, and storage barns and warehouses",
        subItem: [],
      },
      {
        id: 13,
        item: "Ancillary dwelling units/farmhouses for tillers and laborers",
        subItem: [],
      },
      {
        id: 14,
        item: "Engaging home business such as dressmaking, tailoring, baking, running a sari- sari store, and the like provided that:",
        subItem: [],
      },
      {
        id: 15,
        item: "The number of persons engaged in such business/industry shall not exceed five, inclusive of owner;",
        subItem: [
          {
            id: 1,
            item: "There shall be no change in the outside appearance of the building premises",
            subuses: [],
          },
          {
            id: 2,
            item: "That in no case shall more than 20% of the building be used for said home occupation",
            subuses: [],
          },
          {
            id: 3,
            item: "No home occupation shall be conducted in any customary accessory uses cited above",
            subuses: [],
          },
          {
            id: 4,
            item: "No traffic shall be generated by such home occupation in greater volume than would normally be expected in a residential neighborhood and any need for parking generated by the conduct of such home occupation shall be met off the street and in a place other than the required front yard",
            subuses: [],
          },
          {
            id: 5,
            item: "No equipment or process shall be used in such home occupation which creates noise, vibration, glare, fumes, odors and electrical interference detectable to the normal senses and visual or audible interference in any radio or television receiver or causes fluctuations in line voltage off the premises",
            subuses: [],
          },
          {
            id: 6,
            item: "Home Industry Classified as cottage industry provided that:",
            subuses: [
              {
                id: 1,
                title:
                  "Such home industry shall not occupy more than thirty percent of the floor area of the dwelling unit",
              },
              {
                id: 2,
                title:
                  "There shall be no change or alteration in the outside appearance of the dwelling unit and shall not be a hazard or nuisance",
              },
              {
                id: 3,
                title:
                  "Such shall consider the provisions pertaining to customary accessory uses, traffic and equipment as enumerated under Home Occupation of this section",
              },
            ],
          },
        ],
      },
      {
        id: 16,
        item: "Class A slaughterhouse/abattoir",
        subItem: [],
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
              "The Building Height Limit is 15.00 meters above established grade as provided in the NBC",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    code: "nspsz",
    title: `NIPAS: Strict Protection Sub-Zone.`,
    descriptions: `Per the NIPAS Act, this is an area that have “…high bio-diversity value which shall be closed to all human activity except for scientific studies and/ or ceremonial or religious use by indigenous communities.”`,
    uses: [
      {
        id: 1,
        item: "Allowable uses/activities shall be in accordance with the Protected Area Management Plan (PAMP) as approved by the Protected Area Management Board (PAMB). These may include:",
        subItem: [
          {
            id: 1,
            item: "Scientific studies",
            subuses: [],
          },
          {
            id: 2,
            item: "Ceremonial or religious use by indigenous communities",
            subuses: [],
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
            regulations: "No permanent buildings or structures are allowed",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    code: "siz",
    title: `Regulations in Special Institutional Zone.`,
    descriptions: `An area within the City intended principally for particular types of institutional establishments e.g. welfare homes, orphanages, home for the aged, rehabilitation and training centers, military camps/reservation/bases/training grounds, etc.`,
    uses: [
      {
        id: 1,
        item: "Welfare home, orphanages, boys and girls town, nursing homes, homes for the aged, and the like",
        subItem: [],
      },
      {
        id: 2,
        item: "Rehabilitation and vocational training centers for ex-convicts, drug addicts, unwed mothers, physically, mentally and emotionally handicapped, ex-sanitaria inmates, and similar establishments",
        subItem: [],
      },
      {
        id: 3,
        item: "Military camps/reservations/bases and training grounds",
        subItem: [],
      },
      {
        id: 4,
        item: "Jails, prisons, reformatories, and correctional institution",
        subItem: [],
      },
      {
        id: 5,
        item: "Penitentiaries and correctional institutions",
        subItem: [],
      },
      {
        id: 6,
        item: "Leprosaria",
        subItem: [],
      },
      {
        id: 7,
        item: "Psychiatric facilities, such as mental hospitals, mental sanitaria/asylums",
        subItem: [],
      },
      {
        id: 8,
        item: "Parks, playgrounds, pocket parks, parkways, promenades, and playlots",
        subItem: [],
      },
      {
        id: 9,
        item: "Customary accessory uses incidental to any of the above uses such as:",
        subItem: [
          {
            id: 1,
            item: "Staff houses/quarters",
            subuses: [],
          },
          {
            id: 2,
            item: "Offices",
            subuses: [],
          },
          {
            id: 3,
            item: "Eateries/canteens",
            subuses: [],
          },
          {
            id: 4,
            item: "Parking lots/garage facilities",
            subuses: [],
          },
          {
            id: 5,
            item: "Storerooms and warehouses but only as may be necessary for the efficient conduct of the business",
            subuses: [],
          },
          {
            id: 6,
            item: "Pump houses",
            subuses: [],
          },
          {
            id: 7,
            item: "Generator houses",
            subuses: [],
          },
        ],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Density and Bulk Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Per the relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The Building Height Limit is 15 meters above highest grade as provided in the NBC.",
          },
          {
            id: 3,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    code: "frs",
    title: `Regulations in Forest Reserve Sub-Zone.`,
    descriptions: `Per the Revised Forestry Code, these are “lands of the public domain which have been the subject of the present system of classification and determined to be needed for forest purposes. Also called Permanent Forest”.`,
    uses: [
      {
        id: 1,
        item: "Reforestation",
        subItem: [],
      },
      {
        id: 2,
        item: "Religious ceremonies of Indigenous Peoples (IPs)",
        subItem: [],
      },
      {
        id: 3,
        item: "Burial sites of IPs",
        subItem: [],
      },
      {
        id: 4,
        item: "Scientific studies that do not involve gathering of species or any alteration in the area",
        subItem: [],
      },
      {
        id: 5,
        item: "Other activities permitted in the Forest Land Use Plan (FLUP)",
        subItem: [],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Regulations",
        regulations: [
          {
            id: 1,
            regulations: "No permanent buildings or structures are allowed",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    code: "htz",
    title: `Regulations in Heritage Overlay Zone (HTG-OZ).`,
    descriptions: `The HTG-OZ is applied in areas with historic centers/heritage zones, including heritage houses. The objectives are: (1) to preserve existing historic structures/sites; and (2) to harmonize the design and construction of new ones with the design of these historic structures/sites.
`,
    uses: [
      {
        id: 1,
        item: "Uses allowed under Rule II. Land Use Policies and Regulations of the Guidelines, Policies and Standards for the Conservation and Development of Historic Centers/ Heritage Zones by the National Historical Commission of the Philippines (NHCP) shall apply to sites that the NHCP or National Museum (NM) has declared Historic Centers or Heritage Zones, by virtue of RA 10066 (Heritage Act).",
        subItem: [],
      },
      {
        id: 2,
        item: "For declared heritage houses, allowable uses shall be limited to:",
        subItem: [
          {
            id: 1,
            item: "Single-detached residential",
            subuses: [],
          },
          {
            id: 2,
            item: "Museum",
            subuses: [],
          },
          {
            id: 3,
            item: "Shops, offices, restaurants, craftsmen’s workshops and retail outlets (only at the ground floor)",
            subuses: [],
          },
          {
            id: 4,
            item: "For new construction, allowable uses shall be as provided in the base R-1 Zones.",
            subuses: [],
          },
        ],
      },
    ],
    extrainformation: [
      {
        id: 1,
        title:
          "The following regulations supersede those provided in the base R-1 zone:",
        regulations: [],
      },
      {
        id: 2,
        title: "For declared heritage houses:",
        regulations: [
          {
            id: 1,
            regulations:
              "The height and floor area of the existing building shall not be altered.",
          },
        ],
      },
      {
        id: 3,
        title: "For new construction:",
        regulations: [
          {
            id: 1,
            regulations:
              "BHL: Building height limit for buildings within the buffer zone shall not be more than the roof apex of the declared heritage structure (Guidelines, Policies and Standards for the Conservation and Development of Historic Centers/Heritage Zones, NHCP 2012).",
          },
        ],
      },
      {
        id: 4,
        title: "Building/Structure Design Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Rule III. Building Requirements of the Guidelines, Policies and Standards for the Conservation and Development of Historic Centers/Heritage Zones by the National Historical Commission of the Philippines (NHCP) shall apply to sites that the NHCP or National Museum (NM) has declared Historic Centers or Heritage Zones, by virtue of RA 10066 (Heritage Act).",
            subregulations: [],
          },
          {
            id: 2,
            regulations: "For declared heritage houses:",
            subregulations: [
              {
                id: 1,
                title:
                  "Repair and renovation work, to include building and landscape, shall ensure that the original architectural design at the interior and exterior are maintained.",
              },
              {
                id: 2,
                title:
                  "The size and appearance of business and other signs shall be made to blend with the period design of the house.",
              },
            ],
          },
          {
            id: 3,
            regulations: "For new construction:",
            subregulations: [
              {
                id: 1,
                title:
                  "Designs, to include building and landscape, shall be made similar to the period designs of the declared houses of ancestry",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    code: "etz",
    title: `Regulations in Eco-Tourism Zone.`,
    descriptions: `Data Not Available`,
    uses: [],
    extrainformation: [],
  },
  {
    id: 11,
    code: "c1",
    title: `Regulations in Commercial – 1 (C-1) Zone.`,
    descriptions: `A low-density commercial area within the City intended for neighborhood or community scale trade, service and business activities.`,
    uses: [
      {
        id: 1,
        item: "Retail stores and shops like:",
        subItem: [
          {
            id: 1,
            item: "Pump houses",
            subuses: [],
          },
          {
            id: 2,
            item: "Generator houses",
            subuses: [],
          },
          {
            id: 3,
            item: "Department stores",
            subuses: [],
          },
          {
            id: 4,
            item: "Bookstores and office supply shops",
            subuses: [],
          },
          {
            id: 5,
            item: "Art supplies and novelties",
            subuses: [],
          },
          {
            id: 6,
            item: "Home appliance stores",
            subuses: [],
          },
          {
            id: 7,
            item: "Car display and dealer stores",
            subuses: [],
          },
          {
            id: 8,
            item: "Photo shops",
            subuses: [],
          },
          {
            id: 9,
            item: "Flower shops",
            subuses: [],
          },
          {
            id: 10,
            item: "Curio or antique shops",
            subuses: [],
          },
          {
            id: 11,
            item: "Pet shops and aquarium stores",
            subuses: [],
          },
          {
            id: 12,
            item: "Jewellery shops",
            subuses: [],
          },
          {
            id: 13,
            item: "Consumer electronics such as cellular phones, cameras, laptops, home appliances and the like",
            subuses: [],
          },
          {
            id: 14,
            item: "Drugstores",
            subuses: [],
          },
        ],
      },
      {
        id: 2,
        item: "Food market and shops like:",
        subItem: [
          {
            id: 1,
            item: "Bakery, cake, pastry and delicatessen shops",
            subuses: [],
          },
          {
            id: 2,
            item: "Liquor and wine stores",
            subuses: [],
          },
          {
            id: 3,
            item: "Groceries",
            subuses: [],
          },
          {
            id: 4,
            item: "Supermarkets",
            subuses: [],
          },
          {
            id: 5,
            item: "Convenience stores",
            subuses: [],
          },
        ],
      },
      {
        id: 3,
        item: "Product showroom/display store",
        subItem: [
          {
            id: 1,
            item: "Warehouse/storage facility for non-pollutive/non-hazardous finished products",
            subuses: [],
          },
          {
            id: 2,
            item: "Personal service shops like:",
            subuses: [],
          },
          {
            id: 3,
            item: "Medical, dental, and similar clinics",
            subuses: [],
          },
          {
            id: 4,
            item: "Beauty parlor",
            subuses: [],
          },
          {
            id: 5,
            item: "Barber shop",
            subuses: [],
          },
          {
            id: 6,
            item: "Barber Wellness facilities such as sauna, spa, massage and facial clinics",
            subuses: [],
          },
          {
            id: 7,
            item: "Dressmaking and tailoring shop",
            subuses: [],
          },
        ],
      },
      {
        id: 4,
        item: "Bayad centers",
        subItem: [],
      },
      {
        id: 5,
        item: "Laundries",
        subItem: [],
      },
      {
        id: 6,
        item: "Internet café and cyber stations",
        subItem: [],
      },
      {
        id: 7,
        item: "Photo/video, lights & sounds services",
        subItem: [],
      },
      {
        id: 8,
        item: "Catering services",
        subItem: [],
      },
      {
        id: 9,
        item: "Event planners",
        subItem: [],
      },
      {
        id: 10,
        item: "Water stations",
        subItem: [],
      },
      {
        id: 11,
        item: "Courier services",
        subItem: [],
      },
      {
        id: 12,
        item: "Security agencies",
        subItem: [],
      },
      {
        id: 13,
        item: "Janitorial services",
        subItem: [],
      },
      {
        id: 14,
        item: "Travel agencies",
        subItem: [],
      },
      {
        id: 15,
        item: "Photo and portrait studios",
        subItem: [],
      },
      {
        id: 16,
        item: "Repair shops like:",
        subItem: [
          {
            id: 1,
            item: "House furniture and appliances repair shops",
            subuses: [],
          },
          {
            id: 2,
            item: "Motor vehicles and accessory repair shops",
            subuses: [],
          },
          {
            id: 3,
            item: "Battery shops and repair shops",
            subuses: [],
          },
          {
            id: 4,
            item: "Bicycle repair shops",
            subuses: [],
          },
          {
            id: 5,
            item: "Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",
            subuses: [],
          },
        ],
      },
      {
        id: 17,
        item: "Recreational centers/establishments like",
        subItem: [
          {
            id: 1,
            item: "Play courts e.g. tennis court, bowling lane, billiard halls",
            subuses: [],
          },
          {
            id: 2,
            item: "Swimming pool",
            subuses: [],
          },
          {
            id: 3,
            item: "Gymnasium",
            subuses: [],
          },
        ],
      },
      {
        id: 18,
        item: "Restaurants and other eateries",
        subItem: [],
      },
      {
        id: 19,
        item: "Lotto terminals, off-fronton, on-line bingo outlets and off-track betting stations",
        subItem: [],
      },
      {
        id: 20,
        item: "Parks, playgrounds, pocket parks, parkways, promenades and play lots",
        subItem: [],
      },
      {
        id: 21,
        item: "Plant nurseries",
        subItem: [],
      },
      {
        id: 22,
        item: "Vocational/technical school",
        subItem: [],
      },
      {
        id: 23,
        item: "Special Education (SPED) school",
        subItem: [],
      },
      {
        id: 24,
        item: "Short term special education like:",
        subItem: [
          {
            id: 1,
            item: "Dance schools",
            subuses: [],
          },
          {
            id: 2,
            item: "Schools for self-defence",
            subuses: [],
          },
          {
            id: 3,
            item: "Driving school",
            subuses: [],
          },
          {
            id: 4,
            item: "Speech clinics",
            subuses: [],
          },
          {
            id: 5,
            item: "Tutorial centers",
            subuses: [],
          },
        ],
      },
      {
        id: 25,
        item: "Embassies/consulates",
        subItem: [],
      },
      {
        id: 26,
        item: "Libraries/museums",
        subItem: [],
      },
      {
        id: 27,
        item: "Financial institutions/services like:",
        subItem: [
          {
            id: 1,
            item: "Banks",
            subuses: [],
          },
          {
            id: 2,
            item: "Stand-alone automated teller machines",
            subuses: [],
          },
          {
            id: 3,
            item: "Insurance",
            subuses: [],
          },
          {
            id: 4,
            item: "Foreign exchange",
            subuses: [],
          },
          {
            id: 5,
            item: "Money lending",
            subuses: [],
          },
          {
            id: 6,
            item: "Pawnshops",
            subuses: [],
          },
        ],
      },
      {
        id: 28,
        item: "Offices",
        subItem: [],
      },
      {
        id: 29,
        item: "Parking lots/garage facilities",
        subItem: [],
      },
      {
        id: 30,
        item: "Parking buildings (aboveground/underground)",
        subItem: [],
      },
      {
        id: 31,
        item: "Auto repair, tire, vulcanizing shops and car wash",
        subItem: [],
      },
      {
        id: 32,
        item: "Gasoline filling stations/services stations",
        subItem: [],
      },
      {
        id: 33,
        item: "Engraving, photo developing and printing shops",
        subItem: [],
      },
      {
        id: 34,
        item: "Printing, publication, and graphics shops",
        subItem: [],
      },
      {
        id: 35,
        item: "Manufacture of insignia, badges, and similar emblems except metal",
        subItem: [],
      },
      {
        id: 36,
        item: "Construction supply stores/depots",
        subItem: [],
      },
      {
        id: 37,
        item: "Funeral parlors (Category II and III)",
        subItem: [],
      },
      {
        id: 38,
        item: "Commercial housing like:",
        subItem: [
          {
            id: 1,
            item: "Hotel",
            subuses: [],
          },
          {
            id: 2,
            item: "Apartment",
            subuses: [],
          },
          {
            id: 3,
            item: "Apartel",
            subuses: [],
          },
          {
            id: 4,
            item: "Boarding house",
            subuses: [],
          },
          {
            id: 5,
            item: "Dormitory",
            subuses: [],
          },
          {
            id: 6,
            item: "Pension house",
            subuses: [],
          },
        ],
      },
      {
        id: 39,
        item: "All uses allowed R-1 Zones",
        subItem: [],
      },
      {
        id: 40,
        item: "Customary accessory uses incidental to any of the above uses such as:",
        subItem: [
          {
            id: 1,
            item: "Staff houses/quarters",
            subuses: [],
          },
          {
            id: 2,
            item: "Parking lots/Building garage",
            subuses: [],
          },
          {
            id: 3,
            item: "Storerooms and warehouses but only as may be necessary for the efficient conduct of the business",
            subuses: [],
          },
          {
            id: 4,
            item: "Pump houses",
            subuses: [],
          },
          {
            id: 5,
            item: "Generator houses",
            subuses: [],
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
              "The number of allowable storeys/floors above established grade is five (5) as provided in the NBC.",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 15.00 meters above highest grade as provided in the NBC.",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    code: "c2",
    title: `Regulations in Commercial – 2 (C-2) Zone.`,
    descriptions: `A medium to high density commercial area within the City intended for trade, service and business activities performing complementary/ supplementary functions to the CBD.
`,
    uses: [
      {
        id: 1,
        item: "All uses allowed in C-1 Zone",
        subItem: [],
      },
      {
        id: 2,
        item: "Wholesale stores",
        subItem: [],
      },
      {
        id: 3,
        item: "Wet and dry markets",
        subItem: [],
      },
      {
        id: 4,
        item: "Shopping centers, malls and supermarkets",
        subItem: [],
      },
      {
        id: 5,
        item: "Recreational center/establishments like",
        subItem: [],
      },
      {
        id: 6,
        item: "Bars, sing-along lounges, bistros, pubs, beer gardens, disco, and dance halls",
        subItem: [],
      },
      {
        id: 7,
        item: "Exhibit halls",
        subItem: [],
      },
      {
        id: 8,
        item: "Convention centers and related facilities",
        subItem: [],
      },
      {
        id: 9,
        item: "Business Process Outsourcing services",
        subItem: [],
      },
      {
        id: 10,
        item: "Radio and television stations",
        subItem: [],
      },
      {
        id: 11,
        item: `Transportation terminals/garage, "With repair" or "Without repair`,
        subItem: [],
      },
      {
        id: 12,
        item: "Display for cars, tractors, etc.",
        subItem: [],
      },
      {
        id: 13,
        item: "Motorpool",
        subItem: [],
      },
      {
        id: 14,
        item: `Hauling services and garage terminals Trucks", "Tow trucks", "Buses"`,
        subItem: [],
      },
      {
        id: 15,
        item: `Auto sales and rentals,"Automotive handicraft","Accessory and spare parts shops", "Marine craft sales yards", "Aircraft sales yards",`,
        subItem: [],
      },
      {
        id: 16,
        item: "Boat storage",
        subItem: [],
      },
      {
        id: 17,
        item: "Vehicle emission testing center",
        subItem: [],
      },
      {
        id: 18,
        item: "Machinery display shop/center",
        subItem: [],
      },
      {
        id: 19,
        item: "Welding shops",
        subItem: [],
      },
      {
        id: 20,
        item: `Machine shop service operation, Repairing/rebuilding", "Custom job orders`,
        subItem: [],
      },
      {
        id: 21,
        item: "Welding shop",
        subItem: [],
      },
      {
        id: 22,
        item: "Medium scale junk shop",
        subItem: [],
      },
      {
        id: 23,
        item: `Glassware and metalware stores, Household equipment,  Appliances`,
        subItem: [],
      },
      {
        id: 24,
        item: `Signboard and streamer painting, Silk screening`,
        subItem: [],
      },
      {
        id: 25,
        item: "Printing/typesetting, copiers, and duplicating services",
        subItem: [],
      },
      {
        id: 26,
        item: "Recording and film laboratories",
        subItem: [],
      },
      {
        id: 27,
        item: "Gravel and sand stores",
        subItem: [],
      },
      {
        id: 28,
        item: "Lumber/hardware",
        subItem: [],
      },
      {
        id: 29,
        item: "Paint stores without bulk handling",
        subItem: [],
      },
      {
        id: 30,
        item: "Gardens and landscaping supply/contractors",
        subItem: [],
      },
      {
        id: 31,
        item: "Manufacture of ice, ice blocks, cubes, tubes; crush except dry ice",
        subItem: [],
      },
      {
        id: 32,
        item: "Lechon stores",
        subItem: [],
      },
      {
        id: 33,
        item: "Chicharon factory",
        subItem: [],
      },
      {
        id: 34,
        item: "Biscuit factory—manufacture of biscuits, cookies, crackers, and other similar dried bakery products",
        subItem: [],
      },
      {
        id: 35,
        item: "Doughnut and hopia factory",
        subItem: [],
      },
      {
        id: 36,
        item: "Other bakery products not elsewhere classified (n.e.c.)",
        subItem: [],
      },
      {
        id: 37,
        item: "Shops for repacking of food products e.g. fruits, vegetables, sugar, and other related products",
        subItem: [],
      },
      {
        id: 38,
        item: "Manufacture of wood furniture including upholstered",
        subItem: [],
      },
      {
        id: 39,
        item: "Manufacture of rattan furniture including upholstered",
        subItem: [],
      },
      {
        id: 40,
        item: "Manufacture of box beds and mattresses",
        subItem: [],
      },
      {
        id: 41,
        item: "Funeral parlors (all categories)",
        subItem: [],
      },
      {
        id: 42,
        item: "Commercial condominium (with residential units in upper floors)",
        subItem: [],
      },
      {
        id: 43,
        item: "Commercial housing like:",
        subItem: [
          {
            id: 1,
            item: "Motel",
            subuses: [],
          },
          {
            id: 2,
            item: "Condotel",
            subuses: [],
          },
        ],
      },
      {
        id: 44,
        item: "All uses allowed in R-1 and R-2 Zones",
        subItem: [],
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
              "Per the relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is six (6) as provided in the NBC",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 18.00 meters above highest grade as provided in the NBC",
          },
          {
            id: 4,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    code: "c3",
    title: `Regulations in Commercial – 3 (C-3) Zone.`,
    descriptions: `A high-density commercial area within the City intended for regional shopping centers such as large malls and other commercial and business activities which are regional in scope or where market activities generate traffic and require utilities and services that extend beyond local boundaries and requires metropolitan level development planning and implementation. High rise hotels, sports stadium or sports complexes area also allowed in this zone. This zone may also be called as the Central Business District (CBD).`,
    uses: [
      {
        id: 1,
        item: "All uses allowed in C-1 and C-2 Zones",
        subItem: [],
      },
      {
        id: 2,
        item: "All uses allowed in R-3, R-4 and R-5 Zones",
        subItem: [],
      },
      {
        id: 3,
        item: "Regional shopping malls/centers",
        subItem: [],
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
              "Per relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is sixty (60) as provided in the NBC",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 180.00 meters above highest grade as provided in the NBC",
          },
          {
            id: 4,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    code: "af",
    title: `Regulations in Agro-Forestry Zone.`,
    descriptions: `No Data Available`,
    uses: [],
    extrainformation: [
      {
        id: "",
        title: "Building Regulations",
        regulations: [],
      },
    ],
  },
  {
    id: 15,
    code: "aiz",
    title: `Regulations in Agri-Industrial Zone.`,
    descriptions: `These are areas within Cities/Municipalities intended primarily for integrated farm operations and related product processing activities such as plantation for bananas, pineapple, sugar, etc.`,
    uses: [
      {
        id: 1,
        item: "All uses allowed in agriculture zone",
        subItem: [],
      },
      {
        id: 2,
        item: "Allowable uses in Industrial 1 (light) and Industrial 2 (medium industries) Zones",
        subItem: [],
      },
      {
        id: 3,
        item: "Rice/corn mills",
        subItem: [],
      },
      {
        id: 4,
        item: "Rice/corn mill warehouses & solar dryers",
        subItem: [],
      },
      {
        id: 5,
        item: "Agricultural and/or agri-industrial research & experimentation facilities",
        subItem: [],
      },
      {
        id: 6,
        item: "Drying, cleaning, curing and preserving of meat and its by-products and derivatives",
        subItem: [],
      },
      {
        id: 7,
        item: "Drying, smoking and airing of tobacco",
        subItem: [],
      },
      {
        id: 8,
        item: "Flour mill",
        subItem: [],
      },
      {
        id: 9,
        item: "Cassava flour mill",
        subItem: [],
      },
      {
        id: 10,
        item: "Manufacture of coffee",
        subItem: [],
      },
      {
        id: 11,
        item: "Manufacture of unprepared animal feeds and other grain milling",
        subItem: [],
      },
      {
        id: 12,
        item: "Production of prepared feeds for animals",
        subItem: [],
      },
      {
        id: 13,
        item: "Cigar and cigarette factory",
        subItem: [],
      },
      {
        id: 14,
        item: "Curing and re-drying tobacco leaves",
        subItem: [],
      },
      {
        id: 15,
        item: "Miscellaneous processing of tobacco leaves n.e.c.",
        subItem: [],
      },
      {
        id: 16,
        item: "Weaving hemp textile",
        subItem: [],
      },
      {
        id: 17,
        item: "Jute spinning and weaving",
        subItem: [],
      },
      {
        id: 18,
        item: "Manufacture of charcoal",
        subItem: [],
      },
      {
        id: 19,
        item: "Milk processing plants (manufacturing filled, reconstituted or recombined milk, condensed or evaporated)",
        subItem: [],
      },
      {
        id: 20,
        item: "Butter and cheese processing plants",
        subItem: [],
      },
      {
        id: 21,
        item: "Natural fluid milk processing (pasteurizing, homogenizing, vitaminizing, bottling of natural animal milk and cream related products)",
        subItem: [],
      },
      {
        id: 22,
        item: "Other dairy products n.e.c.",
        subItem: [],
      },
      {
        id: 23,
        item: "Canning and preserving of fruits and fruit juices",
        subItem: [],
      },
      {
        id: 24,
        item: "Canning and preserving of vegetables and vegetable juices",
        subItem: [],
      },
      {
        id: 25,
        item: "Canning and preserving of vegetable sauces",
        subItem: [],
      },
      {
        id: 26,
        item: "Miscellaneous canning and preserving of fruit and vegetables n.e.c.",
        subItem: [],
      },
      {
        id: 27,
        item: "Fish canning",
        subItem: [],
      },
      {
        id: 28,
        item: "Patis factory",
        subItem: [],
      },
      {
        id: 29,
        item: "Bagoong factory",
        subItem: [],
      },
      {
        id: 30,
        item: "Processing, preserving and canning of fish and other seafood n.e.c.",
        subItem: [],
      },
      {
        id: 31,
        item: "Manufacture of desiccated coconut",
        subItem: [],
      },
      {
        id: 32,
        item: "Manufacture of starch and its products",
        subItem: [],
      },
      {
        id: 33,
        item: "Manufacture of wines from fruit juices",
        subItem: [],
      },
      {
        id: 34,
        item: "Vegetable oil mills, including coconut oil",
        subItem: [],
      },
      {
        id: 35,
        item: "Muscovado sugar mill",
        subItem: [],
      },
      {
        id: 36,
        item: "Cotton textile mill",
        subItem: [],
      },
      {
        id: 37,
        item: "Manufacture/processing of other plantation crops e.g. pineapple, bananas, etc.",
        subItem: [],
      },
      {
        id: 38,
        item: "Other commercial handicrafts and industrial activities utilizing plant or animal parts and/or products as raw materials",
        subItem: [],
      },
      {
        id: 39,
        item: "Other accessory uses incidental to agri-industrial activities",
        subItem: [],
      },
      {
        id: 40,
        item: "Sugarcane milling (centrifugal and refined)",
        subItem: [],
      },
      {
        id: 41,
        item: "Sugar refining",
        subItem: [],
      },
      {
        id: 42,
        item: "Customary support facilities such as palay dryers, rice threshers and storage barns and warehouses",
        subItem: [],
      },
      {
        id: 43,
        item: "Ancillary dwelling units/farmhouses for landowners. tenants, tillers and laborers",
        subItem: [],
      },
      {
        id: 44,
        item: 'Class "A" slaughterhouse/abattoir',
        subItem: [],
      },
      {
        id: 45,
        item: 'Class "AA" slaughterhouse/abattoir',
        subItem: [],
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
              "The Building Height Limit is 15.00 meters above established grade as provided in the NBC.",
          },
        ],
      },
    ],
  },
  {
    id: 16,
    code: "mdm",
    title: `Regulations in Medium Density Mixed-Use Development Zone (MD-2).`,
    descriptions: ``,
    uses: [
      {
        id: 1,
        item: "All uses allowed in C-2 Zone",
        subItem: [],
      },
      {
        id: 2,
        item: "All uses allowed in R-1 and R-2, R3 except residential subdivisions (single-detached, attached, duplex, rowhouses)",
        subItem: [],
      },
      {
        id: 3,
        item: "Townhouses",
        subItem: [],
      },
      {
        id: 4,
        item: "Medium Rise Building/Development for Socialized Housing program",
        subItem: [],
      },
      {
        id: 5,
        item: "Learning facilities such as training centers, seminar halls, and libraries",
        subItem: [],
      },
      {
        id: 6,
        item: "Museums, exhibition halls, and art galleries",
        subItem: [],
      },
      {
        id: 7,
        item: "Civic centers and community centers",
        subItem: [],
      },
      {
        id: 8,
        item: "Places of worship, such as churches, mosques, temples, shrines, chapels",
        subItem: [],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Density and Bulk Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Per relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is twelve (12), provided, only the 1st and 2nd floor/storey is allowed for commercial use",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 36.00 meters above highest grade as provided in the NBC",
          },
          {
            id: 4,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
  {
    id: 17,
    code: "ldm1a",
    title: `Regulations in Low Density Mixed-Use Development Zone (MD-1A)`,
    descriptions: ``,
    uses: [
      {
        id: 1,
        item: "All uses allowed in C-1 Zone",
        subItem: [],
      },
      {
        id: 2,
        item: "All uses allowed in R-1 and R-2 Zones, except residential subdivisions (single-detached, attached, duplex, rowhouses)",
        subItem: [],
      },
      {
        id: 3,
        item: "Townhouses",
        subItem: [],
      },
      {
        id: 4,
        item: "Medium Rise Building/Development for Socialized Housing program",
        subItem: [],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Density and Bulk Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Per relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is five (5), provided, only the 1st storey is allowed for commercial use",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 15.00 meters above highest grade as provided in the NBC",
          },
          {
            id: 4,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    code: "ldm1b",
    title: `Regulations in Low Density Mixed-Use Development Zone (MD-1A)`,
    descriptions: ``,
    uses: [
      {
        id: 1,
        item: "All uses allowed in C-1 Zone",
        subItem: [],
      },
      {
        id: 2,
        item: "All uses allowed in R-1 and R-2 Zones, except residential subdivisions (single-detached, attached, duplex, rowhouses)",
        subItem: [],
      },
      {
        id: 3,
        item: "Townhouses",
        subItem: [],
      },
      {
        id: 4,
        item: "Medium Rise Building/Development for Socialized Housing program",
        subItem: [],
      },
      {
        id: 5,
        item: "Learning facilities such as training centers, seminar halls, and libraries",
        subItem: [],
      },
      {
        id: 6,
        item: "Museums, exhibition halls, and art galleries",
        subItem: [],
      },
      {
        id: 7,
        item: "Civic centers and community centers",
        subItem: [],
      },
      {
        id: 8,
        item: "Places of worship, such as churches, mosques, temples, shrines, chapels,",
        subItem: [],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Density and Bulk Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Per relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is seven (7), provided, only the 1st and 2nd floor/storey is allowed for commercial use",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 21.00 meters above highest grade as provided in the NBC",
          },
          {
            id: 4,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
  {
    id: 18,
    code: "hdm",
    title: `Regulations in High Density Mixed-Use Development Zone (MD-3)`,
    descriptions: ``,
    uses: [
      {
        id: 1,
        item: "All uses allowed in C-1 Zone",
        subItem: [],
      },
      {
        id: 2,
        item: "All uses allowed in R-1 and R-2, R3 except residential subdivisions (single-detached, attached, duplex, rowhouses)",
        subItem: [],
      },
      {
        id: 3,
        item: "Townhouses",
        subItem: [],
      },
      {
        id: 4,
        item: "Medium Rise Building/Development for Socialized Housing program",
        subItem: [],
      },
      {
        id: 5,
        item: "Learning facilities such as training centers, seminar halls, and libraries",
        subItem: [],
      },
      {
        id: 6,
        item: "Museums, exhibition halls, and art galleries",
        subItem: [],
      },
      {
        id: 7,
        item: "Civic centers and community centers",
        subItem: [],
      },
      {
        id: 8,
        item: "Places of worship, such as churches, mosques, temples, shrines, chapels,",
        subItem: [],
      },
    ],
    extrainformation: [
      {
        id: "",
        title: "Building Density and Bulk Regulations",
        regulations: [
          {
            id: 1,
            regulations:
              "Per relevant provisions of the NBC and this Ordinance",
          },
          {
            id: 2,
            regulations:
              "The number of allowable storeys/floors above established grade is twelve (12), provided, only the 1st and 2nd floor/storey is allowed for commercial use",
          },
          {
            id: 3,
            regulations:
              "The Building Height Limit is 36.00 meters above highest grade as provided in the NBC",
          },
          {
            id: 4,
            regulations:
              "Subject to national locational guidelines and standards of concerned agencies.",
          },
        ],
      },
    ],
  },
];
