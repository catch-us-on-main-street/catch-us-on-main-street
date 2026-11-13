import type { Metadata } from "next";
import { ServiceDetail } from "../../_components/service-detail";
import familyHug from "../../../public/family-hug.jpg";

export const metadata: Metadata = {
  title: "The Concierge Journey",
  description:
    "Every detail custom designed to your family's profile, from first idea to welcome home.",
};

export default function ConciergeJourneyPage() {
  return <ServiceDetail slug="the-concierge-journey" image={familyHug} focus="50% 30%" />;
}
