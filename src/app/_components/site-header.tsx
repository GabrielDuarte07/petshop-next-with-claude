import { PawPrint } from "lucide-react";

import { Button } from "@/components/ui/button";

/** Top navigation bar with the brand and the booking button. */
export function SiteHeader() {
  return (
    <header className="border-b border-teal-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-teal-700">
          <PawPrint className="size-6" aria-hidden />
          PetCare
        </a>
        <Button asChild className="bg-teal-600 text-white hover:bg-teal-700">
          <a href="#contact">Book now</a>
        </Button>
      </div>
    </header>
  );
}
