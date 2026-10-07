import {
  Bath,
  Clock,
  HeartPulse,
  Home as HomeIcon,
  PawPrint,
  Scissors,
  type LucideIcon,
} from "lucide-react";

import type { Service, ServiceIcon } from "../_data-access/get-services";

const iconByName: Record<ServiceIcon, LucideIcon> = {
  grooming: Bath,
  veterinary: HeartPulse,
  daycare: Clock,
  boarding: HomeIcon,
  styling: Scissors,
  shop: PawPrint,
};

type ServiceCardProps = {
  /** Service to display. */
  service: Service;
};

/** Presentational card describing a single petshop service. */
export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, price, icon } = service;
  const Icon = iconByName[icon];

  return (
    <li className="flex flex-col rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="flex size-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-teal-900">{title}</h3>
      <p className="mt-2 flex-1 text-teal-900/70">{description}</p>
      <p className="mt-4 font-semibold text-teal-700">{price}</p>
    </li>
  );
}
