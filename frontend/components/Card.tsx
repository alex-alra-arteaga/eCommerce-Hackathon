type CardProps = {
  imageURL: string;
  alt: string;
  title: string;
  description: string;
  color: "green" | "yellow" | "purple" | "stone";
};

export default function Cart(
  { imageURL, alt, title, description, color }: CardProps,
) {
  return (
    <div
      className={`flex-1 card w-96 bg-base-100 shadow-xl ring-${color}-500 ring-2`}
    >
      <figure>
        <img
          src={imageURL}
          alt={alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="py-5">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-outline">Add to cart</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
