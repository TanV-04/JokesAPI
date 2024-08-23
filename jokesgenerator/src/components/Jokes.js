import React, { useState } from "react";
import "../App.css";

export const Jokes = () => {
  const [data, setData] = useState(null); // state to set the data received from the api
  const [loading, setLoading] = useState(false); // state to handle the loading status
  const [error, setError] = useState(null); // state to handle errors

  function handleClick() {
    const api = new XMLHttpRequest();
    api.open("GET", "https://official-joke-api.appspot.com/random_joke");
    api.onload = function () {
      if (api.status === 200) {
        try {
          const joke = JSON.parse(api.responseText);
          setData(joke); //  set the fetched data to the state
        } catch (e) {
          setError("failed to parse response"); // set error state
        }
      } else {
        setError(`error ${api.status}`);
      }
      setLoading(false); // stop loading
    };

    api.onerror = function () {
      setError("network error"); // set error state
      setLoading(false);
    };
    api.send();
  }

  // function handleClick() {
  //   useEffect(() => {
  //     fetch("https://official-joke-api.appspot.com/random_joke")
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.log(error));
  //   }, []);
  // }

  return (
    <div>
      <button className="getDataButton" onClick={handleClick}>
        Get data
      </button>
      {/* {data ? <div>{JSON.stringify(data)}</div> : <div>loading...</div>} */}

      {/* // below code uses && to conditionally render the <div></div> element. will render "loading..." if loading is true */}
      {loading && <div>loading...</div>}

      {/* // below code uses && to conditionally render the <div></div> element. */}
      {error && <div>error: {error}</div>}

      {/* // render <div></div> element containing the joke conditionally. will only render the joke info if the data is not null */}
      {/* // the && operator checks if the condition on the left side of the operator is true, and if so, it renders the JSX on the right side. */}
      {data && (
        <div>
          <div className="setup">
            <h2>{data.setup}</h2>
          </div>
          <div className="punchline">
            <h3>{data.punchline}</h3>
          </div>
        </div>
      )}

      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."} */}
    </div>
  );
};
