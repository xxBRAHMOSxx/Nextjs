import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {searchParams: Promise<{query?: string}>}) {

  console.log("Hello, World!");

  const { query } = await searchParams;

  return (
    <> 
        <section className="pink_container">
          <h1 className="heading">pitch your startup,<br/> connect with enterpreneurs</h1>
          <p className="sub-heading">
            Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm query={query}/>
          
        </section>

    
    </>
  );
}
