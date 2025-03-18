import { View, Text, Image } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../style";
import cpdclogo from "../../Sidebar/images/cpdclogo.jpg";
import talisaylogo from "../../Sidebar/images/talisaylogo.png";

function Header() {
  return (
    <div>
      <View style={styles.header}>
        <View>
          <Image style={styles.logo} src={talisaylogo}></Image>
        </View>

        <View style={styles.hcenter}>
          <Text>Republic of the Philippines</Text>
          <Text>CITY OF TALISAY</Text>
          <Text>PROVINCE OF CEBU</Text>
          <Text>Office of the City Planning and Development Coordinator</Text>
          <Text>OFFICE OF THE ZONING ADMINISTRATOR</Text>
        </View>

        <View>
          <Image style={styles.logo} src={cpdclogo}></Image>
        </View>
      </View>
    </div>
  );
}

export default Header;
