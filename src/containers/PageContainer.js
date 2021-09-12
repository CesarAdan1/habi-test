import React from 'react'

const PageContainer = ({ content, color }) => (
    <div
      style={{
        color,
        width: "100%",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40
      }}
    >
      {content}
    </div>
  );

export default PageContainer
