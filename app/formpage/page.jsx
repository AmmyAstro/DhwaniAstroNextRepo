import { Suspense } from "react";
import ClientFormPage from "./clientFormPage";

export default function Formpage() {

  return (
    <Suspense >
      <ClientFormPage />
    </Suspense>
  
  );
}
