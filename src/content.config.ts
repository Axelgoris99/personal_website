import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const md = (dir: string) =>
  glob({ pattern: "**/*.md", base: `./src/content/${dir}` });

export const collections = {
  work: defineCollection({
    loader: md("work"),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        begin: z.coerce.date(),
        end: z.coerce.date().optional(),
        location: z.string(),
        tags: z.array(z.string()),
        img: image(),
        img_alt: z.string().optional(),
        imgs: z
          .array(
            z.object({
              link: image(),
              caption: z.string(),
              alt: z.string().optional(),
            }),
          )
          .optional(),
      }),
  }),
  project: defineCollection({
    loader: md("project"),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        begin: z.coerce.date(),
        end: z.coerce.date().optional(),
        tags: z.array(z.string()),
        img: image().optional(),
        img_alt: z.string().optional(),
        favorite: z.boolean().optional(),
      }),
  }),
  association: defineCollection({
    loader: md("association"),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        begin: z.coerce.date(),
        end: z.coerce.date().optional(),
        tags: z.array(z.string()),
        img: image(),
        img_alt: z.string().optional(),
      }),
  }),
  render: defineCollection({
    loader: md("render"),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        begin: z.coerce.date().optional(),
        end: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        img: image(),
        img_alt: z.string().optional(),
        imgs: z
          .array(
            z.object({
              link: image(),
              caption: z.string(),
              alt: z.string().optional(),
            }),
          )
          .optional(),
        video: z.string().optional(),
        favorite: z.boolean().optional(),
      }),
  }),
  education: defineCollection({
    loader: md("education"),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        location: z.string(),
        beginYear: z.coerce.date(),
        endYear: z.coerce.date(),
        tags: z.array(z.string()),
        img: image().optional(),
        img_alt: z.string().optional(),
      }),
  }),
};
