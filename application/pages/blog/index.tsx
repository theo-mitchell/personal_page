import Link from "next/link";
import { getSortedPostsLinks, PostLink } from "../../lib/posts";

const Blog = ({ allPostLinks }) => {
  const posts: PostLink[] = allPostLinks;

  if (posts) {
    return (
      <>
        <h1>BLOG</h1>
        {posts.map((post) => {
          return (
            <>
            <h2><Link key={post.id} href={`/blog/${post.id}`}>{post.data?.title}</Link></h2>
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
  return {
    props: {
      allPostLinks,
    },
  };
};
