/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { FixedContent } from "./src/modalize/FixedContent";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            width: "90%",
            backgroundColor: "#eb4034",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => modalize.openModal()}
        >
          <Text style={{ color: "#fdfdfd", fontWeight: "700" }}>
            Open Modalize
          </Text>
        </TouchableOpacity>
        <FixedContent ref={ref => (modalize = ref)} />
      </SafeAreaView>
    </>
  );
};

export default App;
