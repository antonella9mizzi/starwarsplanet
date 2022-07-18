import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../Shared/Footer";

import ThemeContainer from "../Shared/ThemeContainer";
import MSearchPlanets from "./MSearchPlanets";

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
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeContainer>
      {!loading && initialState.data ? (
        <>
          <MSearchPlanets data={initialState.data.results} />
          <Footer />
        </>
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50%, -50%)",
          }}
        >
          <CircularProgress size={90} sx={{ color: "#ff1f48" }} />
        </Box>
      )}
    </ThemeContainer>
  );
};

export default MPlanets;
