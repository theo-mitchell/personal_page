import { getPostData, getAllPostIds } from "../../lib/posts";
import Date from '../../components/date';

const Post = ({ postData }: any) => {
  console.table(postData);
  console.log("herro");
  return (
    <>
      <h1>{postData.data.title}</h1>
      <Date dateString={postData.data.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </>
  );
};
export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
