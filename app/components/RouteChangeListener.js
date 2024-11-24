"use client"; // Make sure this is a client-side component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import LoadingPages from "./LoadingPages";


const RouteChangeListener = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted
  const router = useRouter(); // Use the new useRouter from next/navigation

  useEffect(() => {
    setMounted(true); // Set mounted to true once the component is client-side

    // Create event listeners for route changes
    const handleRouteChangeStart = () => {
      setLoading(true); // Start loading on route change
    };
    const handleRouteChangeComplete = () => {
      setLoading(false); // Stop loading when route change completes
    };
    const handleRouteChangeError = () => {
      setLoading(false); // Stop loading on error
    };

    // Listen to route change events
    if (router) {
      router.events?.on("routeChangeStart", handleRouteChangeStart);
      router.events?.on("routeChangeComplete", handleRouteChangeComplete);
      router.events?.on("routeChangeError", handleRouteChangeError);

      // Cleanup listeners on component unmount
      return () => {
        router.events?.off("routeChangeStart", handleRouteChangeStart);
        router.events?.off("routeChangeComplete", handleRouteChangeComplete);
        router.events?.off("routeChangeError", handleRouteChangeError);
      };
    }
  }, [router]);

  // Prevent rendering until the component is mounted on the client
  if (!mounted) {
    return null; // Prevent SSR rendering of this component
  }

  return loading ? <LoadingPages /> : children;
};

export default RouteChangeListener;
