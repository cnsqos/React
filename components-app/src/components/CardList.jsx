import ProductCard from './ProductCard.jsx';

function CardList() {
  const products = [
    { id: 1, name: "마우스", price: 55000, img: "mouse.jpg" },
    { id: 2, name: "키보드", price: 129000, img: "keyboard.jpg" },
    { id: 3, name: "모니터", price: 380000, img: "monitor.jpg" },
  ];

  return (
    <>
      <h2>오늘의 추천 상품</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={`/images/${product.img}`}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default CardList;
