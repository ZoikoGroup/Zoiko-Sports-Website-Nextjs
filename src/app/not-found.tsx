import type { Metadata } from "next";
import { NotFoundHero } from "@/components/not-found/NotFoundHero";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return <NotFoundHero />;
}
