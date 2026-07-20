import React from 'react';

/**
 * Phone-styled frame for the <768px layout. Bezel/notch only render as
 * visible chrome once there's room for them (min-width 480px) — on an
 * actual phone viewport the frame fills edge-to-edge and the notch/rounded
 * corners alone carry the "iOS" read.
 */
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-dvh w-full flex items-center justify-center bg-ink min-[480px]:p-6">
      <div className="relative h-dvh w-full max-w-[430px] min-[480px]:h-[900px] min-[480px]:max-h-[92vh] overflow-hidden bg-black min-[480px]:rounded-[54px] min-[480px]:border-[8px] min-[480px]:border-neutral-800 min-[480px]:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        {/* Notch — only shown once there's a real bezel around it (matches the min-[480px] breakpoint above) */}
        <div className="hidden min-[480px]:block absolute top-0 left-1/2 -translate-x-1/2 z-50 w-32 h-6 bg-black rounded-b-2xl" />
        <div className="relative h-full w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
