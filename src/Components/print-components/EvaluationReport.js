import React from "react";
import Header from "./Header";
import { View, Text, Image } from "@react-pdf/renderer";
import "./evaluationStyle";
import { styles } from "./evaluationStyle";
import box from "../../images/box.png";

function EvaluationReport({ toPrint }) {
  return (
    <>
      <Header />

      <Text style={styles.lcHeading}>
        ZONING INSPECTION AND EVALUATION REPORT
      </Text>
      <Text>{`(Business Permit Application)`}</Text>

      <View style={styles.spacer}>
        <Text style={styles.twoColumns}>
          Date Inspected: <Text style={styles.value}>{toPrint?.date}</Text>
        </Text>
        <Text style={styles.twoColumns}>
          Contact No.: <Text style={styles.value}>{toPrint?.cNumber}</Text>
        </Text>
        <Text style={styles.fullWidth}>
          Date Submitted: <Text style={styles.value}>{toPrint?.date}</Text>
        </Text>
        <Text style={styles.fullWidth}>
          Name of Applicant:{" "}
          <Text
            style={styles.value}
          >{`${toPrint?.fName} ${toPrint?.mName} ${toPrint?.lName}`}</Text>
        </Text>
        <Text style={styles.fullWidth}>
          Name of Establishment:{" "}
          <Text style={styles.value}>{toPrint?.busName}</Text>
        </Text>
        <Text style={styles.twoColumns}>
          Location:{" "}
          <Text
            style={styles.value}
          >{`${toPrint?.building}, ${toPrint?.barangay}, ${toPrint?.city}`}</Text>
        </Text>
        <Text style={styles.twoColumns}>
          Area: <Text style={styles.value}>{toPrint?.area}</Text>
        </Text>
        <Text style={styles.fullWidth}>
          Business Description:{" "}
          <Text style={styles.value}>{toPrint?.busType}</Text>
        </Text>
        <Text style={styles.fullWidth}>
          Name of Authorized Representative:
          <Text style={styles.value}></Text>
        </Text>
        <View style={styles.fullWidth}>
          <Text> List of Requirements Attached (if applicable) </Text>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Barangay Business Clearance</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Barangay Council Resolution</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Transfer Certificate of Title</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Tax Declaration of Real Property</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Contract of Lease</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Certificate of Business Name Registration</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Certificate of Incorporation from SEC</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Const and Authority from Lot Owner</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>
              Consent and Authority from President of Homeowners Associations
            </Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Affidavit of No-Objectives</Text>
          </View>
          <View style={styles.requirements}>
            <Image style={styles.box} src={box}></Image>
            <Text>Others: (Ex. DENR Clearance & DOLE Clearance)</Text>
          </View>
        </View>
        <Text style={styles.fullWidth}>
          {" "}
          Zoning Classification:{" "}
          <Text style={styles.value}>{toPrint?.zonClassification}</Text>
        </Text>
        <Text style={styles.fullWidth}>
          {" "}
          Recommendation: <Text style={styles.value}></Text>
        </Text>
        <View style={styles.recOneColumn}>
          <Image style={styles.box} src={box}></Image>
          <Text>For Approval:</Text>
        </View>
        <View style={styles.recOneColumn}>
          <Image style={styles.box} src={box}></Image>
          <Text>For Denial:</Text>
        </View>
        <View style={styles.recTwoColumns}>
          <Image style={styles.box} src={box}></Image>
          <Text>For CDPC:</Text>
        </View>
        <Text style={styles.adjoining}> Adjoining Lots</Text>
        <Text style={styles.adjacents}> {toPrint?.front} </Text>
        <Text style={styles.adjacents}> {toPrint?.left} </Text>
        <Text style={styles.adjacents}> {toPrint?.back} </Text>
        <Text style={styles.adjacents}> {toPrint?.right} </Text>
        <Text style={styles.adjacentsLabel}> Front </Text>
        <Text style={styles.adjacentsLabel}> Left </Text>
        <Text style={styles.adjacentsLabel}> Back </Text>
        <Text style={styles.adjacentsLabel}> Right </Text>
        <View style={styles.twoColumns}>
          <Text> Remarks/Findings: </Text>
          <Text> For issuance of locational clearance </Text>
        </View>
        []
        <View style={styles.twoColumns}>
          <Text> Recommendation: </Text>
          <View style={styles.reccomendation}>
            <Text>
              1. It is recommended that proper traffic management in the area be
              observed if the need arises taking into consideration that the
              road is a City road.
            </Text>
            <Text>
              2. It is highly recommended likewise that there should be no other
              activities in the area other than applied.
            </Text>
            <Text>3. Subject to periodic monitoring.</Text>
          </View>
        </View>
        <View style={styles.signaturiesWrapper}>
          <Text style={styles.signaturiesName}> ERWIN C. BACALSO </Text>
          <Text style={styles.signaturiesPosition}>
            Administrative Aide III - Clerk
          </Text>
        </View>
        <View style={styles.signaturiesWrapper}>
          <Text style={styles.signaturiesName}>MARIO DANDI P. CAPISTRANO</Text>
          <Text style={styles.signaturiesPosition}> Zoning Officer II </Text>
        </View>
        <Text style={styles.footer}>
          Please see location sketch at the back: (by inspector w/ bench
          marking)
        </Text>
        {/* <Text style={styles.twoColumns}> Inspected </Text> */}
      </View>
    </>
  );
}

export default EvaluationReport;
