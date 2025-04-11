import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/quries";


export default async function Home({ searchParams }: {searchParams: Promise<{query?: string}>}) {

  // console.log("Hello, World!");

  const { query } = await searchParams;
  const params = {search:query||null}

  // const posts = await client.fetch(STARTUP_QUERY)
  const {data:posts} = await sanityFetch({query:STARTUP_QUERY,params})
  
  return (
    <> 
        <section className="pink_container">
          <h1 className="heading">pitch your startup,<br/> connect with enterpreneurs</h1>
          <p className="sub-heading">
            Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm query={query}/>
          
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "Popular Startups"}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length>0 ? (
              posts.map((post: StartupTypeCard,index:number) => (
                
                <StartupCard key={post?._id} post={post} />
                
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>

        </section>
            <SanityLive/>
    
    </>
  );
}
