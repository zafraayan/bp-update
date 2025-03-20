import { StyleSheet } from "@react-pdf/renderer";

export const reportStyles = StyleSheet.create({
  size: {
    width: "80%",
    height: "100%",
  },

  page: {
    // display: "flex",
    // flexDirection: "row",
    fontSize: "11px",
    width: "100%",
    height: "100%",
    padding: "20px",
    textAlign: "center",
  },

  genericWrapper: {
    dislay: "flex",
    width: "100%",
    flexDirection: "row",
  },

  header: {
    flex: 1,
    padding: 5,
    borderTop: 1,
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    fontWeight: 800,
  },

  body: {
    flex: 1,
    padding: 5,
    borderTop: 1,
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    fontSize: 9,
  },

  topLabel: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "gray",
    color: "white",
    padding: 10,
  },

  headingLabel: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 8,
  },
});
