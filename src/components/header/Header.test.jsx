import React from "react";
import {render, screen} from "@testing-library/react";
import Header from "./Header";
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

describe("Header", () => {
  it("renders the logo with username 'iamavi'", () => {
    renderWithContext(<Header />);
    expect(screen.getByText("iamavi")).toBeInTheDocument();
  });

  it("shows nav links for Skills, Work Experiences, Projects, Achievements, Blogs, Contact Me", () => {
    renderWithContext(<Header />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Work Experiences")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Achievements")).toBeInTheDocument();
    expect(screen.getByText("Blogs")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("logo link uses the BASE_URL", () => {
    renderWithContext(<Header />);
    const logoLink = screen.getByText("iamavi").closest("a");
    expect(logoLink).toHaveAttribute("href", import.meta.env.BASE_URL);
  });
});
