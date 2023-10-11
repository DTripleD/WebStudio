import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
