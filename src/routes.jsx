/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from "react-router-dom";

import Main from "./pages/tracks(main)/main";
import Playlists from "./pages/playlists/playlists";
import Login from "./pages/login/login";
import Reg from "./pages/login/reg";
import NotFound from "./pages/NotFound/NotFound";

import { ProtectedRoute } from "./protected-route/ProtectedRoute";

// eslint-disable-next-line arrow-body-style
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Reg />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/tracks" element={<Main />} />
        <Route path="/category/:id" element={<Playlists />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};