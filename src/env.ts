import z from 'zod'

const envScheme = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envScheme.parse(process.env)
