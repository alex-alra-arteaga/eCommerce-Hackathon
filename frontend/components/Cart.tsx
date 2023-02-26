type CartProps = {
  itemCount: number;
  subTotal: number;
};

export default function Cart(
  { itemCount, subTotal }: CartProps,
) {
  return (
    <div className="card-body">
      <span className="font-bold text-lg">{itemCount} Items</span>
      <span className="text-info">Subtotal: ${subTotal}</span>
      <div className="card-actions">
        <button className="btn btn-primary btn-block">View cart</button>
      </div>
    </div>
  );
}
