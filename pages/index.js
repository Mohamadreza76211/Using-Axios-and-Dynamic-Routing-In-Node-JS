import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return <div>
    <h1>posts</h1>
    {props.posts.map(item=>{
     return <div key={item.id}> <a href={item.id}>{item.title}</a> <br/> </div>
    })}
  </div>;
}
export async function getStaticProps(context) {
  const result = await axios.get("http://jsonplaceholder.typicode.com/posts");
  const data =  result.data;
// let data =[]
//  await axios.get("http://jsonplaceholder.typicode.com/posts").then(response=>{
// data = response.data
  // })
  return {
    props: { posts: data },
  };
}
