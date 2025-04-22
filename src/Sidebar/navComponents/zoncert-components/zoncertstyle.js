import { StyleSheet } from "@react-pdf/renderer";

export const zoncertstyles = StyleSheet.create({
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
    textAlign: "center",
    padding: 30,
  },

  contentWrapper: {
    flexGrow: 1,
    backgroundColor: "orange",
  },

  h1: {
    fontSize: "14px",
    fontWeight: "550",
    paddingTop: 10,
    paddingBottom: 10,
  },

  paragraph: {
    textAlign: "justify",
    paddingTop: 10,
    paddingBottom: 10,
  },

  /////////////////////////////////////////////////////////////

  row: {
    display: "flex",
    flexDirection: "row",
  },

  cell: {
    display: "flex",
    flexDirection: "row",
    width: "20%",
    border: "1px",
    height: "auto",
    padding: 5,
    alignItems: "center",
  },

  cellHeading: {
    width: "100%",
  },

  cellHeadingTop: {
    fontWeight: 600,
  },

  cellContent: {
    fontWeight: "600",
    width: "100%",
  },

  /////////////////////////////////////////////////////////////
  regtitle: {
    textAlign: "left",
    fontWeight: 600,
  },

  conditions: {
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "left",
  },

  conditiontitle: {
    paddingTop: 10,
    fontWeight: 600,
  },

  list: {
    textAlign: "justify",
    marginLeft: 5,
  },

  bullet: {
    width: 9,
    height: 9,
  },

  subList: {
    // textAlign: "left",
    textAlign: "justify",
    marginLeft: "5px",
  },

  ////////////////////////////////////////////////////////////////

  extrainfo: {
    textAlign: "left",
    marginTop: 10,
    fontWeight: 600,
  },

  rowList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    paddingTop: "6px",
    paddingLeft: 10,
    paddingRight: 20,
  },

  rowSubList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    paddingTop: "6px",
    width: "520px",
    paddingLeft: 30,
  },

  rowSubsubList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    paddingTop: "6px",
    width: "520px",
    paddingLeft: 50,
  },

  ////////////////////////////////////////////////////////

  condwrapper: {
    marginTop: 20,
  },

  signatory: {
    fontWeight: 600,
    paddingTop: 20,
  },

  conditionItem: {
    width: "90%",
    paddingLeft: 10,
  },

  christine: {
    paddingTop: 10,
    paddingLeft: 150,
    textAlign: "left",
  },

  label: {
    paddingTop: 10,
  },
});
