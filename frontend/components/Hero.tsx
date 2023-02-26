import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/hero.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">CounterVerse</h1>
          <p className="mb-5">
            CounterVerse is a premier web3 shop for Counter Strike enthusiasts
            looking for unique and collectible stickers for their favorite game.
          </p>
          <Link href={"/gallery?type=stickers"}>
            <button className="btn btn-primary">Launch app</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
