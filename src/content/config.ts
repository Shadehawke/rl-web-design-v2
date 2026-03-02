import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    role: z.string(),
    focus: z.string(),
    scope: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    url: z.string().url().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
  }),
});

export const collections = { projects };