import React from "react";
import { render } from "@testing-library/react-native";
import FormInput from "../FormInput";

describe("FormInput", () => {
  //?----------------Renderiza o comp com a propriedade testID="input" e verifica se o TextInput aparece na tela.

  it("renderiza o TextInput", () => {
    const { getByTestId } = render(<FormInput testID="input" />);
    expect(getByTestId("input")).toBeTruthy();
  });

  //?--------------Renderiza o comp passando a prop error com uma mensagem.
  it("mostra mensagem de erro quando passado", () => {
    const errorMessage = "Campo obrigatório";
    const { getByText } = render(<FormInput error={errorMessage} />);
    expect(getByText(errorMessage)).toBeTruthy();
  });

  //?--------------Renderiza o componente sem a prop error
  it("não mostra mensagem de erro quando não passado", () => {
    const { queryByText } = render(<FormInput />);
    expect(queryByText(/./)).toBeNull();
  });
});
