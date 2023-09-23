import { NewPunForm } from "@/app/_components/NewPunForm";
import { getLatestPuns } from "@/lib/puns";

export const revalidate = 0;

export default async function Home() {
  const latestPuns = await getLatestPuns(5);

  return (
    <main className="flex flex-col gap-4">
      <NewPunForm />
      <section>
        <div className="flex flex-wrap gap-4">
          {latestPuns.map((pun) => (
            <article
              className="max-w-xl grow rounded-2xl bg-accent-50 p-10 text-primary-800"
              key={pun.id}
            >
              <p className="text-xl font-bold">{pun.text}</p>
              <p>By {pun.author}</p>
              &#128516;
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
