"use client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

export default function PersistWrapper({ children }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
