import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { useState } from "react";
import { BiSolidSave } from "react-icons/bi";
import { Link, useLocation } from "react-router";
import styled from "styled-components";
import { zoncertstyles } from "../../Sidebar/navComponents/zoncert-components/zoncertstyle";
import Header from "../print-components/Header";
import { formatNumber } from "../../helpers/formatNumber";
import { regulations } from "../../Sidebar/array/arrays";
// import bullet from "../../../images/bullet.png"
import bullet from "../../images/bullet.png";
import subbullet from "../../images/subbullet.png";
import formatOrdinal from "../../helpers/ordinalNumbers";
import { monthNames } from "../../helpers/formatDate";
import { useSelector } from "react-redux";
import LocationalClearance from "../print-components/LocationalClearance";
import { styles } from "../style";
import EvaluationReport from "../print-components/EvaluationReport";

const Submitted = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 25%;
  border-radius: 20px;
  background-color: white;
  color: green;
  margin: 0;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  place-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  div {
    width: 100%;
    text-align: center;
  }
`;

const Icon = styled.span`
  /* width: 120px;
  height: 120px; */
  color: green;
`;

const Download = styled.div`
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;

  &:hover {
    background-color: gray;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    text-decoration: none !important;
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

function ApplicantPrint() {
  // const { state } = useLocation();
  const data = useSelector((state) => state.business.toPrint);
  // const { fName } = state?.toPrint;
  // console.log(Object.values(state));

  return (
    <>
      {!data ? (
        "No Record Found"
      ) : (
        <PDFViewer style={styles.size}>
          <Document>
            <Page size="Folio" style={zoncertstyles.page}>
              <View style={zoncertstyles.contentWrapper}>
                <View>
                  <Header />
                  <Text style={zoncertstyles.h1}>ZONING CERTIFICATION</Text>
                  <Text style={zoncertstyles.paragraph}>
                    {`THIS IS TO CERTIFY that a parcel of land located in Barangay `}
                    <Text style={zoncertstyles.cellHeadingTop}>
                      {data.barangay}
                    </Text>
                    {`, City of Talisay, Cebu, covering a total area of `}
                    <Text style={zoncertstyles.cellHeadingTop}>
                      {data.area}
                    </Text>
                    {` square meters specifically described as follows:`}
                  </Text>
                  <View style={zoncertstyles.row}>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellHeading}>
                        Registered Owner
                      </Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellHeading}>Lot Number</Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellHeading}>TCT Number</Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellHeading}>
                        Area (in hectares)
                      </Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellHeading}>
                        Zoning Classificaiton as per Zoning Ordinance No. 64 (s.
                        2021)
                      </Text>
                    </View>
                  </View>
                  <View style={zoncertstyles.row}>
                    <View style={zoncertstyles.cell}>
                      <Text
                        style={zoncertstyles.cellContent}
                      >{`${data.fName} ${data.mName} ${data.lName}`}</Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellContent}>
                        {data.lotNumber}
                      </Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellContent}>
                        {data.tctNumber}
                      </Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellContent}>
                        {data.areaHectares}
                      </Text>
                    </View>
                    <View style={zoncertstyles.cell}>
                      <Text style={zoncertstyles.cellContent}>
                        {data.zoningClassification}
                      </Text>
                    </View>
                  </View>

                  <Text style={zoncertstyles.paragraph}>
                    Which is the subject of application for Zoning Certification
                    based on the duly certified vicinity map submitted by the
                    applicant is zoned for use specified in the above table per
                    approved Ordinance 2021-05 otherwise known as the
                    Comprehensive Land Use of the City of Talisay, Cebu and
                    approved by the Sangguniang Panlalawigan on April 04, 2023
                    throught the resolution no. 140-2003 in accordance with
                    pertinent issuances as amended by City Zoning Ordinance No.
                    64 (s.2021).
                  </Text>

                  {regulations.map(
                    (el) =>
                      el.code === data.zoningCode && (
                        <View>
                          <Text style={zoncertstyles.regtitle}>{el.title}</Text>
                          <Text style={zoncertstyles.paragraph}>
                            {el.descriptions}
                          </Text>
                          <Text style={zoncertstyles.regtitle}>
                            Allowable Uses
                          </Text>
                          <ul>
                            {el.uses.map((el) => (
                              <>
                                <li>
                                  <View
                                    wrap={false}
                                    style={zoncertstyles.rowList}
                                  >
                                    <Image
                                      style={zoncertstyles.bullet}
                                      src={bullet}
                                    ></Image>
                                    <Text style={zoncertstyles.list}>
                                      {el.item}
                                    </Text>
                                  </View>
                                  <ul>
                                    {el.subItem.map((el) => (
                                      <li>
                                        <View
                                          wrap={false}
                                          style={zoncertstyles.rowSubList}
                                        >
                                          <Image
                                            style={zoncertstyles.bullet}
                                            src={subbullet}
                                          ></Image>
                                          <Text style={zoncertstyles.subList}>
                                            {el.item}
                                          </Text>
                                        </View>
                                        <ul>
                                          {el.subuses?.map((el) => (
                                            <li>
                                              <View
                                                wrap={false}
                                                style={
                                                  zoncertstyles.rowSubsubList
                                                }
                                              >
                                                <Image
                                                  style={zoncertstyles.bullet}
                                                  src={subbullet}
                                                ></Image>
                                                <Text
                                                  style={zoncertstyles.subList}
                                                >
                                                  {el.title}
                                                </Text>
                                              </View>
                                            </li>
                                          ))}
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              </>
                            ))}
                          </ul>

                          {el.extrainformation.map((el) => (
                            <>
                              <Text style={zoncertstyles.extrainfo}>
                                {el.title}
                              </Text>
                              {el.regulations.map((el) => (
                                <View style={zoncertstyles.rowList}>
                                  <Image
                                    style={zoncertstyles.bullet}
                                    src={bullet}
                                  ></Image>
                                  <Text style={zoncertstyles.list}>
                                    {el.regulations}
                                  </Text>
                                </View>
                              ))}
                              {el.regulations.map((el) => (
                                <Text>{el.title}</Text>
                              ))}
                            </>
                          ))}
                        </View>
                      )
                  )}
                </View>

                {/* turn off the wrap if the page breaks*/}
                <View wrap={false} style={zoncertstyles.conditionItem}>
                  <Text
                    style={[
                      zoncertstyles.conditions,
                      zoncertstyles.conditiontitle,
                    ]}
                  >
                    Conditions:
                  </Text>
                  <Text style={zoncertstyles.conditions}>
                    1. This certification shall not be considered as a
                    locational clearance / certificate of zoning conformance or
                    development permit.
                  </Text>
                  <Text style={zoncertstyles.conditions}>
                    2. This certification shall not be considered as a
                    certification by CPDC as to the ownership by the applicant
                    of the parcel of land subject to this certfication.
                  </Text>
                  <Text style={zoncertstyles.conditions}>
                    3. Any misrepresentation or material falsehood on the part
                    of the applicant shall be sufficient cause for the
                    cancellation of this certification.
                  </Text>
                  <Text style={zoncertstyles.conditions}>
                    {`Issued this `}
                    <Text style={zoncertstyles.cellHeadingTop}>
                      {`${formatOrdinal(new Date().getDate())}`}
                    </Text>
                    <Text> day of </Text>
                    <Text style={zoncertstyles.cellHeadingTop}>
                      {`${
                        monthNames[new Date().getMonth()]
                      } ${new Date().getFullYear()}`}
                    </Text>
                    {`, at City of  Talisay, Cebu.`}
                  </Text>
                </View>
                <View style={zoncertstyles.condwrapper}>
                  <View wrap={false} style={zoncertstyles.conditions}>
                    <Text style={zoncertstyles.label}>Prepared:</Text>
                    <Text style={zoncertstyles.signatory}>
                      AR. JASPER B. LARIDA
                    </Text>
                    <Text>Project Evaluation Officer 2</Text>
                  </View>
                  <View wrap={false} style={zoncertstyles.conditions}>
                    <Text style={zoncertstyles.label}>Verified:</Text>
                    <Text style={zoncertstyles.signatory}>
                      MR. MARIO DANDI P. CAPISTRANO
                    </Text>
                    <Text>Zoning Officer 2</Text>
                  </View>
                  <View wrap={false} style={zoncertstyles.christine}>
                    <Text style={zoncertstyles.label}>Approved:</Text>
                    <Text style={zoncertstyles.signatory}>
                      CHRISTINE D. HOMEZ, CE, GE, EnP M.Eng'g
                    </Text>
                    <Text>CPDC / Zoning Administrator</Text>
                  </View>
                  <View wrap={false} style={zoncertstyles.conditions}>
                    <Text>OR #: {data.orNumber}</Text>
                    <Text>Date: {data.orDate}</Text>
                    <Text>Amount: {data.amountPaid}</Text>
                  </View>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      )}
    </>
  );
}

