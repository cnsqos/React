const Product = ({ name, price }) => {
  return (
    <>
    <h3>{name}</h3>
    <p>{price}</p>
    </>
  );
};

export default Product;


// - 상품명과 가격을 props로 전달
// - 상품명은 <h3>에 , 가격은 <p>에 넣기
// - App.jsx에서 3개 이상 사용