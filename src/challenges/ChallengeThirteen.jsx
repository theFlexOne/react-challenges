import { useState, useEffect } from "react";

/*
  Instructions:
    Implement the `useFetch` function. 
*/

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("Error fetching data");
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUrl();
  }, [url]);

  return { loading, data, error };
}

export default function ChallengeThirteen() {
  const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const [index, setIndex] = useState(0);

  const {
    loading,
    data: post,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postIds[index]}`);

  console.log(loading);

  const incrementIndex = () => {
    setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </>
    );
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {error && <p>{error}</p>}
      {index === postIds.length - 1 ? (
        <p>No more posts existss ....</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </div>
  );
}
