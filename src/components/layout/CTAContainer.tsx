"use client";

import React, { useEffect, useState } from "react";

interface CTAContainerProps {
  children: React.ReactNode;
}

export const CTAContainer = ({ children }: CTAContainerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-main p-4">
      {children}
    </div>
  );
};
