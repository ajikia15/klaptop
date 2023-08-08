import AboutUs from "@/components/_homepage/AboutUs";
import Hero from "@/components/_homepage/Hero";
import HomeCollection from "@/components/_homepage/HomeCollection";
export default async function Home() {
  return (
    <div>
      <Hero />
      <h4 className="text-sm font-bold text-third">
        T R E N D I N G
      </h4>
      <HomeCollection contentType={"gaming"} />
      <HomeCollection contentType={"coding"} />
      <AboutUs />
    </div>
  );
}
