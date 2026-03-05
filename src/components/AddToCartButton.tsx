import { useState } from 'preact/hooks';
import { addToCart } from './CartStore';

interface Props {
  slug: string;
  name: string;
  price: number;
}

export default function AddToCartButton({ slug, name, price }: Props) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ slug, name, price }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div class="flex items-center gap-4">
      <div class="flex items-center border border-gray-600 rounded-lg">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          class="px-3 py-2 text-gray-400 hover:text-white transition-colors"
        >−</button>
        <span class="px-4 py-2 text-white font-medium min-w-[3rem] text-center">{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          class="px-3 py-2 text-gray-400 hover:text-white transition-colors"
        >+</button>
      </div>
      <button
        onClick={handleAdd}
        class={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
          added
            ? 'bg-green-600 text-white'
            : 'bg-amber-600 hover:bg-amber-700 text-white'
        }`}
      >
        {added ? '✓ Added!' : 'Add to Cart'}
      </button>
    </div>
  );
}
