/*
    Description: This file contains the global styles for the application. It is imported in the App.js file.
    It is also imported in the index.js file. This file is imported in the index.js file so that the global styles are applied to the entire application.
    It provides Android SafeAreaView for the entire application.
*/
import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});