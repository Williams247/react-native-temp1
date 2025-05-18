import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "./icon/IconSymbol";

export function Navigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue", // active color
        tabBarInactiveTintColor: "gray", // inactive color
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconSymbol name="house.fill" color={color} size={size} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About us",
        }}
      />
    </Tabs>
  );
}
