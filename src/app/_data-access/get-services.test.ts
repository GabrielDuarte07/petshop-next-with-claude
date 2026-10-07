import { getServices } from "./get-services";

describe("getServices", () => {
  it("returns services with unique titles", async () => {
    const services = await getServices();
    const titles = services.map((service) => service.title);

    expect(services.length).toBeGreaterThan(0);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
