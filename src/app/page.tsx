import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { getServices } from "./_data-access/get-services";

export default async function Home() {
  const services = await getServices();

  return (
    <div className="flex flex-1 flex-col bg-teal-50/40">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services services={services} />
      </main>
      <SiteFooter />
    </div>
  );
}
