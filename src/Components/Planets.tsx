import { Grid, Theme } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { makeStyles, createStyles } from "@mui/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import SinglePlanet from "./SinglePlanet";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     section: {
//       padding: 30,
//     },
//   })
// );
type IProps = {
  data: any;
};
const Planets = (props: IProps) => {
  const { data } = props;

  // const c = useStyles();
  return (
    <Grid className={c.section}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.results.map((elem: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <SinglePlanet data={elem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
};

export default Planets;
