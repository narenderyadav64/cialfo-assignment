import React, {useEffect} from "react";

const Home = (props) => {

  const { results = [] } = props.data;

  useEffect(() => {
    props.requestApiData();
    // eslint-disable-next-line
  },[]);

  

  return(
    results.length
      ? <div>
          <h1>
            {results[0].name.first}
          </h1>
          <h1>
            {results[0].name.last}
          </h1>
        </div>
      : <h1>loading...</h1>
  );
}

export default Home;