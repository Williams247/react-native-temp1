import { AboutIcon } from "@/components/icons/about";
import { HomeIcon } from "@/components/icons/home";
import { Tabs } from "expo-router";
import React from "react";

export default function Navigation() {
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
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} size={18} strokeWidth={2} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About us",
          tabBarIcon: ({ color }) => (
            <AboutIcon color={color} size={18} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
