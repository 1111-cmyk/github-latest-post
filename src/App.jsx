import React from "react";
import useFetchRepos from "./hooks/useFetchRepos";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoCard from "./components/RepoCard";

const App = () => {
  // custom hook
  const { repos, fetchNextPage, hasMore } = useFetchRepos();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>
        Most Starred GitHub Repositories (Last 10 Days)
      </h1>
      <InfiniteScroll
        dataLength={repos.length}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>No more repositories to load.</p>
        }
      >
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
