import InventoriesTable from "@/components/ui/dashboard/inventories/inventories-table";
import { fetchUser } from "../utils";
import { Box, Stack, Typography } from "@mui/material";

export default async function InventoriesPage() {
    const user = await fetchUser();

    return (
        <Stack gap="1.5rem">
            <h2 className="font-bold text-4xl mb-4">
                Your <span className="text-green-500">Inventories</span>
            </h2>
            <InventoriesTable />
        </Stack>
    )
}