import { defaultUrl } from "@/app/constants";
import { Stack, Box } from "@mui/material";
import InventoriesNavigator from "@/components/ui/dashboard/inventories/navigator";

export const metadata = {
    title: "Clutter - Your Inventories",
    description: "Here you can add items to your inventories, view your current stock, and manage your inventories.",
    metadataBase: new URL(`${defaultUrl}/dashboard/inventory`),
};

export default async function InventoriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Stack
            direction="column"
            alignItems="flex-start"
            gap="2rem"
            justifyContent="flex-start"
            width="100%"
        >
            <InventoriesNavigator />
            <Box width="100%">{children}</Box>
        </Stack>
    );
}