import React, { ReactNode, useState, useEffect } from "react";
import { Container } from "./Container";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  // this effect acts as the componentDidCatch equivalent
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setHasError(true);
      console.error("Error caught in ErrorBoundary:", error.message);
    };

    // register the global error listener
    window.addEventListener("error", handleError);

    // cleanup the error listener when the component unmounts
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return (
      <Container>
        <h1 className="mt-10">Something went wrong. Please try later.</h1>
      </Container>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
