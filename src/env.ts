import { z } from 'zod';

const envSchema = z.object({
  INSTAGRAM_PROFILE: z.string(),
  LINKEDIN_PROFILE: z.string(),
  GITHUB_PROFILE: z.string(),
  WHATSAPP_PROFILE: z.string(),
  EMAIL: z.string(),
});

export default envSchema.parse(process.env);
