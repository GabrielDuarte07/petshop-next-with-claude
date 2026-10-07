import { Clock, MapPin, PawPrint, Phone } from "lucide-react";

/** Footer with the brand and contact details (target of the "Book" links). */
export function SiteFooter() {
  return (
    <footer id="contact" className="bg-teal-800 text-teal-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-lg font-semibold">
          <PawPrint className="size-5" aria-hidden />
          PetCare
        </p>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <span className="flex items-center gap-2">
            <Phone className="size-4" aria-hidden /> (555) 123-4567
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden /> 123 Happy Paws St.,
            Springfield
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4" aria-hidden /> Mon–Sat, 8am–6pm
          </span>
        </div>
      </div>
    </footer>
  );
}
