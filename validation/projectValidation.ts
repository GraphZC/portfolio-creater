import { z } from 'zod'

export const CreateProjectValidation = z.object({
    name: z.coerce.string().min(1),
    type: z.coerce.string().min(1),
    userId: z.coerce.string().min(1),
    description: z.coerce.string().min(1),
    sourceUrl: z.coerce.string(),
    demoUrl: z.coerce.string(),
});

export type CreateProjectType = z.infer<typeof CreateProjectValidation>

export const UpdateProjectValidation = z.object({
    name: z.coerce.string().min(1),
    type: z.coerce.string().min(1),
    description: z.coerce.string().min(1),
    sourceUrl: z.coerce.string(),
    demoUrl: z.coerce.string(),
});

export type UpdateProjectType = z.infer<typeof UpdateProjectValidation>