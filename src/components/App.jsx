import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
// const NotFaund = lazy(() => import("pages/Notfaund"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return ( <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  </Suspense>
  );
};
