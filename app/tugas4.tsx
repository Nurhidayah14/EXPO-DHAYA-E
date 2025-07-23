import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function ReactNative4Nurhidayah() {
    return (
        <SafeAreaView style={jeryVisual.latar}>
            <ScrollView contentContainerStyle={jeryVisual.konten}>
                <Text style={[jeryVisual.judul, {fontFamily: 'SpaceMono-Regular'}]}>
                    Project-Nurhidayah
                </Text>
                <Text style={jeryVisual.subJudul}>
                    Refrensi Stambuk: 105841115222
                </Text>
                <View style={jeryVisual.pemisah} />
                 {/* --- 5 NAMA DENGAN FONT STATIS ---*/}
                <Text style={[jeryVisual.itemTeks, {fontFamily: 'SofadiOne-Regular' }]}>
                    Andi Fiqratun{'\n'}(105841117822)
                </Text>
                 <Text style={[jeryVisual.itemTeks, {fontFamily: 'Tapestry-Regular' }]}>
                    Syamsul Alam{'\n'}(105841117922)
                </Text>
                  <Text style={[jeryVisual.itemTeks, {fontFamily: 'PlayfairDisplay-Italic-VariableFont_wght' }]}>
                    Muh. Alfian{'\n'}(105841118122)
                </Text>
                 <Text style={[jeryVisual.itemTeks, {fontFamily: 'PoiretOne-Regular' }]}>
                    Nurul Habibah{'\n'}(105841108922)
                </Text>
                 <Text style={[jeryVisual.itemTeks, {fontFamily: 'PlaywriteVNGuides-Regular' }]}>
                   Zulfitra{'\n'}(105841115022)
                </Text>
                {/* --- 5 NAMA DENGAN FONT STATIS ---*/}
                <Text style={[jeryVisual.itemTeks, {fontFamily: 'AlumniSansPrinstripe-Italic' , fontWeight: '300' }]}>
                     Muh. Raihan Ramadhan{'\n'}(105841115322) 
                </Text> 
                <Text style={[jeryVisual.itemTeks, {fontFamily: 'LexendGiga-VariableFont_wght' , fontWeight: '400' }]}>
                     Nur Hidayat{'\n'}(105841115422) 
                </Text>
                <Text style={[jeryVisual.itemTeks, {fontFamily: 'BebasNeue-Regular' , fontWeight: '500' }]}>
                    Sitti Nurul Annisa{'\n'}(105841115522) 
                </Text> 
                <Text style={[jeryVisual.itemTeks, {fontFamily: 'Inter-Italic-VariableFont_opsz,wght ' , fontWeight: '700' }]}>
                     Hasmaniar{'\n'}(105841115722) 
                </Text>
                <Text style={[jeryVisual.itemTeks, {fontFamily: 'BitcountPropDouble-VariableFont_C' , fontWeight: '900' }]}>
                    Riski Riyanto{'\n'}(105841115522) 
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}


const jeryVisual = StyleSheet.create({
    latar: {
        flex: 1,
        backgroundColor: '#1F2937',
    },
    konten: {
        paddingHorizontal: 1,
        paddingVertical: 25,
    },
    judul: {
        fontSize: 30,
        fontFamily: 'PlayfairDisplay-Italic-VariableFont_wght',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 10,
    },
    subJudul: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#A0AEC0',
        textAlign: 'center',
        marginBottom: 15,
    },
    itemTeks: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
        backgroundColor: '#374151',
        borderColor: '#485563',
        borderWidth: 1,
        borderRadius: 6,
        textAlign: 'center',
        marginBottom: 18,
        padding: 12,
        lineHeight: 28,
    },
    pemisah: {
        height: 1,
        backgroundColor: '#485563',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20,
    },
});