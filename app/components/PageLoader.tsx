"use client";

import { useEffect, useState } from "react";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-600 border-t-white" />
          <span className="text-sm text-zinc-400">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-blur-in">
      {children}
    </div>
  );
}
