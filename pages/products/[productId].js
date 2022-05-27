import axios from "axios";

const ProductDetails = (props) => {
  return (
    <div>
      <h1>{props.prd.title}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = {};
  data = await axios
    .get(
      `http://jsonplaceholder.typicode.com/posts/${context.params.productId}`
    )
    .then((response) => {
    //  console.log(response.data)
        return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      prd: data,
    },
  };

  //     console.log(context.params.productId)
  //   return {
  //     props: {
  //       id: context.params.productId,
  //     },
  //   };
}

export default ProductDetails;
