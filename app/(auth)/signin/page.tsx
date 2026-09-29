import type { Metadata } from "next";
import AuthPage from "@/components/auth/AuthPage";

export const metadata: Metadata = { title: "Sign In | ByteSpace" };

export default function SignInPage() {
  return <AuthPage />;
}
