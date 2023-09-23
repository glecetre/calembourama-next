"use client";

import { createPun } from "@/app/_actions/puns.actions";
import { useState } from "react";

export function NewPunForm() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitted";
    success: boolean;
    error?: string;
  }>({ status: "idle", success: false });

  return (
    <section className="rounded-2xl bg-zinc-50 p-6 text-zinc-700">
      <h2 className="mb-2 text-xl font-bold">Add a new pun</h2>
      <form action={onSubmit} className="flex flex-row gap-4">
        <p className="flex flex-row gap-4">
          <label className="flex flex-col">
            Text
            <textarea
              name="text"
              cols={50}
              rows={2}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-accent-800 focus:border-accent-200 focus:bg-white"
            ></textarea>
          </label>
          <label className="flex flex-col">
            Author
            <input
              name="author"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-accent-800 focus:border-accent-200 focus:bg-white"
            />
          </label>
          <input
            type="submit"
            value="Save"
            className="self-center rounded-full bg-primary-300 px-4 py-2 text-primary-950 shadow hover:cursor-pointer hover:bg-primary-400 hover:text-white hover:shadow-md active:bg-primary-500"
          />
        </p>
        {formState.error && <p>{formState.error}</p>}
      </form>
    </section>
  );

  async function onSubmit(formData: FormData) {
    const response = await createPun(formData);

    if (response.success) {
      setFormState({ status: "submitted", success: true });
    } else {
      setFormState({
        status: "submitted",
        success: false,
        error: response.error,
      });
    }
  }
}
