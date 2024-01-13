import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      Landing Page (Unprotected)
      <Link href="/dashboard">
        <Button>Login</Button>
      </Link>
      <Link href="/dashboard">
        <Button>Register</Button>
      </Link>
    </div>
  );
}
