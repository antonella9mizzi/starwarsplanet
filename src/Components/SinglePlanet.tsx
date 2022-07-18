import { Checkbox, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactComponent as PlanetIcon } from "../Shared/Icons/planet.svg";
import { ReactComponent as CheckedBox } from "../Shared/Icons/checkedBox.svg";
import { ReactComponent as CheckBox } from "../Shared/Icons/uncheckedBox.svg";
import React, { useState } from "react";

type IProps = {
  data: any;
  compare: boolean;
  index: number;
  changePrefs: Function;
};
const useStyles = makeStyles((theme: Theme) => ({
  box: {
    position: "relative",
    backgorundColor: "white",
    height: 470,
    padding: 40,
    width: "100%",
    boxShadow: "0px 10px 28px rgba(102, 89, 98, 0.13)",
  },
  name: { color: theme.palette.secondary.main, fontWeight: 700 },
  flexCenter: { display: "flex", alignItems: "center" },
  climateTag: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    height: "20px",
    padding: "4px 10px",
    borderRadius: "5px",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 10,
    margin: 4,
    lineHeight: 12,
  },
  stateTemperate: {
    backgroundColor: "#95BB8B",
    color: "#3F6634",
  },
  stateFrozen: {
    backgroundColor: "#0078D433",
    color: "#0078D4",
  },
  stateArid: {
    backgroundColor: "#F7B42733",
    color: "#F7B427",
  },
  stateTropical: {
    backgroundColor: "#F9D4D4",
    color: "#E22929",
  },
  stateMurky: { backgroundColor: "#A4A2A2", color: "#2F2F2F" },
  compare: {
    "& p": { color: theme.palette.primary.main, margin: 4, fontSize: 12 },
    position: "absolute",
    right: 25,
  },
  fillColor: { fill: theme.palette.primary.main },
  boxDivider: {
    border: "none",
    borderTop: "1.5px solid  #efefef",
    width: "100%",
    margin: 0,
  },
}));
const SinglePlanet = (props: IProps) => {
  const { data, compare, changePrefs, index } = props;
  const c = useStyles();
  let _climates: any = data.climate.split(/[\n,]+/);
  const returnClimateClass = (key: string) => {
    switch (key.toLowerCase()) {
      case "temperate":
        return c.stateTemperate;

      case "arid":
        return c.stateArid;
      case " tropical":
        return c.stateTropical;
      case "frozen":
        return c.stateFrozen;
      case "murky":
        return c.stateMurky;
      default:
        break;
    }
  };

  return (
    <Grid className={c.box}>
      <Grid
        className={c.flexCenter}
        style={{ justifyContent: "space-between" }}
      >
        <Grid className={c.flexCenter}>
          <PlanetIcon stroke="red" style={{ width: "50px" }} />
          <p className={c.name}>{data.name}</p>
        </Grid>

        {compare && (
          <Grid className={`${c.flexCenter} ${c.compare}`}>
            <Checkbox
              color="primary"
              checkedIcon={<CheckedBox className={c.fillColor} />}
              icon={<CheckBox className={c.fillColor} />}
              checked={data.Checked}
              onChange={(res) => {
                changePrefs(
                  {
                    ...data,
                    Checked: res.target.checked,
                  },
                  index
                );
              }}
              name={`${data.name}`}
            />
            <p>Compare planet</p>
          </Grid>
        )}
      </Grid>
      <hr className={c.boxDivider} />
      <Grid className={c.flexCenter}>
        <p>Rotation period: {data.rotation_period}</p>
      </Grid>
      <hr className={c.boxDivider} />
      <Grid className={c.flexCenter}>
        <p>Orbital period: {data.orbital_period}</p>
      </Grid>
      <hr className={c.boxDivider} />
      <Grid className={c.flexCenter}>
        <p>Gravity: {data.gravity}</p>
      </Grid>
      <hr className={c.boxDivider} />
      <Grid className={c.flexCenter}>
        <p>Surface water: {data.surface_water}</p>
      </Grid>
      <hr className={c.boxDivider} />
      <Grid className={c.flexCenter}>
        <p>Population: {data.population}</p>
      </Grid>{" "}
      <hr className={c.boxDivider} />
      <Grid className={c.flexCenter}>
        <p>Climate:</p>
        {_climates.map((climate: any, index: number) => (
          <div
            key={index}
            className={`${c.climateTag} ${returnClimateClass(climate)}`}
          >
            {climate}
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default SinglePlanet;