export default ApplicantPrint;

// const [code, setCode] = useState("etz");

// export const MyDocument = ({ state }) => (
//   <Document>
//     <Page size="Folio" style={zoncertstyles.page}>
//       {Object.values(state).map((print) => (
//         <View style={zoncertstyles.contentWrapper}>
//           <View>
//             <Header />
//             <Text style={zoncertstyles.h1}>ZONING CERTIFICATION</Text>
//             <Text style={zoncertstyles.paragraph}>
//               {`THIS IS TO CERTIFY that a parcel of land located in Barangay `}
//               <Text style={zoncertstyles.cellHeadingTop}>
//                 {data.barangay}
//               </Text>
//               {`, City of Talisay, Cebu, covering a total area of `}
//               <Text style={zoncertstyles.cellHeadingTop}>
//                 {formatNumber(data.area)}
//               </Text>
//               {` square meters specifically described as follows:`}
//             </Text>
//             <View style={zoncertstyles.row}>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellHeading}>Registered Owner</Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellHeading}>Lot Number</Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellHeading}>TCT Number</Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellHeading}>
//                   Area (in hectares)
//                 </Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellHeading}>
//                   Zoning Classificaiton as per Zoning Ordinance No. 64 (s. 2021)
//                 </Text>
//               </View>
//             </View>
//             <View style={zoncertstyles.row}>
//               <View style={zoncertstyles.cell}>
//                 <Text
//                   style={zoncertstyles.cellContent}
//                 >{`${data.fName} ${data.mName} ${data.lName}`}</Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellContent}>
//                   {data.lotNumber}
//                 </Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellContent}>
//                   {data.tctNumber}
//                 </Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellContent}>
//                   {data.areaHectares}
//                 </Text>
//               </View>
//               <View style={zoncertstyles.cell}>
//                 <Text style={zoncertstyles.cellContent}>
//                   {data.zoningClassification}
//                 </Text>
//               </View>
//             </View>

