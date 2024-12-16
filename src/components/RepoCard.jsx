import React from "react";



const RepoCard = ({ repo }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px 0",
      display: "flex",
      alignItems: "center",
    }}
  >
    <img
      src={repo.owner.avatar_url}
      alt={repo.owner.login}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "16px",
      }}
    />
    <div>
      <h2 style={{ margin: "0 0 8px" }}>{repo.name}</h2>
      <p style={{ margin: "0 0 8px" }}>
        {repo.description || "No description available."}
      </p>
      <p style={{ margin: "0 0 8px" }}>⭐ {repo.stargazers_count}</p>
      <p style={{ margin: "0" }}>Owner: {repo.owner.login}</p>
    </div>
  </div>
);

export default RepoCard;
