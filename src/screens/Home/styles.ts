import { StyleSheet } from "react-native";

import { config } from "@components/theme/theme"

export default StyleSheet.create({
    container: {
        backgroundColor: config.tokens.colors.white,
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 15,
    },
    welcomeImage: {
        alignSelf: 'center',
        width: 400,
    }
})