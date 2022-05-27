import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const details = (props) => {

if(!props.post)
{
  return <h1>loading....</h1>
}

  return (
    <div>
      <p>{props.post.title}</p>
    </div>
  );
};

export async function getStaticProps(context) {

   // console.log(context.params.PostId)
   let data = {}
   const result = await axios.get(
    `http://jsonplaceholder.typicode.com/posts/${context.params.PostId}`
  ).then(response=>{
      data = response.data
  }).catch(error=>{
      console.log(error)
  })


 

//   console.log(data)
  return {
    props: { post: data },
  };
}


// export async function getServerSideProps(context) {
//   console.log(context.req)
// }


export async function getStaticPaths() {
  return {
    paths: [{ params: { PostId: "1" } }, { params: { PostId: "2" } }],
    fallback: true,
  };
}

export default details;
