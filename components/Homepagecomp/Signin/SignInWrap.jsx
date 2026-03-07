"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Navbarmob from "../../Navbarmob";
import SignInModal from "@/components/Homepagecomp/Signin/Signin";
import { createPortal } from "react-dom";

export default function SignInModalWrapper({ children }) {
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 head_nav_top_all z-50 w-full">
        <Header openSignInModal={() => setShowSignInModal(true)} />
        <Navbarmob />
      </div>

      {children}

      {showSignInModal &&
        createPortal(
          <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/1">
            <SignInModal onClose={() => setShowSignInModal(false)} />
          </div>,
          document.body
        )}
    </>
  );
}
