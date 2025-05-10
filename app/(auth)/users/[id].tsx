import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import { travelContents } from "../../../mocks/data.json";

export default function TravelPage() {
  const { id } = useLocalSearchParams();
  const travelId = Array.isArray(id) ? id[0] : id;

  const isValidId = travelId && !isNaN(Number(travelId));

  const userId = Number(travelId);

  const filteredTravelContents = travelContents.filter(
    (travelContent) => travelContent.user_id === userId
  );

  const maxLength = 120;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <View style={styles.container}>
      <Title title="My Travels" />
      <Title
        subtitle={
          isValidId
            ? `Viagens do usuário ID: ${userId}`
            : "ID inválido ou ausente"
        }
      />

      {isValidId && filteredTravelContents.length > 0 ? (
        <FlatList
          data={filteredTravelContents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/users/trips/${item.id}`} asChild>
              <Pressable>
                <Card style={styles.card}>
                  <Text style={styles.cardTitle}>{item.titulo}</Text>
                  <Text style={styles.cardBody}>
                    {truncateText(item.corpo, maxLength)}
                  </Text>
                  <Text style={styles.cardDate}>
                    Atualizado em: {new Date(item.atualizado).toLocaleString()}
                  </Text>
                </Card>
              </Pressable>
            </Link>
          )}
        />
      ) : (
        <Text style={styles.text}>Viagem não encontrada.</Text>
      )}

      <Link href="/">
        <Title subtitle="Voltar para a Home" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardBody: {
    fontSize: 16,
    marginVertical: 5,
  },
  cardDate: {
    fontSize: 14,
    color: "#888",
  },
  text: {
    fontSize: 18,
    marginVertical: 16,
  },
});
