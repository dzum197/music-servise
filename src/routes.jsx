/* eslint-disable import/prefer-default-export */
import { Routes, Route } from "react-router-dom";

import Main from "./pages/tracks(main)/main";
import Playlists from "./pages/playlists/playlists";
import Login from "./pages/login/login";
import Reg from "./pages/login/reg";
import NotFound from "./pages/NotFound/NotFound";
import { ProtectedRoute } from "./blocks/protected-route/ProtectedRoute";
import MyPlaylists from "./pages/playlists/MyPlaylists";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Reg />} />
      <Route element = {<ProtectedRoute />} >
        <Route path="/tracks" element={<Main />} />
        <Route path="/category/:id" element={<Playlists />} />
        <Route path="/tracks" element={<MyPlaylists />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>  
  );
}