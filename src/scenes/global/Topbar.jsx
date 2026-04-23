import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        px: { xs: 2, md: 3 },
        py: 2,
        position: "sticky",
        top: 0,
        zIndex: 5,
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(20, 27, 45, 0.72)"
            : "rgba(252, 252, 252, 0.88)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* SEARCH BAR */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: colors.primary[400],
          border: `1px solid ${colors.primary[600]}`,
          borderRadius: "12px",
          minWidth: { xs: "100%", sm: 280 },
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: colors.grey[100] }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1, color: colors.grey[100] }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton onClick={colorMode.toggleColorMode} sx={{ color: colors.grey[100] }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton sx={{ color: colors.grey[100] }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: colors.grey[100] }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: colors.grey[100] }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
