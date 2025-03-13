import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  size: {
    width: "100%",
    height: "100%",
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    paddingBottom: 5, // Optional
    // backgroundColor: "green",
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
    padding: 5,
    textAlign: "left",
    fontWeight: 800,
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
    padding: 3,
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
    height: "350px",
  },

  conditionItem: {
    position: "absolute",
    left: 10,
    top: 25,
    textAlign: "left",
    width: "95%",
    display: "flex",
    gap: 5,
  },

  // -------------------Third table---------------------
  thirdTable: {
    display: "flex",
    marginTop: 25,
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
    marginTop: 10,
    paddingBottom: 15,
    width: "25%",
    display: "flex",
    // gap: 10,
    textAlign: "left",
    fontSize: 8,
  },

  thirdTableLabel: {
    width: "50%",
  },
});
