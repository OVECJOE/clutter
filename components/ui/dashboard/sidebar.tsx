'use client';
import {
  Divider,
  Button,
  Box,
  Tooltip,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import {
  ShoppingBasketRounded,
  MenuBookRounded,
  LocalGroceryStoreRounded,
  FolderSpecialRounded,
  DashboardRounded,
  MenuOpenRounded
} from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname().split("/").slice(-1)[0];
  const [responsiveSettings, setResponsiveSettings] = useState({
    open: false,
    alignment: path || "dashboard",
  });

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setResponsiveSettings({ ...responsiveSettings, open });
    };

  const handleChange = (event: React.MouseEvent, newAlignment: string) => {
    setResponsiveSettings({ ...responsiveSettings, alignment: newAlignment });
  };

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="row"
      gap="1rem"
      justifyContent="flex-start"
      alignItems="start"
    >
      <Button
        color="success"
        size="medium"
        variant="outlined"
        onClick={toggleDrawer(!responsiveSettings.open)}
        aria-label="Open sidebar"
      >
        <MenuOpenRounded fontSize="medium" />
      </Button>
      <ToggleButtonGroup
        color="success"
        orientation="vertical"
        size="large"
        classes={{ root: "shadow-lg rounded-lg" }}
        value={responsiveSettings.alignment}
        exclusive
        onChange={handleChange}
      >
        <Tooltip title="My Feed" placement="right">
          <ToggleButton
            LinkComponent={Link}
            value="dashboard"
            aria-label="dashboard"
            href="/dashboard"
            sx={{ justifyContent: "flex-start" }}
            className="flex flex-row gap-3 items-center"
          >
            <DashboardRounded />
            <Typography display={responsiveSettings.open ? "inline" : "none"}>Feed</Typography>
          </ToggleButton>
        </Tooltip>
        <Tooltip title="My Inventories" placement="right">
          <ToggleButton
            LinkComponent={Link}
            value="inventories"
            aria-label="inventories"
            href="/dashboard/inventories"
            sx={{ justifyContent: "flex-start" }}
            className="flex flex-row gap-3 items-center"
          >
            <ShoppingBasketRounded />
            <Typography display={responsiveSettings.open ? "inline" : "none"}>Inventories</Typography>
          </ToggleButton>
        </Tooltip>
        <Tooltip title="My Shopping Lists" placement="right">
          <ToggleButton
            LinkComponent={Link}
            value="shopping-lists"
            aria-label="shopping-lists"
            href="/dashboard/shopping-lists"
            sx={{ justifyContent: "flex-start" }}
            className="flex flex-row gap-3 items-center"
          >
            <LocalGroceryStoreRounded />
            <Typography display={responsiveSettings.open ? "inline" : "none"}>Shopping Lists</Typography>
          </ToggleButton>
        </Tooltip>
        <Tooltip title="My Meal Plans" placement="right">
          <ToggleButton
            LinkComponent={Link}
            value="meal-plans"
            aria-label="meal-plans"
            href="/dashboard/meal-plans"
            sx={{ justifyContent: "flex-start" }}
            className="flex flex-row gap-3 items-center"
          >
            <MenuBookRounded />
            <Typography display={responsiveSettings.open ? "inline" : "none"}>Meal Plans</Typography>
          </ToggleButton>
        </Tooltip>
        <Divider />
        <Tooltip title="Get Recipes Suggestion" placement="right">
          <ToggleButton
            LinkComponent={Link}
            value="recipes"
            aria-label="recipes"
            href="/dashboard/recipes"
            sx={{ justifyContent: "flex-start" }}
            className="flex flex-row gap-3 items-center"
            color="warning"
          >
            <FolderSpecialRounded />
            <Typography display={responsiveSettings.open ? "inline" : "none"}>Recipes</Typography>
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </Box>
  )
}