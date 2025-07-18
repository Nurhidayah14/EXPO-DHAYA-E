import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';

interface ImageState {
  isAlt: boolean;
  scale: number;
}

// Array URL gambar utama dan alternatif (9 gambar)
const mainImages = [
  'https://i.ibb.co/Ph0RPHy/1.png',
  'https://i.ibb.co/fCfT6Tw/2.png',
  'https://i.ibb.co/sK2YdtY/3.png',
  'https://i.ibb.co/VwkHY2r/4.png',
  'https://i.ibb.co/9yBL7rj/5.png',
  'https://i.ibb.co/gZhHSp1/6.png',
  'https://i.ibb.co/mCTvZHy/7.png',
  'https://i.ibb.co/QpjvK66/8.png',
  'https://i.ibb.co/djZCrKh/9.png',
];

const altImages = [
  'https://i.ibb.co/0DZCWRx/1.png',
  'https://i.ibb.co/tDk6D1z/2.png',
  'https://i.ibb.co/PQyGbCr/3.png',
  'https://i.ibb.co/3TNsydL/4.png',
  'https://i.ibb.co/0ZPQ5Mw/5.png',
  'https://i.ibb.co/p3PH7nk/6.png',
  'https://i.ibb.co/9whCmzr/7.png',
  'https://i.ibb.co/LvTjyr6/8.png',
  'https://i.ibb.co/nB98zJ8/9.png',
];

const Tugas2 = () => {
  // State untuk menyimpan apakah gambar menggunakan versi alternatif dan skala
  const [imageStates, setImageStates] = useState<ImageState[]>(
    mainImages.map(() => ({ isAlt: false, scale: 1 }))
  );

  // Fungsi ketika gambar ditekan
  const handlePress = (index: number) => {
    setImageStates((prevStates) =>
      prevStates.map((item, i) => {
        if (i !== index) return item;

        // Jika sudah skala maksimum (2), tidak ubah lagi
        if (item.scale >= 2) return item;

        const newScale = Math.min(item.scale + 0.2, 2);
        return {
          isAlt: !item.isAlt,
          scale: newScale,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mainImages.map((_, index) => {
        const { isAlt, scale } = imageStates[index];
        const imageSource = isAlt ? altImages[index] : mainImages[index];

        return (
          <Pressable key={index} onPress={() => handlePress(index)}>
            <Image
              source={{ uri: imageSource }}
              style={[styles.image, { transform: [{ scale }] }]}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const imageSize = 100;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 5,
    borderRadius: 8,
  },
});

export default Tugas2;