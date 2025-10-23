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
      <div className="bg-background relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <AboutSection />
          <TrainingSection />
          <ScheduleSection />
          <FacilitiesSection />
          <GallerySection />
          <CommunitySection />
          <EventsSection />
          <LocationSection />
          <CTASection />
        </div>
      </div>
    </main>
  )
}
