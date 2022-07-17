import React, { useState, useEffect } from "react";
import Planets from "../Components/Planets";
import ThemeContainer from "../Shared/ThemeContainer";

const MPlanets = () => {
  const [initialState, setInitialState] = useState<any>({
    data: null,
  });
  const [loading, setLoading] = useState<boolean>(true);

  const getData = () => {
    fetch(`https://swapi.dev/api/planets/`)
      .then((response) => response.json())
      .then((data) => {
        let _data: any = { ...data };
        _data.results.map((elem: any) => {
          elem.Checked = false;
          return elem;
        });
        setInitialState({ data: _data });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeContainer>
      {initialState.data ? (
        <Planets data={initialState.data} />
      ) : (
        <p>MPlanets</p>
      )}
    </ThemeContainer>
  );
};

export default MPlanets;
