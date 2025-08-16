// app/index.js
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import daftarMahasiswa from "../data/mahasiswa";

export default function Beranda() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Daftar Mahasiswa</Text>
      <FlatList
        data={daftarMahasiswa}
        keyExtractor={(mhs) => mhs.nim}
        renderItem={({ item }) => (
          <Link href={`/detail/${item.nim}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Ionicons name="person-circle-outline" size={24} color="#000" />
              <Text style={styles.label}>{item.namaLengkap || item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#000",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
});
