import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Grid } from "../../routes/grid";
import { Search } from "../../components/Search";
import tiles from "../../mocks/tile";

describe("Grid route", () => {
  test("it loads grid routes", async () => {
    const { getByTestId } = render(<Grid />);
    expect(getByTestId("search")).toBeInTheDocument();
  });
});
