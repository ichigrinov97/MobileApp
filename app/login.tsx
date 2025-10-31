

import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text } from "react-native";
import Friends from '@/assets/img/friends';
import Google from '@/assets/img/google';
import Facebook from '@/assets/img/facebook';
import { useNavigation } from "expo-router";



function Login() {
 const navigation = useNavigation()

    return (

        <ScrollView >
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFF', paddingTop: 80 }}>
                <Friends style={{ borderRadius: 30 }}></Friends>
                <View>
                    <View style={{ gap: 16, paddingTop: 44 }}>
                        <TextInput style={style.inpt} placeholder="Email" />
                        <TextInput style={style.inpt} placeholder="Password" />
                    </View>
                    <Text style={style.smalltxt}>Lupa password?</Text>
                    <TouchableOpacity style={style.but} onPress={()=> navigation.navigate('sucess')}>Masuk</TouchableOpacity>
                    <View style={{ paddingTop: 38, paddingBottom: 32, flexDirection: "row", gap: 8, justifyContent: "center", alignItems: 'center' }}>
                        <View style={style.line}></View>
                        <Text style={style.linetxt}>Atau daftar menggunakan</Text>
                        <View style={style.line}></View>
                    </View>
                    <View style={{ gap: 16 }}>
                        <TouchableOpacity style={style.google}><Google></Google>Google</TouchableOpacity>
                        <TouchableOpacity style={style.facebook}><Facebook></Facebook>Facebook</TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 49, paddingBottom:12, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={style.blackfoot}>Belum punya akun? </Text>
                        <Text style={style.bluefoot}>Mendaftar </Text>
                        <Text style={style.blackfoot}>sekranag</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

export default Login;










const style = StyleSheet.create({

    smalltxt: {
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        paddingLeft: 220,
        paddingTop: 7,
        paddingBottom:24


    },


    inpt: {
        width: 354,
        height: 52,
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#C0C0C0',
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 25,
        color: '#C0C0C0',

    },
    but: {
        width: 354,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#3498DB',
        fontFamily: 'SpaceMono',
        fontWeight: 700,
        fontSize: 15,
        textAlign: 'center',
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'


    },
    line: {
        width: 56,
        height: 0,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#C0C0C0'

    },
    linetxt: {
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        textAlign: 'center',
        color: '#C0C0C0'

    },
    google: {
        flexDirection: 'row',
        width: 354,
        height: 52,
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#E74C3C',
        fontFamily: 'SpaceMono',
        fontWeight: 700,
        fontSize: 15,
        color: '#E74C3C',
        paddingLeft: 16,
        alignItems: 'center',
        position: 'relative',
        gap: 101

    },
    facebook: {
        flexDirection: 'row',
        width: 354,
        height: 52,
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#3498DB',
        fontFamily: 'SpaceMono',
        fontWeight: 700,
        fontSize: 15,
        color: '#3498DB',
        paddingLeft: 16,
        alignItems: 'center',
        position: 'relative',
        gap: 101

    },
    blackfoot: {
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        color: '#000000'

    },
    bluefoot: {
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        color: '#3498DB'
    }
})