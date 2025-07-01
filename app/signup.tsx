import React from "react";
import Constants from "expo-constants";
import { Dimensions, StyleSheet, Text, View, Switch } from "react-native";
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
  const [emailMessage, setMessage] = React.useState<string>("");
  const [loginError, setLoginError] = React.useState<string>("");

  const router = useRouter();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  React.useEffect(() => {
    if (email && (!email.includes("@") || !email.includes("."))) {
      setMessage("Digite um email válido.");
      return;
    }
    setMessage("");
  }, [email]);

  const handleSignUp = () => {
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setLoginError("");
      setUserId(foundUser.id);
      router.push(`/users/${foundUser.id}`);
    } else {
      setLoginError("Usuário ou senha inválidos. Verifique suas credenciais.");
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

        {emailMessage !== "" && (
          <Text
            style={emailMessage.includes("✅") ? styles.valid : styles.invalid}
          >
            {emailMessage}
          </Text>
        )}

        <FormInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />

        {loginError !== "" && <Text style={styles.invalid}>{loginError}</Text>}

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

        <CustomButton onPress={handleSignUp} disabled={!isFormValid}>
          SIGN IN
        </CustomButton>
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
  valid: {
    color: "green",
    fontSize: 14,
    alignSelf: "flex-start",
    marginTop: -10,
    marginBottom: 10,
  },
  invalid: {
    color: "#BB342F",
    fontSize: 14,
    alignSelf: "flex-start",
    marginTop: -10,
    marginBottom: 10,
  },
});
