import Link from "next/link";
import { getSortedPostsLinks, PostLink } from "../../lib/posts";

const Blog = (props: any) => {
  const posts: PostLink[] = props.allPostLinks;

  console.log(posts);

  if (posts) {
    return (
      <>
        <h1>BLOG</h1>
        {posts.map((post) => {
          return (
            <>
            <h2><Link key={post.id} href={`/blog/${post.id}`}>{post.title}</Link></h2>
            </>
          );
        })}
      </>
    );
  }
};

export default Blog;

export const getStaticProps = async () => {
  const allPostLinks: PostLink[] = getSortedPostsLinks();
  console.log("ALL POST LINKS");
  console.log(allPostLinks);
  return {
    props: {
      allPostLinks,
    },
  };
};
