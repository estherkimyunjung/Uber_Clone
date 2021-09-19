import React from "react";
import { StyleSheet, Text, View } from "react-native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    description: "Code Street, Houston, US",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    description: "Houston Zoo, Houston, US",
  },
];

export default function NavFavorites() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>What's Up!</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
