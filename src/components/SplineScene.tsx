"use client";

import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

interface SplineSceneProps {
  sceneUrl: string;
  className?: string;
}

export default function SplineScene({ sceneUrl, className = "" }: SplineSceneProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Spline scene={sceneUrl} />
      </Suspense>
    </div>
  );
}
