import { BallSpinner } from "@/components/ui/BallSpinner";

/** Shown while a route segment streams in during client navigation. */
export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
      <BallSpinner size={56} />
    </div>
  );
}
