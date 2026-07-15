import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-blue-900 p-4">
      {children}
    </div>
  );
}
