import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageRoutes from "../Routes/Routes.jsx";
import HomePage from "../pages/HomePage";

const Index = () => {
  return (
    <Suspense>
      <Routes>
        {PageRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        <Route key={"1"} path={"/"} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
