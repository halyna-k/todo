import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "./routes/PrivateRoute";
import { Dashboard, Home } from "./pages";
import { Footer, Header } from "./components";

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              } />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}
