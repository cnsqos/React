function ProductCard({ imageUrl, name, price }) {
  const formattedPrice = price.toLocaleString();

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', width: '200px', margin: '10px' }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h4>{name}</h4>
      <p style={{ fontWeight: 'bold', color: 'green' }}>{formattedPrice}원</p>
      <button style={{ width: '100%', padding: '5px' }}>장바구니 담기</button>
    </div>
  );
}

export default ProductCard;