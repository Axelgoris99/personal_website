import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      begin: z.coerce.date(),
      end: z.coerce.date(),
      location: z.string(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
  project: defineCollection({
    type: "content",
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
    type: "content",
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
    type: "content",
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
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      location: z.string(),
      beginYear: z.coerce.date(),
      endYear: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
