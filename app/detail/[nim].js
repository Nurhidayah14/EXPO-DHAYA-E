// app/detail/[nim].js
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import daftarMahasiswa from "../data/mahasiswa";

export default function HalamanDetail() {
  const { nim } = useLocalSearchParams();

  // cari data mahasiswa berdasarkan nim
  const mhsDetail = daftarMahasiswa.find((item) => item.nim === nim);

  if (!mhsDetail) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.infoError}>Data mahasiswa tidak tersedia.</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: mhsDetail.fotoProfil || mhsDetail.foto }} style={styles.foto} />
      <Text style={styles.nama}>{mhsDetail.namaLengkap || mhsDetail.nama}</Text>
      <Text style={styles.kode}>NIM: {mhsDetail.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 18,
  },
  nama: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  kode: {
    fontSize: 18,
    marginTop: 8,
    color: "#333",
  },
  infoError: {
    fontSize: 20,
    fontWeight: "600",
    color: "red",
  },
});
