import {HydrateClient} from "@/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col">

      </main>
    </HydrateClient>
  );
}
