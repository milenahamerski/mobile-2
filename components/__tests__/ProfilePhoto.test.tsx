import React from "react";
import { render } from "@testing-library/react-native";
import ProfilePhoto from "../ProfilePhoto";

describe("ProfilePhoto", () => {
  it("renderiza a imagem com a URI correta", () => {
    const uri = "https://example.com/photo.jpg";
    const { getByTestId } = render(<ProfilePhoto uri={uri} />);

    const image = getByTestId("profile-image");
    expect(image.props.source).toEqual({ uri });
  });

  it("aplica estilo de borda arredondada", () => {
    const uri = "https://example.com/photo.jpg";
    const { getByTestId } = render(<ProfilePhoto uri={uri} />);

    const image = getByTestId("profile-image");
    expect(image.props.style).toEqual(
      expect.objectContaining({
        width: 50,
        height: 50,
        borderRadius: 40,
      })
    );
  });
});
