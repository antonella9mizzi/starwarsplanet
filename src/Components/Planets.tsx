import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Theme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles, createStyles } from "@mui/styles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SinglePlanet from "./SinglePlanet";
import Modal from "./Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      height: "70vh",

      padding: "40px 10% 0 10%",
      marginBottom: 70,
      "& > .swiper-pagination-bullets": {
        bottom: 10,

        "& .swiper-pagination-bullet": {
          transition: "width          0.3s ease-in",
          marginTop: 4,
          backgroundColor: theme.palette.secondary.main,
          opacity: 1,
        },
        "& .swiper-pagination-bullet-active": {
          width: 24,

          borderRadius: 4,
        },
      },
    },
    sectionEmpty: {
      height: "60vh",
      "& p": {
        textAlign: "center",
      },
    },
    switchContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    buttonsSection: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 3%",
    },
    titleContainer: { display: "flex", justifyContent: "center" },
    title: {
      maxWidth: "50%",
      fontWeight: 600,
      textAlign: "center",
      color: theme.palette.secondary.main,
      fontSize: 46,
      margin: 0,
      [theme.breakpoints.down("sm")]: {
        fontSize: 32,
      },
    },
  })
);
type IProps = {
  data: any;
  changePrefs: Function;
};
const Planets = (props: IProps) => {
  const { data, changePrefs } = props;
  const [compare, setCompare] = useState<boolean>(false);
  const [comparationList, setComparationList] = useState<any>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const matches600 = useMediaQuery("(min-width:600px)");

  const handleChange = (event: any) => {
    setCompare(event.target.checked);
  };
  const c = useStyles();

  useEffect(() => {
    //filters data by checked
    let _localData: any = [...data];
    let selectedPlanets: any = [];

    _localData.map((planet: any) => {
      if (planet.Checked === true) {
        selectedPlanets.push(planet);
      }

      return planet;
    });
    setComparationList(selectedPlanets);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <Grid>
      <Grid className={c.switchContainer}>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={compare} onChange={handleChange} />}
            label="Compare"
          />
        </FormGroup>
      </Grid>

      {comparationList.length > 0 && compare ? (
        <Grid className={c.buttonsSection}>
          <Button
            onClick={() => {
              setCompare(false);
            }}
          >
            Cancel
          </Button>
          <Grid style={{ display: "flex" }}>
            <p style={{ marginRight: 16 }}>
              You have selected {comparationList.length}{" "}
              {comparationList.length === 1
                ? "item (You should add at least 1 more)"
                : "items"}
            </p>
            <Button
              variant="contained"
              disabled={comparationList.length <= 1 && true}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Compare
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid style={{ height: 54 }}></Grid>
      )}
      <Grid className={c.titleContainer}>
        <p className={c.title}>Choose some planets and start comparing!</p>
      </Grid>

      {data.length < 1 ? (
        <div className={c.sectionEmpty}>
          <p>Opps, try with anoter name</p>
        </div>
      ) : (
        <Swiper
          className={`mySwiper ${c.section}`}
          slidesPerView={matches600 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.map((elem: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <SinglePlanet
                  data={elem}
                  index={index}
                  key={index}
                  compare={compare}
                  changePrefs={changePrefs}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <Modal
        data={comparationList}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </Grid>
  );
};

export default Planets;
