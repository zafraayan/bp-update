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
    paddingTop: 10,
  },

  spacer: {
    marginTop: 10,
    flexDirection: "row",
    textAlign: "left",
    flexWrap: "wrap",
  },

  oneColumn: {
    width: "25%",
    padding: 5,
    border: "1px solid black",
  },

  recOneColumn: {
    width: "25%",
    padding: 5,
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  recTwoColumns: {
    width: "50%",
    padding: 5,
    border: "1px solid black",
    flexDirection: "row",
    gap: 5,
  },

  adjacents: {
    width: "25%",
    padding: 5,
    border: "1px solid black",
    textAlign: "center",
    fontWeight: 800,
  },

  twoColumns: {
    width: "50%",
    padding: 5,
    border: "1px solid black",
  },

  fullWidth: {
    padding: 5,
    width: "100%",
    border: "1px solid black",
    flexWrap: "wrap",
  },

  footer: {
    padding: 5,
    width: "100%",
    border: "1px solid black",
    flexWrap: "wrap",
    textAlign: "center",
  },

  signaturiesWrapper: {
    width: "50%",
    paddingTop: 50,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    border: "1px solid black",
  },

  requirements: {
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginTop: 3,
  },

  reccomendation: {
    marginLeft: 10,
  },

  box: {
    width: 10,
    height: 10,
  },

  value: {
    fontWeight: 800,
  },

  signaturiesPosition: {
    textAlign: "center",
  },

  signaturiesName: {
    fontWeight: 800,
    textAlign: "center",
    textDecoration: "underline",
  },

  adjoining: {
    padding: 5,
    width: "100%",
    border: "1px solid black",
    flexWrap: "wrap",
    textAlign: "center",
  },

  adjacentsLabel: {
    width: "25%",
    fontSize: 9,
    padding: 3,
    border: "1px solid black",
    textAlign: "center",
  },
});
