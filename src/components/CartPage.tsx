import { useState, useEffect } from 'preact/hooks';
import { getCart, removeFromCart, updateQuantity, clearCart, getCartTotal, type CartItem } from './CartStore';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const refresh = () => setCart([...getCart()]);

  useEffect(() => {
    refresh();
    window.addEventListener('cart-updated', refresh);
    return () => window.removeEventListener('cart-updated', refresh);
  }, []);

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    console.log('Order submitted:', { ...data, items: cart, total });
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div class="text-center py-16">
        <div class="text-6xl mb-6">✅</div>
        <h2 class="text-3xl font-bold mb-4 text-amber-400">Thank You!</h2>
        <p class="text-gray-300 text-lg mb-8">Your order request has been submitted. We'll contact you shortly to confirm details and arrange delivery.</p>
        <a href="/products" class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Continue Shopping
        </a>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div class="text-center py-16">
        <div class="text-6xl mb-6">🛒</div>
        <h2 class="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p class="text-gray-400 mb-8">Browse our products and add some premium PPF to your cart.</p>
        <a href="/products" class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Browse Products
        </a>
      </div>
    );
  }

  return (
    <div class="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div class="lg:col-span-2 space-y-4">
        {cart.map((item) => (
          <div key={item.slug} class="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold">{item.name}</h3>
              <p class="text-amber-400 font-medium">€{item.price.toFixed(2)} per roll</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center border border-gray-600 rounded-lg">
                <button onClick={() => { updateQuantity(item.slug, item.quantity - 1); refresh(); }}
                  class="px-3 py-1 text-gray-400 hover:text-white">−</button>
                <span class="px-3 py-1 font-medium min-w-[2.5rem] text-center">{item.quantity}</span>
                <button onClick={() => { updateQuantity(item.slug, item.quantity + 1); refresh(); }}
                  class="px-3 py-1 text-gray-400 hover:text-white">+</button>
              </div>
              <span class="text-white font-semibold min-w-[5rem] text-right">€{(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => { removeFromCart(item.slug); refresh(); }}
                class="text-red-400 hover:text-red-300 transition-colors" title="Remove">
                ✕
              </button>
            </div>
          </div>
        ))}

        <div class="bg-gray-800 rounded-xl p-6 border border-gray-700 flex justify-between items-center">
          <span class="text-xl font-bold">Total:</span>
          <span class="text-2xl font-bold text-amber-400">€{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Order Form */}
      <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-fit">
        <h2 class="text-2xl font-bold mb-6 text-amber-400">Order Details</h2>
        <form onSubmit={handleSubmit} class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Name *</label>
            <input type="text" name="name" required
              class="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="Your name" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Email *</label>
            <input type="email" name="email" required
              class="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="your@email.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
            <input type="tel" name="phone" required
              class="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="+46 ..." />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1">Notes</label>
            <textarea name="notes" rows={3}
              class="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
              placeholder="Delivery preferences, questions..."></textarea>
          </div>
          <button type="submit"
            class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg">
            Submit Order Request
          </button>
          <p class="text-xs text-gray-500 text-center">We'll contact you to confirm pricing and delivery details.</p>
        </form>
      </div>
    </div>
  );
}
