import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import './styles/LocationDialog.style.css'
function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-[24px] w-full flex items-start flex-col dialog">
        <Button className="p-0" onClick={handleClose}>
          <i className="text-xl ri-close-line"></i>
        </Button>
        <h1 className="text-2xl mb-5">Delivery Details</h1>
        <div className="deliveryAddressContainer flex items-center w-full justify-between border-b pb-4 mb-2">
          <div className="flex items-center mr-16">
            <i className="ri-map-pin-line mr-4"></i>
            <div className="deliveryAddressContainer__description">
              <p>25 Mabelle Ave</p>
              <p>Etobicoke, Ontario M9A 4Y1</p>
            </div>
          </div>
          <Button>Change</Button>
        </div>
        <div className="flex items-center w-full justify-between mb-5">
          <div className="flex items-center">
            <i className="ri-time-line mr-4"></i>
            <p>Now</p>
          </div>
          <Button>Schedule</Button>
        </div>
        <Button className="w-full flex-1">Done</Button>
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
