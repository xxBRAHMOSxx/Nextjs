import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {searchParams: Promise<{query?: string}>}) {

  console.log("Hello, World!");

  const { query } = await searchParams;
  const posts = [{
    _createdAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric',year: 'numeric'  }),
    views : 100,
    author: {_id:1,name:"John Doe"},
    _id : "1",
    description : "This is a description",
    image : 'https://i.ytimg.com/an_webp/fqabW3WRUbw/mqdefault_6s.webp?du=3000&sqp=CJjsxr0G&rs=AOn4CLAmRd9DKYFrPJgh-HpS8Cyx4XgHzQ',
    catagory : "Technology",
    title : "Startup 1"
  }]

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
              posts.map((post: StartupCardType,index:number) => (
                
                <StartupCard key={post?._id} post={post} />
                
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>

        </section>

    
    </>
  );
}
