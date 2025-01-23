import { IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, type PaletteMode } from "@mui/material/styles";
import ThemeSwitcher from "./ThemeSwitcher";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const TopMenu = (props: {
  isOpen: boolean;
  handleDrawerOpen: () => void;
  onChangeMode: (mode: PaletteMode) => void;
  currentMode: PaletteMode;
}) => {
  return (
    <AppBar position="fixed" open={props.isOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            props.isOpen && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 10 }} component="div">
          React Mini Projects
        </Typography>
        <ThemeSwitcher
          onChangeMode={props.onChangeMode}
          currentMode={props.currentMode}
        />
      </Toolbar>
    </AppBar>
  );
};
