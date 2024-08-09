import InventoriesTable from "@/components/ui/dashboard/inventories/inventories-table";
import { fetchUser } from "../utils";
import { Box } from "@mui/material";

export default async function InventoriesPage() {
    const user = await fetchUser();

    return (
        <Box>
            <InventoriesTable />
        </Box>
    )
}