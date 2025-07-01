import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useState } from "react";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import ProfilePhoto from "../../../components/ProfilePhoto";
import { travelContents, mockUsers } from "../../../mocks/data.json";
import { useActionSheet } from "@expo/react-native-action-sheet";
import React from "react";

export default function TravelPage() {
  const { id } = useLocalSearchParams();
  const travelId = Array.isArray(id) ? id[0] : id;

  const isValidId = travelId && !isNaN(Number(travelId));
  const userId = Number(travelId);
  const user = mockUsers.find((u) => Number(u.id) === userId);

  const [userTravels, setUserTravels] = useState(
    travelContents.filter((travelContent) => travelContent.user_id === userId)
  );

  const maxLength = 120;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const { showActionSheetWithOptions } = useActionSheet();

  const options = ["Delete", "Save", "Cancel"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  const openActions = (id: number) => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title: "Ações do Card",
        message: "Escolha uma ação para este card",
      },
      (buttonIndex) => {
        if (buttonIndex === destructiveButtonIndex) {
          setUserTravels((prev) => prev.filter((item) => item.id !== id));
          //? FILTRAR OS DELETADOS
        } else if (buttonIndex === 1) {
          console.log("Save selecionado para id:", id);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Title title="My Travels" />
        {user?.photo && <ProfilePhoto uri={user.photo} />}
      </View>
      <Title
        subtitle={
          isValidId
            ? `Viagens do usuário ID: ${userId}`
            : "ID inválido ou ausente"
        }
      />

      {isValidId && userTravels.length > 0 ? (
        <FlatList
          data={userTravels}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/users/trips/${item.id}`} asChild>
              <Pressable onLongPress={() => openActions(item.id)}>
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
