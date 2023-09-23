"use server";

import { saveNewPun } from "@/lib/puns";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createPunSchema = z.object({
  text: z.string().nonempty(),
  author: z.string().nonempty(),
});

export async function createPun(formData: FormData) {
  const parseResult = createPunSchema.safeParse({
    text: formData.get("text"),
    author: formData.get("author"),
  });

  if (parseResult.success) {
    await saveNewPun(parseResult.data);
    revalidatePath("/");

    return { success: true };
  } else {
    return { success: false, error: "Not working" };
  }
}
