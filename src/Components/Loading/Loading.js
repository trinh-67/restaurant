import React, { useEffect, useState } from "react";
import "./Loading.css";

export default function Loading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const renderLoading = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-bg">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="loading-container"
          style={{
            zIndex: 0,
            transform: "translate(100%,0)",
            transition: "1s ease-out",
          }}
        >
          <div className="loading-bg "></div>
        </div>
      );
    }
  };

  return <div>{renderLoading()}</div>;
}
