function Card() {
  return (
    <div>
      <div className="grid rounded-xl aspect-[3/2] place-items-center bg-secondary">
        Laptop Picture
      </div>
      <div className="flex flex-row justify-between text-xl">
        <h2>laptop name</h2> <h4>2700₾</h4>
      </div>
    </div>
  );
}

export default Card;
