import React, { Suspense } from "react";
import {
  HomePath,
  OperationPath,
  MapPath
} from "./Paths";
import { Routes, Route } from "react-router-dom";
import Spinner from "../components/Spinner";
const Home = React.lazy(() => import("../pages/Home"));

const Reports = React.lazy(() => import("../pages/Reports"));
const Operation = React.lazy(() => import("../pages/Operation"));
const Map = React.lazy(() => import("../pages/Map"));
const withSuspense = (WrappedComponent) => {
  return (
    <Suspense fallback={<Spinner />}>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export default function Routing() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          key="Home"
          path={HomePath()}
          element={withSuspenseComponents(<Home />)}
        />
     
        <Route
          key="Map"
          path={MapPath()}
          element={withSuspenseComponents(<Map />)}
        />

        <Route
          key="Operation"
          path={OperationPath()}
          element={withSuspenseComponents(<Operation />)}
        />
      </Routes>
    </Suspense>
  );
}
