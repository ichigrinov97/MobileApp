import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Moto from '@/assets/img/moto';
import { useNavigation } from "expo-router";

function Main() {

    const navigation = useNavigation()

    return (
        <View style={{backgroundColor:'#FFFF'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 75 }}>
            <Moto style={{ borderRadius: 30 }}></Moto>
            <Text style={style.main}>Mudah dalam bertransaksi,
                dengan  Jumot</Text>
            <Text style={style.default}>Beli kendaraan sesuai minatmu dan dengan
                harga negosiasi terbaik</Text>
            <View style={{ gap: 21 }}>
                <TouchableOpacity style={style.up} onPress={()=> navigation.navigate('login')}>Masuk</TouchableOpacity>
                <TouchableOpacity style={style.down} onPress={()=> navigation.navigate('register')}>Mendaftar</TouchableOpacity>
            </View>
        </View>
        <Text style={style.downtxt}>Kembali</Text>
        </View>
        
    );
}

export default Main;


const style = StyleSheet.create({
    main: {
        paddingTop: 37,
        paddingBottom: 19,
        fontFamily: 'SpaceMono',
        fontWeight: 700,
        fontSize: 21,
        textAlign: 'center'
    },
    default: {
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        textAlign: 'center',
        paddingBottom: 72
    },
    up: {
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
    down: {
        width: 354,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        fontFamily: 'SpaceMono',
        fontWeight: 700,
        fontSize: 15,
        textAlign: 'center',
        color: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderStyle:'solid', 
        borderColor:'#3498DB'
    },
    downtxt: {
        paddingTop: 41,
        fontFamily: 'SpaceMono',
        fontWeight: 400,
        fontSize: 15,
        color: '#3498DB',
        paddingLeft:32,
        paddingBottom:33
    }
})