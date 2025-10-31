import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text } from "react-native";
import Motogirl from '@/assets/img/motogirl';
import Google from '@/assets/img/google';
import Facebook from '@/assets/img/facebook';
import { useNavigation } from "expo-router";



function Register() {

    const navigation = useNavigation()


    return (
        <ScrollView >
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFF', paddingTop: 80 }}>
                <Motogirl style={{ borderRadius: 30 }}></Motogirl>
                <View style={{ gap: 24, paddingBottom: 41 }}>
                    <TextInput style={style.inpt} placeholder="Nama Lengkap" />
                    <TextInput style={style.inpt} placeholder="Email" />
                    <TextInput style={style.inpt} placeholder="Nomor HP" />
                    <TextInput style={style.inpt} placeholder="Password" />
                    <TextInput style={style.inpt} placeholder="Konfirmasi Password" />
                    <TouchableOpacity style={style.but} onPress={()=> navigation.navigate('sucess')}>Mendaftar</TouchableOpacity>
                    <View style={{ paddingTop: 40, paddingBottom: 40, flexDirection: "row", gap: 8, justifyContent: "center", alignItems: 'center' }}>
                        <View style={style.line}></View>
                        <Text style={style.linetxt}>Atau daftar menggunakan</Text>
                        <View style={style.line}></View>
                    </View>
                    <View style={{ gap: 24 }}>
                        <TouchableOpacity style={style.google}><Google></Google>Google</TouchableOpacity>
                        <TouchableOpacity style={style.facebook}><Facebook></Facebook>Facebook</TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',paddingTop:49,justifyContent:'center',alignItems:'center'}}>
                        <Text style={style.blackfoot}>Sudah punya akun? silahkan </Text>
                        <Text style={style.bluefoot}>masuk</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

export default Register;



const style = StyleSheet.create({
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
        color:'#000000'

    },
    bluefoot: {
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        color:'#3498DB'
    }
})