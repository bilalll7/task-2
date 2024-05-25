import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MainSurat from "../components/MainSurat";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Surat() {
  return (
    <>
      <CssBaseline />
      <DrawerAppBar />
      <MainSurat />
    </>
  );
}
