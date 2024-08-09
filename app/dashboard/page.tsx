import { Stack, Box, Typography, Badge, Divider } from "@mui/material";
import type { User } from "@supabase/supabase-js";

export default async function DashboardHome() {
  return (
    <div className="px-3 flex-1 flex flex-col gap-10 items-center">
      <Stack gap="1.5rem" width="100%">
        <h2 className="font-bold text-4xl mb-4">
          Pantry <span className="text-green-500">Summary</span>
        </h2>
        <Stack
          direction="row"
          gap="1rem"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Stack gap="1.5rem" className="flex-1 py-2 px-5 rounded-md" bgcolor="AppWorkspace">
            <Typography color="MenuText" fontSize="medium" variant="h6">
              Total Shopping Lists
            </Typography>
            <Stack direction="row" gap="1rem" justifyContent="space-between">
              <Badge className="text-sm text-background" color="primary" badgeContent={3}>
                Active
              </Badge>
              <Badge className="text-sm text-background" color="error" badgeContent={2}>
                Archived
              </Badge>
            </Stack>
          </Stack>
          <Stack gap="1.5rem" className="flex-1 py-2 px-5 rounded-md" bgcolor="beige">
            <Typography color="MenuText" fontSize="medium" variant="h6">
              Inventories Stats
            </Typography>
            <Stack direction="row" gap="1rem" justifyContent="space-between">
              <Badge className="text-sm text-background" color="primary" badgeContent={10}>
                Items
              </Badge>
              <Badge className="text-sm text-background" color="secondary" badgeContent={2}>
                Count
              </Badge>
            </Stack>
          </Stack>
          <Stack gap="1.5rem" className="flex-1 py-2 px-5 rounded-md" bgcolor="teal">
          <Typography color="MenuText" fontSize="medium" variant="h6">
              Total Meal Plans
            </Typography>
            <Stack direction="row" gap="1rem" justifyContent="space-between">
              <Badge className="text-sm text-background" color="primary" badgeContent={10}>
                Active
              </Badge>
              <Badge className="text-sm text-background" color="error" badgeContent={2}>
                Archived
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider className="bg-foreground" />
      <Box width="100%">
        <h3 className="font-bold text-2xl my-4">Recent Activity</h3>
        <Stack gap="0.5rem" width="100%">
          <Box border={1} className="py-2 px-5 rounded-md">
            <Typography fontSize="medium" variant="h6">
              Shopping List
            </Typography>
            <Typography fontSize="medium" variant="body1">
              3 items added
            </Typography>
          </Box>
          <Box border={1} className="py-2 px-5 rounded-md">
            <Typography fontSize="medium" variant="h6">
              Grocery
            </Typography>
            <Typography fontSize="medium" variant="body1">
              2 items added
            </Typography>
          </Box>
          <Box border={1} className="py-2 px-5 rounded-md">
            <Typography fontSize="medium" variant="h6">
              Meal Plan
            </Typography>
            <Typography fontSize="medium" variant="body1">
              1 item added
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
