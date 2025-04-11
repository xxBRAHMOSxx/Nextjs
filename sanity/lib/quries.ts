import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
    `*[_type=="startup" && defined(slug.current) && !defined($search) || title match $search || catagory match $search || author->name match $search] | order(_createdAt desc){
    _id,
    title,
    slug,
    _createdAt,
    description,
    catagory,
    image,
   author->{
     _id,name,image,bio
   },
   views
}`
)

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current)]{
 _id,
 title,
 slug,
 _createrAt,
 description,
 catagory,
 image,
   author->{
     _id,
     name,
     bio
   }
}
`)