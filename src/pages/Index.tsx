import InstinctHeader from "@/components/InstinctHeader";
import InstinctMain from "@/components/InstinctMain";
import InstinctFooter from "@/components/InstinctFooter";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-instinct-white relative">
      <AnimatedBackground />
      <InstinctHeader />
      <InstinctMain />
      <InstinctFooter />
    </div>
  );
};

export default Index;
