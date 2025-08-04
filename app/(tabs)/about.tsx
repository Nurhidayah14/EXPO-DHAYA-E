import { ScrollView, StyleSheet, Text } from 'react-native';

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dirancang untuk memenuhi tugas perkuliahan dengan menggunakan Expo Router.
        Aplikasi ini terdiri dari 3 halaman :
      </Text>
      <Text style={styles.item}>1. Home: Menampilkan Informasi Tentang Unismuh Makassar </Text>
      <Text style={styles.item}>2. About: Menjelaskan Tujuan dan Fungsi Aplikasi </Text>
      <Text style={styles.item}>3. Profil: Menampilkan Data Diri Mahasiswa Pembuat Aplikasi </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    fontSize: 15,
    marginVertical: 4,
  }
});