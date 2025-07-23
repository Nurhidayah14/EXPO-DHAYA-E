import { useFonts } from 'expo-font';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const stambukList = Array.from({ length: 130 }, (_, i) => `1058411${String(i + 1).padStart(3, '0')}22`);

const names = [
     "Nurhidayah", "Lestari", "Cahya Ramadhan", "Dewi Sartika", "Eko Prasetyo", 
"Fitriani", "Gilang Mahesa", "Hana Fadila", "Imam Wahyudi", "Jihan Safira"
];

export default function App() {
  const [fontsLoaded] = useFonts({
    // Font statis
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
    MontserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    LexendGigaVariableFont: require('../assets/fonts/LexendGiga-VariableFont_wght.ttf'),
    // Font variabel
    BebasNeueRegula: require('../assets/fonts/BebasNeue-Regular.ttf'),
    SofadiOneRegular: require('../assets/fonts/SofadiOne-Regular.ttf'),
    TapestryRegular: require('../assets/fonts/Tapestry-Regular.ttf'),
    PlaywriteVNGuidesRegular: require('../assets/fonts/PlaywriteVNGuides-Regular.ttf'),
    PlayfairDisplayItalic: require('../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) return null;

  const currentIndex = 153; // 105841115222 = index ke-153 (urutan ke-152)
  const total = stambukList.length;

  // 5 stambuk sebelum (mundur, looping kalau < 0)
  const before = Array.from({ length: 5 }, (_, i) => {
    const idx = (currentIndex - i - 1 + total) % total;
    return { stambuk: stambukList[idx], name: names[idx % names.length] };
  }).reverse();

  // 5 stambuk setelah (naik)
  const after = Array.from({ length: 5 }, (_, i) => {
    const idx = (currentIndex + i + 1) % total;
    return { stambuk: stambukList[idx], name: names[(idx + 5) % names.length] };
  });

  const combined = [...before, ...after];

  const fontFamilies = [
  'LatoItalic',
  'MontserratLight',
  'OpenSansBold',
  'PoppinsSemiBold',
  'LexendGigaVariableFont',
  'BebasNeueRegula',
  'SofadiOneRegular',
  'TapestryRegular',
  'PlaywriteVNGuidesRegular',
  'PlayfairDisplayItalic',
];


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {combined.map((item, index) => (
        <Text
          key={item.stambuk}
          style={{
            fontFamily: fontFamilies[index],
            fontSize: 25,
            marginBottom: 10,
          }}
        >
          {item.name} - {item.stambuk}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 26,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});