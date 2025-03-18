import React from "react";
import { styles } from "../style";
import { View, Text, Image } from "@react-pdf/renderer";
import city from "../../images/city.jpg";
import Header from "./Header";
import { useSelector } from "react-redux";
import { formatDate } from "../../helpers/formatDate";
import { useActionData } from "react-router";
import Crud from "../../database/Crud";

function LocationalClearance({ toPrint, props }) {
  // const { useData } = Crud();
  // const { data, error, isLoading } = useData();

  // const lastElement = data?.at(-1);
  return (
    <>
      <Header />
      <View>
        <View>
          <Text style={styles.zoningText}>{props}</Text>
          <Text style={styles.lcHeading}>LOCATIONAL CLEARANCE</Text>
          <Text style={styles.spacer}>{`(Business Permit Application)`}</Text>

          <View style={styles.spacer}>
            <View style={styles.firstTable}>
              <Text style={styles.tdLabel}>Application No.:</Text>
              <Text style={styles.tdValue}>
                {`TAL-BUS-NEW-07-${new Date()
                  .getFullYear()
                  .toString()
                  .slice(2, 4)}-${toPrint.id}`}
              </Text>
              <Text style={styles.tdLabel}>Decision Number:</Text>
              <Text style={styles.tdValue}>
                CZC-07-{new Date().getFullYear().toString().slice(2, 4)}-
                {toPrint?.decisionNumber}
              </Text>
            </View>
            <View style={styles.firstTable}>
              <Text style={styles.tdLabel}>Date Received:</Text>
              <Text style={styles.tdValue}>{formatDate(toPrint?.date)}</Text>
              <Text style={styles.tdLabel}></Text>
              <Text style={styles.tdValue}></Text>
            </View>
          </View>

          <View style={styles.spacer}>
            <View style={styles.secondTable}>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>NAME OF APPLICANT</Text>
                <Text style={styles.secondTdValue}>
                  {!toPrint.fName && !toPrint.lName && !toPrint.mName
                    ? toPrint?.busName
                    : `${toPrint?.fName} ${toPrint?.mName} ${toPrint?.lName}`}
                </Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>NAME OF CORPORATION</Text>
                <Text style={styles.secondTdValue}>{toPrint?.corpName}</Text>
              </View>
            </View>
            <View style={styles.secondTable}>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>BUSINESS NAME:</Text>
                <Text style={styles.secondTdValue}>{toPrint?.busName}</Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>LOCATION:</Text>
                <Text
                  style={styles.secondTdValue}
                >{`${toPrint?.building}, ${toPrint?.barangay}, ${toPrint?.city}`}</Text>
              </View>
            </View>
            <View style={styles.secondTable}>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>TYPE OF BUSINESS:</Text>
                <Text style={styles.secondTdValue}>{toPrint?.busType}</Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>CAPITAL INVESTED:</Text>
                <Text style={styles.secondTdValue}>
                  {toPrint?.busCapital === "00" && "Not Specified"}
                </Text>
              </View>
            </View>
            <View style={styles.secondTable}>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>PRODUCTION VOLUME/DAY:</Text>
                <Text style={styles.secondTdValue}>{toPrint?.production}</Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>
                  MANPOWER (No. of personnel employed)
                </Text>
                <Text style={styles.secondTdValue}>
                  {toPrint?.male === 0 && toPrint?.female === 0
                    ? "Not Specified"
                    : `${toPrint?.male + toPrint?.female} Total Employees`}
                </Text>
              </View>
            </View>
            <View style={styles.secondTable}>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>DECISION:</Text>
                <Text style={styles.secondTdValue}>{toPrint?.decision}</Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.secondTd}>LEGAL BASIS:</Text>
                <Text style={styles.secondTdValue}>{toPrint?.legalBasis}</Text>
              </View>
            </View>

            <View style={styles.conditionsContainer}>
              {/* <View style={styles.conditionItem}> */}
              <Image style={styles.backgroundImage} src={city}></Image>
              <Text style={styles.conditionTitle}>CONDITIONS</Text>
              <View style={styles.conditionItem}>
                <View>
                  <Text>
                    1. This granting of Locational Clearance is subject to all
                    laws and ordinances pertinent thereto.
                  </Text>
                </View>
                {/* <Text> */}

                <Text>
                  2. Necessary permits and licenses from the City of Talisay and
                  other agencies concerned are immediately complied with.
                </Text>
                {/* </Text> */}
                <Text>
                  3. The operator shall see to it that the operation shall not
                  affect the use of electrical appliances and other electrical
                  devices of the neighboring residents.
                </Text>
                <Text>
                  4. Pollution or any adverse effect should there be any of said
                  undertaking on the surrounding residents must be avoided.
                </Text>
                <Text>
                  5. No activity other than the applied for shall be conducted
                  within the site.
                </Text>
                <Text>
                  6. Proper and regular disposal of waste shall be strictly
                  observed.
                </Text>
                <Text>
                  7. No major expansion alteration and/or improvement shall be
                  introduced thereto without prior clearance from this office.
                </Text>
                <Text>
                  8. Any complaint against the location and/or the business
                  activities, if found valid after due hearing and
                  non-compliance with any of the conditions shall be sufficient
                  cause for the revocation of this Locational Clearance.
                </Text>
                <Text>
                  9. This approval is subject to the conditions of the
                  Comprehensive Land Use Plan and to some possible changes of
                  the New City’s Master Plan.
                </Text>
                <Text>
                  10. This decision shall not be construed as a certification as
                  to the ownership by the applicant of the parcel of land
                  subject of this decision.
                </Text>
                <Text>
                  11. Any misrepresentation, false statements of allegations
                  material to the issuance of this decision shall be sufficient
                  cause for its revocation.
                </Text>
                <Text>
                  12. Owner/ manager should comply the requirements of PD 1096
                  (setback requirements) and BP 344.
                </Text>
              </View>

              <View style={styles.thirdTable}>
                <View style={styles.thirdTableLabel}>
                  <Text style={styles.thirdTd}>Recommending Approval:</Text>
                  <Text style={styles.thirdTdValue}>
                    MARIO DANDI P. CAPISTRANO
                  </Text>
                  <Text style={styles.thirdTd}>Zoning Officer II</Text>
                </View>
                <View style={styles.thirdTableLabel}>
                  <Text style={styles.thirdTd}>Approved By:</Text>
                  <Text style={styles.thirdTdValue}>
                    ENP. CHRISTINE D. HOMEZ, CE, GE, MEngg.
                  </Text>
                  <Text style={styles.thirdTd}>
                    CPDC / Zoning Administrator
                  </Text>
                </View>
              </View>

              <View style={styles.orNumber}>
                <Text>Or #: {toPrint?.orNumber}</Text>
                <Text>Date Issued: {formatDate(toPrint?.orDate)}</Text>
                <Text>Amount Paid: {toPrint?.amountPaid}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default LocationalClearance;
