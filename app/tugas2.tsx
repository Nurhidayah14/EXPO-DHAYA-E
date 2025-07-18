import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 3;
const imageSize = width / numColumns - 10;

const mainImages = [
   'https://picsum.photos/id/1005/200',
  'https://picsum.photos/id/1010/200',
  'https://picsum.photos/id/1016/200',
  'https://picsum.photos/id/1022/200',
  'https://picsum.photos/id/1025/200',
  'https://picsum.photos/id/1031/200',
  'https://picsum.photos/id/1035/200',
  'https://picsum.photos/id/1040/200',
  'https://picsum.photos/id/1045/200',
];

const altImages = [
  'https://picsum.photos/id/1060/200',
  'https://picsum.photos/id/1061/200',
  'https://picsum.photos/id/1062/200',
  'https://picsum.photos/id/1063/200',
  'https://picsum.photos/id/1064/200',
  'https://picsum.photos/id/1065/200',
  'https://picsum.photos/id/1066/200',
  'https://picsum.photos/id/1067/200',
  'https://picsum.photos/id/1068/200',
];

interface ImageState {
  isAlt: boolean;
  scale: number;
}

export default function Tugas2() {
  const [imageStates, setImageStates] = useState<ImageState[]>(
    mainImages.map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (index: number) => {
    setImageStates((prevStates) =>
      prevStates.map((item, i) => {
        if (i !== index) return item;
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
      {mainImages.map((main, index) => {
        const imageSource = imageStates[index].isAlt
          ? { uri: altImages[index] }
          : { uri: main };

        const scaleStyle = {
          transform: [{ scale: imageStates[index].scale }],
        };

        return (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(index)}>
            <View style={styles.imageWrapper}>
              <Image
                source={imageSource}
                style={[styles.image, scaleStyle]}
                resizeMode="cover"
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'center',
  },
  imageWrapper: {
    margin: 5,
    width: imageSize,
    height: imageSize,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});