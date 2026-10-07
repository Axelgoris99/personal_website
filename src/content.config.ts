import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const md = (dir: string) =>
  glob({ pattern: "**/*.md", base: `./src/content/${dir}` });

export const collections = {
  work: defineCollection({
    loader: md("work"),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      begin: z.coerce.date(),
      end: z.coerce.date(),
      location: z.string(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      imgs: z
        .array(
          z.object({
            link: z.string(),
            caption: z.string(),
            alt: z.string().optional(),
          })
        )
        .optional(),
    }),
  }),
  project: defineCollection({
    loader: md("project"),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      begin: z.coerce.date(),
      end: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      favorite: z.boolean().optional(),
    }),
  }),
  association: defineCollection({
    loader: md("association"),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      begin: z.coerce.date(),
      end: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
  render: defineCollection({
    loader: md("render"),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      begin: z.coerce.date().optional(),
      end: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      img: z.string(),
      img_alt: z.string().optional(),
      imgs: z
        .array(
          z.object({
            link: z.string(),
            caption: z.string(),
            alt: z.string().optional(),
          })
        )
        .optional(),
      video: z.string().optional(),
      favorite: z.boolean().optional(),
    }),
  }),
  education: defineCollection({
    loader: md("education"),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      location: z.string(),
      beginYear: z.coerce.date(),
      endYear: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string().optional(),
      img_alt: z.string().optional(),
    }),
  }),
};
