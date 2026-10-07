import type { Service } from "../_data-access/get-services";
import { ServiceCard } from "./service-card";

type ServicesProps = {
  /** Services to list in the grid. */
  services: Service[];
};

/** Services section: heading plus a responsive grid of service cards. */
export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-teal-900/70">
          Everything your best friend needs to stay happy, healthy and looking
          great.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </ul>
    </section>
  );
}
