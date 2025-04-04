import React, { useState } from "react";
import { regulations } from "../../array/arrays";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { zoncertstyles } from "./zoncertstyle";
import Header from "../../../Components/print-components/Header";
import { FaCircle } from "react-icons/fa";
import bullet from "../../../images/bullet.png";
import subbullet from "../../../images/subbullet.png";

function GenerateCertificate() {
  const [code, setCode] = useState("hdm");

  regulations.map((el) => console.log(el.extrainformation));

  return (
    <PDFViewer style={zoncertstyles.size}>
      <Document>
        <Page size="Folio" style={zoncertstyles.page}>
          <View
          // style={{
          //   break: "before",
          //   marginBottom: 10,
          //   padding: 10,
          //   border: "1px solid black",
          // }}
          >
            <Header />
            <Text style={zoncertstyles.h1}>ZONING CERTIFICATION</Text>
            <Text style={zoncertstyles.paragraph}>
              THIS IS TO CERTIFY that a parcel of land located in Barangay
              **********, City of Talisay, Cebu, covering a total area of
              ********** square meters specifically described as follows:
            </Text>
            <View style={zoncertstyles.row}>
              <View style={zoncertstyles.cell}>
                <Text style={zoncertstyles.cellHeading}>Registered Owner</Text>
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
                  Zoning Classificaiton as per Zoning Ordinance No. 64 (s. 2021)
                </Text>
              </View>
            </View>
            <View style={zoncertstyles.row}>
              <View style={zoncertstyles.cell}>
                <Text style={zoncertstyles.cellContent}>**************</Text>
              </View>
              <View style={zoncertstyles.cell}>
                <Text style={zoncertstyles.cellContent}>**************</Text>
              </View>
              <View style={zoncertstyles.cell}>
                <Text style={zoncertstyles.cellContent}>**************</Text>
              </View>
              <View style={zoncertstyles.cell}>
                <Text style={zoncertstyles.cellContent}>**************</Text>
              </View>
              <View style={zoncertstyles.cell}>
                <Text style={zoncertstyles.cellContent}>**************</Text>
              </View>
            </View>

            <Text style={zoncertstyles.paragraph}>
              Which is the subject of application for Zoning Certification based
              on the duly certified vicinity map submitted by the applicant is
              zoned for use specified in the above table per approved Ordinance
              2021-05 otherwise known as the Comprehensive Land Use of the City
              of Talisay, Cebu and approved by the Sangguniang Panlalawigan on
              April 04, 2023 throught the resolution no. 140-2003 in accordance
              with pertinent issuances as amended by City Zoning Ordinance No.
              64 (s.2021).
            </Text>

            {regulations.map(
              (el) =>
                el.code === code && (
                  <View>
                    <Text style={zoncertstyles.regtitle}>{el.title}</Text>
                    <Text style={zoncertstyles.paragraph}>
                      {el.descriptions}
                    </Text>
                    <Text style={zoncertstyles.regtitle}>Allowable Uses</Text>
                    <ul>
                      {el.uses.map((el) => (
                        <>
                          <li>
                            <View style={zoncertstyles.rowList}>
                              <Image
                                style={zoncertstyles.bullet}
                                src={bullet}
                              ></Image>
                              <Text style={zoncertstyles.list}>{el.item}</Text>
                            </View>
                            <ul>
                              {el.subItem.map((el) => (
                                <li>
                                  <View style={zoncertstyles.rowSubList}>
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
                                          style={zoncertstyles.rowSubsubList}
                                        >
                                          <Image
                                            style={zoncertstyles.bullet}
                                            src={subbullet}
                                          ></Image>
                                          <Text style={zoncertstyles.subList}>
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
                        <Text style={zoncertstyles.extrainfo}>{el.title}</Text>
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
                    <Text
                      style={[
                        zoncertstyles.conditions,
                        zoncertstyles.conditiontitle,
                      ]}
                    >
                      Conditions:
                    </Text>
                    <View style={zoncertstyles.conditionItem}>
                      <Text style={zoncertstyles.conditions}>
                        1. This certification shall not be considered as a
                        locational clearance / certificate of zoning conformance
                        or development permit.
                      </Text>
                      <Text style={zoncertstyles.conditions}>
                        2. This certification shall not be considered as a
                        certification by CPDC as to the ownership by the
                        applicant of the parcel of land subject to this
                        certfication.
                      </Text>
                      <Text style={zoncertstyles.conditions}>
                        3. Any misrepresentation or material falsehood on the
                        part of the applicant shall be suficient cause for the
                        cancellation of this certification.
                      </Text>
                      <Text style={zoncertstyles.conditions}>
                        Issued this ******** day of **************** at City of
                        Talisay, Cebu.
                      </Text>
                    </View>

                    <View wrap={false} style={zoncertstyles.condwrapper}>
                      <View style={zoncertstyles.conditions}>
                        <Text style={zoncertstyles.label}>Prepared:</Text>
                        <Text style={zoncertstyles.signatory}>
                          AR. JASPER B. LARIDA
                        </Text>
                        <Text>Project Evaluation Officer 2</Text>
                      </View>
                      <View style={zoncertstyles.conditions}>
                        <Text style={zoncertstyles.label}>Verified:</Text>
                        <Text style={zoncertstyles.signatory}>
                          MR. MARIO DANDI P. CAPISTRANO
                        </Text>
                        <Text>Zoning Officer 2</Text>
                      </View>
                      <View style={zoncertstyles.christine}>
                        <Text style={zoncertstyles.label}>Approved:</Text>
                        <Text style={zoncertstyles.signatory}>
                          CHRISTINE D. HOMEZ, CE, GE, EnP M.Eng'g
                        </Text>
                        <Text>CPDC / Zoning Administrator</Text>
                      </View>
                      <View style={zoncertstyles.conditions}>
                        <Text>OR #: </Text>
                        <Text>Date: </Text>
                        <Text>Amount: </Text>
                      </View>
                    </View>
                  </View>
                )
            )}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default GenerateCertificate;
