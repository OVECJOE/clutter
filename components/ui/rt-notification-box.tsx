import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
    const supabase = createClient();

    return (
        <div className="w-full">
            <div className="py-6 font-bold bg-purple-950 text-center">
            This is a protected page that you can only see as an authenticated
            user
            </div>
        </div>
    )
}