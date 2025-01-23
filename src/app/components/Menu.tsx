"use client";
import { useState } from "react";
import { DrawerMenu } from "./DrawerMenu";
import { TopMenu } from "./TopMenu";
import type { PaletteMode } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const drawerWidth = 240;

// Dynamically calculate margin top based on AppBar height
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

export const Menu = (props: {
  children: React.ReactNode;
  onChangeMode: (mode: PaletteMode) => void;
  currentMode: PaletteMode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Main open={isOpen}>
        <TopMenu
          isOpen={isOpen}
          handleDrawerOpen={handleDrawerOpen}
          currentMode={props.currentMode}
          onChangeMode={props.onChangeMode}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Offset />
          {props.children}
        </Box>
        <DrawerMenu
          drawerWidth={drawerWidth}
          isOpen={isOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </Main>
    </>
  );
};
