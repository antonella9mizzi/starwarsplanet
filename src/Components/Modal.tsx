import { Dialog } from "@mui/material";
import React, { useEffect } from "react";
import Chart from "./Chart";

type IProps = {
  open: boolean;
  onClose: Function;
  data: any;
};
const Modal = (props: IProps) => {
  const { open, onClose, data } = props;
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <Chart data={data} />
    </Dialog>
  );
};

export default Modal;
