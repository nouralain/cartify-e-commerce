import * as z from "zod"; 
 
export const userSignIn = z.object({ 
  email : z.string().email("Invalid email address"),
   password: z.string().min(8, "Password must be at least 8 characters").refine((val) => /[0-9!@#$%^&*]/.test(val), {
    message: "Add at least one number or special character",
  })
});