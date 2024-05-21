import { z } from 'zod';

const envSchema = z.object({
  APP_URL: z.string(),
  INSTAGRAM_PROFILE: z.string(),
  LINKEDIN_PROFILE: z.string(),
  GITHUB_PROFILE: z.string(),
  WHATSAPP_PROFILE: z.string(),
  EMAIL: z.string(),
  POSTS_PER_PAGE: z.string().transform(val => parseInt(val)),
});

export default envSchema.parse(process.env);
