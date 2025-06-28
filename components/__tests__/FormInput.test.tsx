import React from "react";
import { render } from "@testing-library/react-native";
import FormInput from "../FormInput";

describe("FormInput", () => {
  it("renderiza o TextInput", () => {
    const { getByTestId } = render(<FormInput testID="input" />);
    expect(getByTestId("input")).toBeTruthy();
  });

  it("mostra mensagem de erro quando passado", () => {
    const errorMessage = "Campo obrigatório";
    const { getByText } = render(<FormInput error={errorMessage} />);
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it("não mostra mensagem de erro quando não passado", () => {
    const { queryByText } = render(<FormInput />);
    expect(queryByText(/./)).toBeNull();
  });
});
