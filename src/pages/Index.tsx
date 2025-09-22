import Hero from "@/components/sections/Hero";
import Scripts from "@/components/sections/Scripts";
import Production from "@/components/sections/Production";
import ProductPlacement from "@/components/sections/ProductPlacement";
import Events from "@/components/sections/Events";
import Contacts from "@/components/sections/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Scripts />
      <Production />
      <ProductPlacement />
      <Events />
      <Contacts />
    </div>
  );
};

export default Index;
