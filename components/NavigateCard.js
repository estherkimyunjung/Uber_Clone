import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function NavigateCard() {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Navigate</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
