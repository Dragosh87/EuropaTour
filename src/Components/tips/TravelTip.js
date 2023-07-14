import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function TravelTip({
  id,
  title,
  content,
  extraContent,
  extraText,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <p>
        <h1
          id="{id}"
          className="text-lg font-bold align-middle cursor-pointer decoration-orange-950 hover:text-red-700 text-brown-700"
          onClick={handleOpen}
          variant="gradient"
        >
          {title} ⧉
        </h1>
        {content}
      </p>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody divider>{extraContent}</DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
