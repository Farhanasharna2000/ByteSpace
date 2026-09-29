import type { Metadata } from "next";
import AuthPage from "@/components/auth/AuthPage";

export const metadata: Metadata = { title: "Create an Account | ByteSpace" };

export default function RegisterPage() {
  return <AuthPage register />;
}
