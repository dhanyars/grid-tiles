import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { Search } from "../../components/Search";
import tiles from "../../mocks/tile";
import userEvent from "@testing-library/user-event";

describe("Search component", () => {
  test("it loads search component", async () => {
    const setTile = jest.fn();
    const { getByTestId } = render(<Search tile={tiles} setTile={setTile} />);
    expect(getByTestId("search")).toBeInTheDocument();
  });

  test("it loads search component", async () => {
    const setTile = jest.fn();
    const handleSearchInput = jest.fn();
    const user = userEvent.setup();
    const { getByTestId } = render(<Search tile={tiles} setTile={setTile} />);
    const input = screen.getByTestId("search");
    await user.type(input, "Level up");
    // fireEvent.change(input, { target: { value: "m" } });

    expect(handleSearchInput).toHaveBeenCalledTimes(1);
  });
});
