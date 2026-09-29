import type { Metadata } from "next";
import CreatorProfile from "@/components/creators/CreatorProfile";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = { title: "PurePearl Studio | ByteSpace" };

export default function CreatorPage() {
  return <><CreatorProfile /><Footer /></>;
}
