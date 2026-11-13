import type { Metadata } from "next";
import { ServiceDetail } from "../../_components/service-detail";
import planningLaptopDisney from "../../../public/planning-laptop-disney.jpg";

export const metadata: Metadata = {
  title: "The Itinerary",
  description:
    "Your trip is booked. A day-by-day plan for what to do and how to enjoy it, $350 for 5 days.",
};

export default function TheItineraryPage() {
  return <ServiceDetail slug="the-itinerary" image={planningLaptopDisney} focus="40% 45%" />;
}
