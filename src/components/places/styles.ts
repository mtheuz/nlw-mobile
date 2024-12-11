import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";

export const s = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100]

    },
    content:{
        gap: 12,
        padding:24,
        paddingBottom: 100,
    },
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[600]
    },
    title: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginBottom: 16
    }
})