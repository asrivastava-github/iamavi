import React from "react";
import {render, screen} from "@testing-library/react";
import Blogs from "./Blogs";
import StyleContext from "../../contexts/StyleContext";
import {blogSection} from "../../portfolio";

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

describe("Blogs", () => {
  it("renders 'Blogs' heading", () => {
    renderWithContext(<Blogs />);
    expect(screen.getByText("Blogs")).toBeInTheDocument();
  });

  it("renders blog card titles from portfolio.js", () => {
    renderWithContext(<Blogs />);
    blogSection.blogs.forEach((blog) => {
      expect(screen.getByText(blog.title)).toBeInTheDocument();
    });
  });
});