//             <Text style={zoncertstyles.paragraph}>
//               Which is the subject of application for Zoning Certification based
//               on the duly certified vicinity map submitted by the applicant is
//               zoned for use specified in the above table per approved Ordinance
//               2021-05 otherwise known as the Comprehensive Land Use of the City
//               of Talisay, Cebu and approved by the Sangguniang Panlalawigan on
//               April 04, 2023 throught the resolution no. 140-2003 in accordance
//               with pertinent issuances as amended by City Zoning Ordinance No.
//               64 (s.2021).
//             </Text>

//             {regulations.map(
//               (el) =>
//                 el.code === data.zoningCode && (
//                   <View>
//                     <Text style={zoncertstyles.regtitle}>{el.title}</Text>
//                     <Text style={zoncertstyles.paragraph}>
//                       {el.descriptions}
//                     </Text>
//                     <Text style={zoncertstyles.regtitle}>Allowable Uses</Text>
//                     <ul>
//                       {el.uses.map((el) => (
//                         <>
//                           <li>
//                             <View wrap={false} style={zoncertstyles.rowList}>
//                               <Image
//                                 style={zoncertstyles.bullet}
//                                 src={bullet}
//                               ></Image>
//                               <Text style={zoncertstyles.list}>{el.item}</Text>
//                             </View>
//                             <ul>
//                               {el.subItem.map((el) => (
//                                 <li>
//                                   <View
//                                     wrap={false}
//                                     style={zoncertstyles.rowSubList}
//                                   >
//                                     <Image
//                                       style={zoncertstyles.bullet}
//                                       src={subbullet}
//                                     ></Image>
//                                     <Text style={zoncertstyles.subList}>
//                                       {el.item}
//                                     </Text>
//                                   </View>
//                                   <ul>
//                                     {el.subuses?.map((el) => (
//                                       <li>
//                                         <View
//                                           wrap={false}
//                                           style={zoncertstyles.rowSubsubList}
//                                         >
//                                           <Image
//                                             style={zoncertstyles.bullet}
//                                             src={subbullet}
//                                           ></Image>
//                                           <Text style={zoncertstyles.subList}>
//                                             {el.title}
//                                           </Text>
//                                         </View>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </li>
//                               ))}
//                             </ul>
//                           </li>
//                         </>
//                       ))}
//                     </ul>

