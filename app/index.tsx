import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 3;
const imageSize = width / numColumns - 10;

// Gambar utama
const mainImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1XsNfIizwWFEn88paZUMAPPbyrO-NN3pzg&s=1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXMTY9oIoj2sCREKMBhGV7IhHO5c1OidrRg&s=2',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgd42TOgOHS5h89YC8DblEUKFBTHr139oUcA&s=3',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25LsWbF327Fqw2qvaTdNa_Csq5qshxUtu8g&s=4',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8lyb1JF6G1t4C2ZjZbQfHrQBKoGs1jM7IQ&s=5',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0MSuFi0Q1ByyivJt748hmnTFbRXhhMnQIw&s=6',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WHJgzaig4cgtcpPZYpGFeuu3KkX4q6WwcQ&s=7',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdLuOIfj9QEk45q-9epbt-AGuLnnxoFnQRA&s=8',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2nbnqGo20fuq6Wbj_4qq_Efp6w3VuH-PEmXh0lJFRI59myPDEkzqrjWQGp7KFxpI51Y&usqp=CAU=9',
];

// Gambar alternatif
const altImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdyeAST_pagLDYl02LtEkGJCWoFJ1FdLdog&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_mSy-TD-tUtVpxCL6Ri4sIO4C8xJ0wl77g&s=11',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VV8rX9jXr7zQ84DpbxkSY-o-AzE3X_RjIw&s=12',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguylPbKIbClkVEyoM4E18gPNlxl5eIVS1IQ&s=13',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwB_RMiwzKuDPYhBs4sFUi5Bpt-oGHcurDg&s=14',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45BtbUKdysPQlHNLCnza5Zz97n0A0BCHJPw&s=15',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4yhOXh3_D00b9t-ew73CchdOYWjhxocIEg&s=16',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4XYwcwAKjyriyZHcx4MQwmAlDH-53ExUUA&s=17',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuUqPbUW21RoaisGUjW9daBV0XZwX2HJiwg&s=18',
];

interface ImageState {
  isAlt: boolean;
  scale: number;
}

export default function GridGambar() {
  const [imageStates, setImageStates] = useState<ImageState[]>(
    mainImages.map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index: number) => {
    setImageStates((prevStates) =>
      prevStates.map((state, i) => {
        if (i !== index) return state;
        const newScale = Math.min(state.scale * 1.2, 2);
        return {
          isAlt: !state.isAlt,
          scale: newScale,
        };
      })
    );
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < mainImages.length; i += 3) {
      const rowItems = mainImages.slice(i, i + 3).map((_, j) => {
        const index = i + j;
        const imageUri = imageStates[index].isAlt ? altImages[index] : mainImages[index];
        const scaleStyle = { transform: [{ scale: imageStates[index].scale }] };
        return (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(index)}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: imageUri }} style={[styles.image, scaleStyle]} />
            </View>
          </TouchableWithoutFeedback>
        );
      });
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems}
        </View>
      );
    }
    return rows;
  };

  return <View style={styles.container}>{renderRows()}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  imageWrapper: {
    margin: 5,
    width: imageSize,
    height: imageSize,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
