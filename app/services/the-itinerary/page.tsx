import type { Metadata } from "next";
import { ServiceDetail } from "../../_components/service-detail";
import advisorDeskWriting from "../../../public/advisor-desk-writing.jpg";

export const metadata: Metadata = {
  title: "The Itinerary",
  description:
    "Your trip is booked. A day-by-day plan for what to do and how to enjoy it, $350 for 5 days.",
};

export default function TheItineraryPage() {
  return <ServiceDetail slug="the-itinerary" image={advisorDeskWriting} focus="50% 35%" />;
}
