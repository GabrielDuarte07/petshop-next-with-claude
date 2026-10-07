import { Cat, Dog, PawPrint, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

/** Landing page hero: headline, call-to-action buttons and illustration. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-teal-100 to-teal-50/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-teal-700 shadow-sm">
            <Star className="size-4 fill-teal-500 text-teal-500" aria-hidden />
            Trusted by 2,000+ pet parents
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-teal-900 sm:text-6xl">
            Happy pets, <span className="text-teal-600">happy home.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-teal-900/70">
            Grooming, veterinary care, daycare and boarding, all under one roof
            and delivered with love by people who adore animals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-teal-600 text-white hover:bg-teal-700"
            >
              <a href="#contact">Book an appointment</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-teal-600 text-teal-700 hover:bg-teal-50"
            >
              <a href="#services">See our services</a>
            </Button>
          </div>
        </div>

        <div
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[3rem] bg-teal-600"
          aria-hidden
        >
          <PawPrint className="absolute right-8 top-8 size-12 text-teal-300" />
          <PawPrint className="absolute bottom-8 left-8 size-16 -rotate-12 text-teal-400" />
          <Dog className="size-40 text-white" strokeWidth={1.25} />
          <Cat
            className="absolute bottom-12 right-10 size-24 text-teal-100"
            strokeWidth={1.25}
          />
        </div>
      </div>
    </section>
  );
}
