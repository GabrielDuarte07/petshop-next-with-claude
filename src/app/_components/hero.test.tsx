import { render, screen } from "@testing-library/react";

import { Hero } from "./hero";

describe("Hero", () => {
  it("renders the headline and call-to-action links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /happy pets/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /book an appointment/i }),
    ).toHaveAttribute("href", "#contact");
    expect(
      screen.getByRole("link", { name: /see our services/i }),
    ).toHaveAttribute("href", "#services");
  });
});
