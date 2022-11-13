import { getSortedPostsData, PostData } from "../../lib/posts";

const Blog = ({ allPostData }) => {
  const posts: PostData[] = allPostData;

  if (posts) {
    return (
      <>
        <h1>BLOG</h1>
        {posts.map((post) => {
          return (
            <>
              <h1 key={post.id}>{post.data.title}</h1>
              <p key={post.id}>{post.content}</p>
            </>
          );
        })}
      </>
    );
  }
};

export default Blog;

export const getStaticProps = async () => {
  const allPostData: PostData[] = getSortedPostsData();
  console.log(allPostData);
  return {
    props: {
      allPostData,
    },
  };
};
