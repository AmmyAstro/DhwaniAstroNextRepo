"use client";

import { Suspense } from "react";
import WebCallComponent from "./WebCallComponent";

export default function WebCall() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WebCallComponent />
    </Suspense>
  );
}
