import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Planets from "../Components/Planets";
import SearchPlanets from "../Components/SearchPlanets";

type IProps = {
  data: any;
};
const MSearchPlanets = (props: IProps) => {
  const { data } = props;
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<any>(data);

  useEffect(() => {
    let _filteredData = data.filter((f: any) => {
      return f.name.toLowerCase().includes(searchValue?.toLowerCase());
    });
    setFilteredData([..._filteredData]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <Grid>
      <SearchPlanets setSearchValue={setSearchValue} />
      <Planets
        data={filteredData}
        changePrefs={(res: any, index: number) => {
          let _filteredData = [...filteredData];
          _filteredData[index] = { ...res };
          setFilteredData(_filteredData);
        }}
      />
    </Grid>
  );
};

export default MSearchPlanets;
