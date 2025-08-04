import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfilPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Foto 1.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>Nama: Nurhidayah</Text>
      <Text style={styles.detail}>NIM: 105841115222</Text>
      <Text style={styles.detail}>Kelas: 6E</Text>
      <Text style={styles.detail}>Jurusan: Informatika</Text>
      <Text style={styles.detail}>Fakultas: Teknik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    marginTop: 4,
  },
});