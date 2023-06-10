import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import Stores from "../../../mocks/Stores.json";
import { useGlobalStore } from "../../../global/Store.global";

export default function StoreLocationCheckbox() {
  const [checked, setChecked] = React.useState(1);

  const handleToggle = (value) => () => {
    setChecked(value);
  };

  return (
    <List
      className="storeLocationsCheckbox__container"
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {Stores.map((value, index) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={index}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(index)}
                checked={checked === index && true}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <div className="cursor-pointer mb-2" onClick={handleToggle(index)}>
              <div className="flex flex-col">
                <p className="text-base font-medium">{value?.name}</p>
                <p className="text-sm font-light">{value?.location}</p>
              </div>
            </div>
          </ListItem>
        );
      })}
      <iframe
        src={Stores[checked].mapSource}
        width="100%"
        height="250"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="my-2"
      ></iframe>
    </List>
  );
}
