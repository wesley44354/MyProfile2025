import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  apiVersion: "2021-10-21",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  return createImageUrlBuilder(config).image(source);
};
