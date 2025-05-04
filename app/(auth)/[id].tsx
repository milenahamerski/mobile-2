import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Title from "../../components/Title";

export default function UserPage() {
  const { id } = useLocalSearchParams();
  const userId = Array.isArray(id) ? id[0] : id;

  const isValidId = userId && !isNaN(Number(userId));

  //? USO DO LINK

  return (
    <View style={styles.container}>
      <Title title="Página do Usuário" />
      <Title
        subtitle={
          isValidId ? `ID do usuário: ${userId}` : "ID inválido ou ausente"
        }
      />

      <Link href="/">
        <Title subtitle="Voltar para a Home" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 16,
  },
});
