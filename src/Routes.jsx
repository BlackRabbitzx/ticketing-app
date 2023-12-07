import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesktopOnePage from "pages/DesktopOne/index";
import NotFound from "pages/NotFound";
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOnePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<DesktopOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
