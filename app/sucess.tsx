

import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text } from "react-native";
import Scooter from '@/assets/img/scooter';
import { useNavigation } from "expo-router";



function Login() {
    const navigation = useNavigation()

    return (


        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFF', paddingTop: 80 }}>
            <Scooter style={{ borderRadius: 30 }}></Scooter>
            <Text style={style.maintxt}>Selamat!
                Anda sudah berhasil mendaftar</Text>
            <Text style={style.txt}>Silahkan periksa email anda untuk melakukan
                verifikasi sebelum melakukan Login.</Text>
            <TouchableOpacity style={style.but}>Lanjutkan</TouchableOpacity>
        </View>

    );
}

export default Login;



const style = StyleSheet.create({

    maintxt: {
        width:292,
        fontFamily: 'SpaceMono',
        fontWeight: 700,
        fontSize: 21,
        textAlign: 'center',
        paddingTop:37,
        paddingBottom:19

    },
    txt: {
        width:320,
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        textAlign: 'center',
        paddingBottom:150

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


    }





})