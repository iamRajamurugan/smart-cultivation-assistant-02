
import { useEffect } from "react";
import PageContainer from "@/components/layout/PageContainer";
import CameraOverlay from "@/components/scanner/CameraOverlay";

const Scanner = () => {
  useEffect(() => {
    // In a real app, we would request camera permission here
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <PageContainer showNav={false} className="h-screen overflow-hidden">
      <CameraOverlay />
    </PageContainer>
  );
};

export default Scanner;
