import { z } from 'zod';

export const UpdateUserValidation = z.object({
    name: z.coerce.string().min(1),
    description: z.coerce.string(),
});

export type UpdateUserType = z.infer<typeof UpdateUserValidation>