import React from "react";
import { render } from "@testing-library/react";
import Homapage from "./pages/Homapage";

test("renders learn react link", () => {
  const { getByText } = render(<Homapage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
