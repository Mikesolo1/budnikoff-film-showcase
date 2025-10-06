import InstinctHeader from "@/components/InstinctHeader";
import InstinctMain from "@/components/InstinctMain";
import InstinctFooter from "@/components/InstinctFooter";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-instinct-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <InstinctHeader />
        <InstinctMain />
        <InstinctFooter />
      </div>
    </div>
  );
};

export default Index;
