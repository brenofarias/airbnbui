import React, { Component } from "react";
import { View, Text } from "react-native";

class Tag extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 40,
          padding: 5,
          backgroundColor: "white",
          borderColor: "#DDDDDD",
          borderWidth: 1,
          borderRadius: 2,
          marginRight: 5,
          marginBottom: 10
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 10 }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Tag;