//                     {el.extrainformation.map((el) => (
//                       <>
//                         <Text style={zoncertstyles.extrainfo}>{el.title}</Text>
//                         {el.regulations.map((el) => (
//                           <View style={zoncertstyles.rowList}>
//                             <Image
//                               style={zoncertstyles.bullet}
//                               src={bullet}
//                             ></Image>
//                             <Text style={zoncertstyles.list}>
//                               {el.regulations}
//                             </Text>
//                           </View>
//                         ))}
//                         {el.regulations.map((el) => (
//                           <Text>{el.title}</Text>
//                         ))}
//                       </>
//                     ))}
//                   </View>
//                 )
//             )}
//           </View>

//           {/* turn off the wrap if the page breaks*/}
//           <View wrap={false} style={zoncertstyles.conditionItem}>
//             <Text
//               style={[zoncertstyles.conditions, zoncertstyles.conditiontitle]}
//             >
//               Conditions:
//             </Text>
//             <Text style={zoncertstyles.conditions}>
//               1. This certification shall not be considered as a locational
//               clearance / certificate of zoning conformance or development
//               permit.
//             </Text>
//             <Text style={zoncertstyles.conditions}>
//               2. This certification shall not be considered as a certification
//               by CPDC as to the ownership by the applicant of the parcel of land
//               subject to this certfication.
//             </Text>
//             <Text style={zoncertstyles.conditions}>
//               3. Any misrepresentation or material falsehood on the part of the
//               applicant shall be sufficient cause for the cancellation of this
//               certification.
//             </Text>
//             <Text style={zoncertstyles.conditions}>
//               {`Issued this `}
//               <Text style={zoncertstyles.cellHeadingTop}>
//                 {`${formatOrdinal(new Date().getDate())}`}
//               </Text>
//               <Text> day of </Text>
//               <Text style={zoncertstyles.cellHeadingTop}>
//                 {`${
//                   monthNames[new Date().getMonth()]
//                 } ${new Date().getFullYear()}`}
//               </Text>
//               {`, at City of  Talisay, Cebu.`}
//             </Text>
//           </View>
//           <View style={zoncertstyles.condwrapper}>
//             <View wrap={false} style={zoncertstyles.conditions}>
//               <Text style={zoncertstyles.label}>Prepared:</Text>
//               <Text style={zoncertstyles.signatory}>AR. JASPER B. LARIDA</Text>
//               <Text>Project Evaluation Officer 2</Text>
//             </View>
//             <View wrap={false} style={zoncertstyles.conditions}>
//               <Text style={zoncertstyles.label}>Verified:</Text>
//               <Text style={zoncertstyles.signatory}>
//                 MR. MARIO DANDI P. CAPISTRANO
//               </Text>
//               <Text>Zoning Officer 2</Text>
//             </View>
//             <View wrap={false} style={zoncertstyles.christine}>
//               <Text style={zoncertstyles.label}>Approved:</Text>
//               <Text style={zoncertstyles.signatory}>
//                 CHRISTINE D. HOMEZ, CE, GE, EnP M.Eng'g
//               </Text>
//               <Text>CPDC / Zoning Administrator</Text>
//             </View>
//             <View wrap={false} style={zoncertstyles.conditions}>
//               <Text>OR #: {data.orNumber}</Text>
//               <Text>Date: {data.orDate}</Text>
//               <Text>Amount: {data.amountPaid}</Text>
//             </View>
//           </View>
//         </View>
//       ))}
//     </Page>
//   </Document>
// );
