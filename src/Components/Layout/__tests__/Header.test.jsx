import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header.jsx";

afterEach(cleanup);

describe("App Header", () => {
  const { asFragment } = render(<Header />);

  // Snapshot
  it("matches snapshot", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests
  it("Displays a title", () => {
    const { getByTestId } = render(<Header />);
    const title = "React Movie Database";
    const appTitle = getByTestId("appHeader");
    expect(appTitle.innerHTML).toBe(title);
  });

  // it("Displays the author", () => {
  //   const { debug, getByText } = render(<Header />);
  //   const author = "Made by Freddie";
  //   const appAuthor = getByText(author);
  //   debug();
  //   expect(appAuthor.innerText).toBe(author);
  // });
});
