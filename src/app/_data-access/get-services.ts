export type ServiceIcon =
  | "grooming"
  | "veterinary"
  | "daycare"
  | "boarding"
  | "styling"
  | "shop";

export type Service = {
  title: string;
  description: string;
  price: string;
  icon: ServiceIcon;
};

const services: Service[] = [
  {
    title: "Bath & Grooming",
    description:
      "Gentle baths, haircuts and nail trimming with pet-safe products.",
    price: "From $35",
    icon: "grooming",
  },
  {
    title: "Veterinary Care",
    description:
      "Check-ups, vaccinations and preventive care by licensed vets.",
    price: "From $50",
    icon: "veterinary",
  },
  {
    title: "Daycare",
    description: "Supervised play and socialization while you are at work.",
    price: "From $25/day",
    icon: "daycare",
  },
  {
    title: "Boarding",
    description:
      "Cozy, comfortable stays with daily walks and plenty of cuddles.",
    price: "From $40/night",
    icon: "boarding",
  },
  {
    title: "Styling & Spa",
    description:
      "Breed-specific cuts, teeth brushing and relaxing spa treatments.",
    price: "From $45",
    icon: "styling",
  },
  {
    title: "Pet Shop",
    description: "Quality food, toys and accessories for every size and breed.",
    price: "Visit our store",
    icon: "shop",
  },
];

/** Returns the services offered by the petshop (static for now; swap for a DB query later). */
export async function getServices(): Promise<Service[]> {
  return services;
}
