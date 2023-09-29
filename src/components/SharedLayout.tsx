import { Suspense } from "react";
import Header from "./Header";
import { SharedLayoutWrapper } from "./SharedLayout.styled";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <SharedLayoutWrapper>
          <Outlet />
        </SharedLayoutWrapper>
      </Suspense>

      <Footer />
    </>
  );
};

export default SharedLayout;
