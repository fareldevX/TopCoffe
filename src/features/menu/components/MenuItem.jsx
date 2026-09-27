function MenuItem({ name, price, description }) {
  return (
    <div>
      <div className="flex justify-between items-baseline gap-4">
        <span className="font-headline-sm text-body-lg font-bold text-primary">
          {name}
        </span>
        <span className="font-body-md font-semibold text-primary whitespace-nowrap">
          {price}
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
        {description}
      </p>
    </div>
  );
}

export default MenuItem;
