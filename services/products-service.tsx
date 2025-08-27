import { ProductSchema } from "@/app/api/store/route";

export const FetchProducts = async (): Promise<{ products: ProductSchema[]; error?: string }> => {
    try {
        const res = await fetch("/api/store", { cache: "no-store" });

        if (!res.ok) {
            return { products: [], error: `Request failed: ${res.status}` };
        }

        const data = (await res.json()) as { products: ProductSchema[]; message: string };
        return { products: data.products };
    } catch (error) {
        console.error(error);
        return { products: [], error: error instanceof Error ? error.message : "Unknown error" };
    }
};
