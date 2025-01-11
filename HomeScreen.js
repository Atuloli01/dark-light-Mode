import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getColors } from '@/constants/constants'

const generateStyles = () => {
    const COLORS = getColors()
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: COLORS.primary,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.text,
        },
        subtitle: {
            fontSize: 16,
            color: COLORS.secondaryText,
        },
    })
}

// ===========

const HomeScreen = () => {
    const styles = generateStyles()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hi, Ram Goel!</Text>
            <Text style={styles.subtitle}>
                Level up your habits every day 🎮
            </Text>
        </View>
    )
}

export default HomeScreen
