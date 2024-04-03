import React from "react";
import { render } from "@testing-library/react";
import { Tile } from "../../components/Tile";

describe("Tile component", () => {
  test("it loads tile component", async () => {
    const setTile = jest.fn();
    const { getByText } = render(
      <Tile
        title="Tile title"
        description="Tile description"
        image="dummy image"
      />
    );
    expect(getByText("Tile title")).toBeInTheDocument();
  });
});
