import React from "react";
import { View, Text, StyleSheet } from "react-native";

import LeftArrowIcon from "../assets/icons/left-arrow.svg";
import FilterIcon from "../assets/icons/filter.svg";

const Header = () => {
    return (
        <View style={styles.container}>
            <LeftArrowIcon />
            <Text style={styles.title}>Indiviual View</Text>
            <FilterIcon />
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20.5,
        paddingHorizontal: 18,
        borderBottomWidth: 1, 
        borderColor: "#E5E7EB"
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
        letterSpacing: -0.072,
        lineHeight: 25,
        fontStyle: "normal"        
    }
});