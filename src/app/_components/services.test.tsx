import { render, screen } from "@testing-library/react";

import type { Service } from "../_data-access/get-services";
import { Services } from "./services";

const services: Service[] = [
  {
    title: "Daycare",
    description: "Supervised play.",
    price: "From $25/day",
    icon: "daycare",
  },
  {
    title: "Boarding",
    description: "Cozy stays.",
    price: "From $40/night",
    icon: "boarding",
  },
];

describe("Services", () => {
  it("renders one card per service", () => {
    render(<Services services={services} />);

    expect(
      screen.getByRole("heading", { level: 2, name: /our services/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(services.length);
    expect(
      screen.getByRole("heading", { level: 3, name: "Boarding" }),
    ).toBeInTheDocument();
    expect(screen.getByText("From $25/day")).toBeInTheDocument();
  });
});
