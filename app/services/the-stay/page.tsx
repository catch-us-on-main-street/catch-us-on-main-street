import type { Metadata } from "next";
import { ServiceDetail } from "../../_components/service-detail";
import keyHandoff from "../../../public/key-handoff.jpg";

export const metadata: Metadata = {
  title: "The Stay",
  description:
    "Your hotel, resort, or ship booked with care and Catch Us on Main Street perks, for families who already have the big picture.",
};

export default function TheStayPage() {
  return <ServiceDetail slug="the-stay" image={keyHandoff} focus="50% 45%" />;
}
