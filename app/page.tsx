import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TrainingSection } from "@/components/training-section"
import { ScheduleSection } from "@/components/schedule-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { GallerySection } from "@/components/gallery-section"
import { CommunitySection } from "@/components/community-section"
import { EventsSection } from "@/components/events-section"
import { LocationSection } from "@/components/location-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <ScheduleSection />
      <FacilitiesSection />
      <GallerySection />
      <CommunitySection />
      <EventsSection />
      <LocationSection />
      <CTASection />
    </main>
  )
}
