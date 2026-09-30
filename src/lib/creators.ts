import { creators } from "@/data/content";

export const getCreator = (slug: string) => creators.find((c) => c.slug === slug);