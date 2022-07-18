import { Search } from "@mui/icons-material";
import { Grid, TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

type IProps = {
  setSearchValue: Function;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: 24,
    "& b": {
      color: theme.palette.secondary.main,
    },
  },
  section: {
    padding: "2% 3% 0 3%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
const SearchPlanets = (props: IProps) => {
  const { setSearchValue } = props;
  const c = useStyles();
  return (
    <Grid className={c.section}>
      <p className={c.title}>
        <b>StarWars</b> Planets<b>.</b>
      </p>
      <Grid style={{ display: "flex", alignItems: "center" }}>
        <Search color="primary" style={{ marginRight: 8 }} />
        <TextField
          id="search-bar"
          className="text"
          onInput={(e: any) => {
            setSearchValue(e.target.value);
          }}
          label=""
          variant="standard"
          placeholder="Search by name..."
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default SearchPlanets;
