import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  size: {
    width: "100%",
    height: "100%",
    fontFamily: "Inter",
  },

  page: {
    // display: "flex",
    // flexDirection: "row",
    fontSize: "11px",
    width: "100%",
    padding: "20px",
    textAlign: "center",
  },

  // -------------Header Styles-----------------

  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "nowrap",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    height: 80,
    // backgroundColor: "orange",
  },

  lcHeading: {
    fontSize: 16,
    textDecoration: "underline",
  },

  hcenter: {
    placeContent: "center",
    width: "40%",
  },

  logo: {
    width: "75px",
  },

  // ---------------Body-------------------
  zoningText: {
    textAlign: "left",
    padding: 5,
  },

  spacer: {
    marginBottom: 10,
    width: "100%",
    // backgroundColor: "orange",
  },

  firstTable: {
    display: "flex",
    flexDirection: "row",
  },

  tdLabel: {
    flex: 1,
    padding: 3,
    textAlign: "right",
  },

  tdValue: {
    flex: 1,
    padding: 3,
    textAlign: "left",
    fontWeight: 800,
    placeContent: "center",
  },
  // ----------------------------------------
  secondTable: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
  },

  heading: {
    border: "1px solid black",
    width: "50%",
  },

  secondTd: {
    padding: 4,
  },

  secondTdValue: {
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: "800",
    fontSize: 12,
    paddingBottom: 1,
    paddingTop: 1,
  },

  // ----------------------------------------

  conditionsContainer: {
    position: "relative",
  },

  conditionTitle: {
    position: "absolute",
    top: 10,
  },

  backgroundImage: {
    opacity: 0.2,
    height: "330px",
  },

  conditionItem: {
    position: "absolute",
    left: 10,
    top: 25,
    textAlign: "left",
    width: "95%",
    display: "flex",
    gap: 5,
    fontSize: 11,
  },

  // -------------------Third table---------------------
  thirdTable: {
    display: "flex",
    marginTop: 15,
    flexDirection: "row",
    textAlign: "center",
  },

  thirdTd: {
    padding: 5,
  },

  thirdTdValue: {
    paddingTop: 25,
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: "800",
    fontSize: 12,
    textDecoration: "underline",
  },

  orNumber: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    // gap: 10,
    textAlign: "left",
    fontSize: 8,
    // height: 50,
  },

  thirdTableLabel: {
    width: "50%",
  },
});
