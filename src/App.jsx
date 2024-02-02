import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import "./App.css";
import Layout from "./Layouts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout title={route.name}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
