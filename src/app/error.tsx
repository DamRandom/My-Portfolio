"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white text-black">
      <h2 className="text-2xl font-bold uppercase mb-4">Algo salió mal</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
