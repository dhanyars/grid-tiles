import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import { Search } from "../../components/Search";
import tiles from "../../mocks/tile";
import userEvent from "@testing-library/user-event";

describe("Search component", () => {
  test("it loads search component", async () => {
    const setTile = jest.fn();
    const setCurrentPage = jest.fn();
    const { getByTestId } = render(<Search tile={tiles} setTile={setTile} setCurrentPage={setCurrentPage}/>);
    expect(getByTestId("search")).toBeInTheDocument();
  });
});
