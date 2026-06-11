import HeroSection from "@/components/sections/HeroSection";
import RatingDashboard from "@/components/sections/RatingDashboard";
import SkillsArena from "@/components/sections/SkillsArena";
import MatchHistory from "@/components/sections/MatchHistory";
import TrophyCabinet from "@/components/sections/TrophyCabinet";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import ContactAndHeatmap from "@/components/sections/ContactAndHeatmap";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <HeroSection />
      <RatingDashboard />
      <SkillsArena />
      <MatchHistory />
      <TrophyCabinet />
      <JourneyTimeline />
      <ContactAndHeatmap />
    </main>
  );
}
