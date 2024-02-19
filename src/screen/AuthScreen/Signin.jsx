import { View, Text, SafeAreaView, StatusBar, Image, useWindowDimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Style'
import shape from '../../assets/images/Login/shap.png'
import user from '../../assets/images/Login/user.png'
import email from '../../assets/icon/email.png'
import lock from '../../assets/icon/lock.png'
import theme from '../../common/Theme'
import { useNavigation } from '@react-navigation/native'

const Signin = () => {
    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlePress = () => {
        Navigation.navigate('BottomTabs')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#8417F2' barStyle="light-content" />
            <View>
                <View>
                    <Image source={shape} resizeMode='stretch' style={{ width: width / 1 }} />
                    <View style={[styles.user, { width: width / 1 }]}>
                        <Image source={user} resizeMethod='stretch' />
                    </View>
                </View>
                <View style={styles.containerFluid}>
                    <View style={[styles.signin, { width: width / 1.1 }]}>
                        <Text style={styles.text_md}>Sign In</Text>
                    </View>
                </View>
                <View style={styles.containerFluid}>
                    <View style={[styles.textfield, { width: width / 1.1, marginTop: 30 }]}>
                        <View style={styles.innerfield}>
                            <Image source={email} resizeMode='stretch' />
                            <TextInput placeholder="Email" placeholderTextColor={theme.colors.darkGray} style={styles.input} />
                        </View>
                    </View>
                </View>
                <View style={styles.containerFluid}>
                    <View style={[styles.textfield, { width: width / 1.1 }]}>
                        <View style={styles.innerfield}>
                            <Image source={lock} resizeMode='stretch' />
                            <TextInput placeholder="Password" placeholderTextColor={theme.colors.darkGray} style={styles.input} />
                        </View>
                    </View>
                </View>
                <View style={styles.containerFluid}>
                    <View style={[{ width: width / 1.1, marginTop: 12 }]}>
                        <Text style={styles.forget}>Forget Your Password?</Text>
                    </View>
                </View>
                <View style={styles.containerFluid}>
                    <TouchableOpacity onPress={handlePress}>
                        <View style={[styles.btn, { width: width / 1.1, marginTop: 60 }]}>
                            <View style={styles.btnPrimary}>
                                <Text style={styles.text_lg}>Sign In</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signin