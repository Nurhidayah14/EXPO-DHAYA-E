import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Text style={styles.description}>
        Unismuh Makassar adalah antara institusi pendidikan tinggi swasta yang terkemuka di Indonesia Timur.
        Ia terletak di Makassar, Sulawesi Selatan. Universiti ini komited terhadap pendidikan yang berkualiti 
        serta nilai-nilai keislaman yang mendorong pembentukan karakter mahasiswa yang berakhlak mulia.
      </Text>
      <Image
        source={require('../../assets/images/Foto 2.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
