import React from "react";

interface ThreeDVistaPlayerProps {
  tourUrl: string;
  style:React.CSSProperties
}

const Image360Viewer: React.FC<ThreeDVistaPlayerProps> = ({ tourUrl,style }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={tourUrl}
        style={{ width: "100%", height: "100%", border: "none",...style }}
        allowFullScreen
        title="3DVista Virtual Tour"
      ></iframe>
    </div>
  );
};

export default Image360Viewer
