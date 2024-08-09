import { defaultUrl } from "@/app/constants";
import { Box, Stack } from "@mui/material";
import Sidebar from "@/components/ui/dashboard/sidebar";
import { fetchUser } from "./utils";

export const metadata = {
    metadataBase: new URL(`${defaultUrl}/dashboard`),
    title: "Clutter - Your Feed",
    description: "With your dashboard, you can keep track of your inventories, recipes, meal plans, shopping lists, and more.",
};

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await fetchUser();

    return (
        <Stack
            direction="row"
            alignItems="flex-start"
            gap="2rem"
            justifyContent="flex-start"
            width="100%"
            className="my-10 px-5 mx-auto max-w-7xl"
        >
            <Sidebar />
            <Box width="100%">
                {children}
            </Box>
        </Stack>
    );
}