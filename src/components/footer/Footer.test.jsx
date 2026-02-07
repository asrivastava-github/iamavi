import React from "react";
import {render, screen} from "@testing-library/react";
import Footer from "./Footer";
import StyleContext from "../../contexts/StyleContext";

vi.mock("react-easy-emoji", () => ({
  default: (input) => input
}));

const renderWithContext = (component) => {
  return render(
    <StyleContext.Provider value={{isDark: false, changeTheme: () => {}}}>
      {component}
    </StyleContext.Provider>
  );
};

describe("Footer", () => {
  it("renders 'Made with' text containing 'Avinash Chandra Srivastava'", () => {
    renderWithContext(<Footer />);
    expect(
      screen.getByText(/Avinash Chandra Srivastava/i)
    ).toBeInTheDocument();
  });
});
