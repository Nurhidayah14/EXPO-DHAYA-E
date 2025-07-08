import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      
      {/* Persegi panjang */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzHznK5BSPwfzNFZLWC7HQkxWap_n4VEYbw&s' }}
          style={styles.image}
        />
        <Text style={styles.label}>Nurhidayah</Text>
      </View>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Pill */}
      <View style={styles.pill}>
        <Text style={styles.emoji}>☁</Text>
        <Text style={styles.stambuk}>105841115222</Text>
      </View>

      {/* Nama */}
      <Text style={styles.name}>Nurhidayah</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
  marginTop: 5,
  fontSize: 14,
  fontWeight: 'bold',
  color: '#F5F5DC', // krem terang
  },

  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: "center",
    alignItems: "center",
  },

  rectangle: {
    width: 200,
    height: 140,
    backgroundColor: '#8B4513', // Cokelat
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 40,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFD700', // Emas
    marginBottom: 40,
  },

  pill: {
    backgroundColor: '#228B22', // Hijau daun
    borderRadius: 70,
    paddingVertical: 10,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },

  emoji: {
    fontSize: 50,
    color: '#E0FFFF',
    marginRight: 8,
  },

  stambuk: {
    color: '#D0F0FD',
    fontWeight: 'bold',
    marginTop: 2,
    fontSize: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
  },
});