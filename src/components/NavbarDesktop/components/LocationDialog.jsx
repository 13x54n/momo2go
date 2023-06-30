import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./styles/LocationDialog.style.css";
import StoreLocationCheckbox from "./StoreLocationCheckbox";
import { useGlobalStore } from "../../../global/Store.global";
import moment from "moment";

function SimpleDialog(props) {
  const { onClose, open, dialogState, handleDialogState } = props;

  const handleClose = () => {
    onClose();
  };

  const storeDetails = useGlobalStore((state) => state.storeDetails);

  const setUserPickupDateTime = useGlobalStore(
    (state) => state.setUserPickupDateTime
  );

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-[24px] w-full flex items-start flex-col locationDialog__container__dialog">
        <i
          className="text-3xl cursor-pointer font-medium ri-close-line"
          onClick={
            dialogState === "base"
              ? handleClose
              : () => handleDialogState("base")
          }
        ></i>
        {dialogState === "base" && (
          <>
            <h1 className="text-3xl mt-3 mb-7 font-bold">Store Details</h1>
            <div className="deliveryAddressContainer flex items-center w-full justify-between border-b pb-4 mb-4">
              <div className="flex items-center mr-20">
                <i className="ri-map-pin-line mr-4 text-xl"></i>
                <div className="deliveryAddressContainer__description">
                  <p className="font-semibold">
                    {storeDetails?.activeStore?.location}
                  </p>
                  <p className="font-light text-sm">
                    {storeDetails?.activeStore?.fullLocation}
                  </p>
                </div>
              </div>
              <Button
                className="actionBtn"
                onClick={() => handleDialogState("newDeliveryLocation")}
              >
                Change
              </Button>
            </div>
          </>
        )}
        {dialogState === "newDeliveryLocation" && (
          <div>
            <h1 className="text-3xl mt-3 mb-1 font-bold">Branch Details</h1>
            <StoreLocationCheckbox />
          </div>
        )}
        <Button
          className="w-full flex-1 closeBtn"
          onClick={
            dialogState === "base"
              ? handleClose
              : () => handleDialogState("base")
          }
        >
          Done
        </Button>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  dialogState: PropTypes.string.isRequired,
  handleDialogState: PropTypes.func.isRequired,
};

export default function LocationDialog() {
  // @dev dialog states are [newDeliveryLocation, newDeliverySchedule, base]
  const [dialogState, setDialogState] = React.useState("base");
  const storeDetails = useGlobalStore((state) => state.storeDetails);

  const handleDialogState = (state) => {
    setDialogState(state);
  };

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
        <i className="ri-map-pin-line mr-1"></i>{" "}
        <p>
          {storeDetails?.activeStore?.location} -{" "}
          {storeDetails.userPickupDateTime
            ? moment(storeDetails.userPickupDateTime).format('LL')
            : "Now"}
        </p>
      </Button>
      <SimpleDialog
        dialogState={dialogState}
        handleDialogState={handleDialogState}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
