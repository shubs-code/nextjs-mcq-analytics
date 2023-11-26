import {  NextRequest } from "next/server";

import { z } from 'zod';

export const validate =
  (schema: z.AnyZodObject | z.ZodOptional<z.AnyZodObject>) =>
  async (req: NextRequest) => {
    try {
      const parsed = await schema.parseAsync( await req.json());
      return {
        parsed: true,
        body: parsed,
      };
    } catch (error) {
      let err = error;
      if (err instanceof z.ZodError) {
        err = err.issues.map((e) => ({ path: e.path[0], message: e.message }));
      }
      return{
        parsed: false,
        body: {
            status: 'failed',
            error: err,
        },
      }
    }
  };