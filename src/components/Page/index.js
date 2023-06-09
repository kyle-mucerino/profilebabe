import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Home from "../Home";
import PhotoGallery from "../PhotoGallery";
import SpeakingInquiries from "../SpeakingInquiries";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "photo gallery":
        return <PhotoGallery />;
      case "speaking inquiries":
        return <SpeakingInquiries />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}

export default Page;
