import { z } from 'zod';

const questionSchema = z.object({
  selectedOption: z.optional(z.string()), 
  timeTaken:z.coerce.number().int("time taken should be a number")
})
export const TestSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .trim()
    .min(1, 'Name cannot be empty'),
  total_questions:z.coerce.number().int("total_questions is required"),
  skipped_questions:z.coerce.number().int("skipped_questions is required"),
  test_data:z.array(questionSchema)
});
