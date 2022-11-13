import { GetStaticProps } from "next";

const Main = () => {

}
export default Main;

export const getStaticProps: GetStaticProps = async () => {
  // const db = await openDB();
  // const faq = await db.all('SELECT * FROM FAQ ORDER BY createDate DESC');
  return {props: {name: 'no'}};
}