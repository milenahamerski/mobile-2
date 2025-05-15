import React from "react";
import Constants from "expo-constants";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Switch,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { mockUsers } from "../mocks/data.json";
import Card from "../components/Card";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Flex from "../components/Flex";
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";

const { height: screenHeight } = Dimensions.get("window");

export default function SignUpForm() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [subscribe, setSubscribe] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = () => {
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUserId(foundUser.id);
      router.push(`/users/${foundUser.id}`);
    } else {
      // Alert.alert(
      //   "Erro",
      //   "Usuário não encontrado. Verifique suas credenciais."  //! FAZER AS TRATATIVAS DE SENHA
      // );
    }
  };

  return (
    <View style={styles.container}>
      <Logo width={70} height={70} style={{ marginTop: 30 }} />

      <Card style={styles.card}>
        <Title
          title="Welcome Back!"
          titleStyle={{ color: "#FF9900" }}
          style={{ alignSelf: "flex-start", marginBottom: 10 }}
        />

        <FormInput
          error=""
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />

        <Flex
          direction="row"
          align="center"
          justify="space-between"
          style={{ alignSelf: "flex-start" }}
        >
          <Text>Remember me</Text>
          <Switch
            value={subscribe}
            onValueChange={setSubscribe}
            style={{ marginLeft: 20 }}
          />
        </Flex>

        <CustomButton onPress={handleSignUp}>SIGN IN</CustomButton>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    gap: 16,
    alignSelf: "stretch",
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
});
