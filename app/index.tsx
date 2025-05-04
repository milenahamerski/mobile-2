import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import { homeText } from "../mocks/data";
import Flex from "../components/Flex";
import { useRouter } from "expo-router";

//? USO DO USEROUTER

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Logo width={250} height={250} />
      <Flex justify="center" align="center" direction="column" gap={30}>
        <Title
          center={true}
          title={homeText.title}
          subtitle={homeText.subtitle}
        />
      </Flex>

      <CustomButton onPress={() => router.push("/signup")}>
        <Text>Clique aqui e se inscreva</Text>
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
});
