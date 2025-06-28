import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "../CustomButton";
import { Text } from "react-native";

describe("CustomButton", () => {
  //?------------- Testa renderização quando children é string simples
  it("render c/ child do tipo string", () => {
    const { getByText } = render(
      <CustomButton onPress={() => {}}>Clique</CustomButton>
    );
    expect(getByText("Clique")).toBeTruthy();
  });

  //?------------- Testa renderização quando children é um componente React (ex: <Text>)
  it("renderiza corretamente com children que não são string", () => {
    const { getByText } = render(
      <CustomButton onPress={() => {}}>
        <Text>Botão com componente</Text>
      </CustomButton>
    );

    expect(getByText("Botão com componente")).toBeTruthy();
  });

  //?------------- Testa se a função onPress é chamada ao clicar no botão
  it("chama o onPress", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton onPress={onPressMock}>Clique</CustomButton>
    );

    fireEvent.press(getByText("Clique"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  //?------------- Testa se a função onPress não é chamada quando o botão está desabilitado
  it("nao chama onPress quando disabled", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton onPress={onPressMock} disabled>
        Clique
      </CustomButton>
    );

    fireEvent.press(getByText("Clique"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
