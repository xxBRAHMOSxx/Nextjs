import SearchForm from "@/app/components/SearchForm";

export default function Home() {
  console.log("Hello, World!");
  return (
    <> 
        <section className="pink_container">
          <h1 className="heading">pitch your startup,<br/> connect with enterpreneurs</h1>
          <p className="sub-heading">
            Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm />
          
        </section>

    
    </>
  );
}
