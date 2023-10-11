import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
