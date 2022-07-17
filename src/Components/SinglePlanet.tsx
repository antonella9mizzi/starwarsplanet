import { Grid } from "@mui/material";
import React from "react";

type IProps = {
  data: any;
};
const SinglePlanet = (props: IProps) => {
  const { data } = props;
  return <Grid>{data.name}</Grid>;
};

export default SinglePlanet;
