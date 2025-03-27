import React from "react";

interface ThreeDVistaPlayerProps {
  tourUrl: string;
}

const Image360Viewer: React.FC<ThreeDVistaPlayerProps> = ({ tourUrl }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={tourUrl}
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
        title="3DVista Virtual Tour"
      ></iframe>
    </div>
  );
};

export default Image360Viewer
