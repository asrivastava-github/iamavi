import React from "react";
import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import StyleContext from "../../contexts/StyleContext";

vi.mock("react-easy-emoji", () => ({
  default: (input) => input
}));

vi.mock("lottie-react", () => ({
  default: () => <div data-testid="lottie" />
}));

const renderWithContext = (component) => {
  return render(
    <StyleContext.Provider value={{isDark: false, changeTheme: () => {}}}>
      {component}
    </StyleContext.Provider>
  );
};

describe("Greeting", () => {
  it("renders greeting title 'Hi all, I'm Avinash'", () => {
    renderWithContext(<Greeting />);
    expect(screen.getByText(/Hi all, I'm Avinash/)).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    renderWithContext(<Greeting />);
    expect(
      screen.getByText(/A passionate Platform Engineer/)
    ).toBeInTheDocument();
  });

  it("has a 'Contact me' button", () => {
    renderWithContext(<Greeting />);
    expect(screen.getByText("Contact me")).toBeInTheDocument();
  });
});
