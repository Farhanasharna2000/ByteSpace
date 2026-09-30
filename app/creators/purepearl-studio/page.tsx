import type { Metadata } from "next";
import CreatorProfile from "@/components/creators/CreatorProfile";

export const metadata: Metadata = { title: "PurePearl Studio | ByteSpace" };

export default function CreatorPage() {
  return (
    <>
      <CreatorProfile />

    </>
  );
}
