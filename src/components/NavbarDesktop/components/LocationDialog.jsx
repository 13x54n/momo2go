import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "./styles/LocationDialog.style.css";
function SimpleDialog(props) {
  const { onClose, open } = props;
  const [dialogState, setDialogState] = React.useState('')

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-[24px] w-full flex items-start flex-col locationDialog__container__dialog">
        <i className="text-3xl cursor-pointer font-medium ri-close-line" onClick={handleClose}></i>
        <h1 className="text-3xl mt-3 mb-7 font-bold">Delivery Details</h1>
        <div className="deliveryAddressContainer flex items-center w-full justify-between border-b pb-4 mb-4">
          <div className="flex items-center mr-20">
            <i className="ri-map-pin-line mr-4 text-xl"></i>
            <div className="deliveryAddressContainer__description">
              <p className="font-semibold">25 Mabelle Ave</p>
              <p className="font-light">Etobicoke, Ontario M9A 4Y1</p>
            </div>
          </div>
          <Button className="actionBtn">Change</Button>
        </div>
        <div className="flex items-center w-full justify-between mb-10">
          <div className="flex items-center">
            <i className="ri-time-line mr-4 text-xl"></i>
            <p>Now</p>
          </div>
          <Button className="actionBtn">Schedule</Button>
        </div>
        <Button className="w-full flex-1 closeBtn" onClick={handleClose}>Done</Button>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function LocationDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="locationDialog__container">
      <Button variant="outlined" onClick={handleClickOpen}>
        <i className="ri-map-pin-line mr-1"></i> <p>25 Mabelle Ave - Now</p>
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
