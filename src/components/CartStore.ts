export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

const CART_KEY = 'kppf-cart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart-updated'));
}

export function addToCart(item: Omit<CartItem, 'quantity'>, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.slug === item.slug);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...item, quantity: qty });
  }
  saveCart(cart);
}

export function removeFromCart(slug: string) {
  saveCart(getCart().filter(i => i.slug !== slug));
}

export function updateQuantity(slug: string, qty: number) {
  const cart = getCart();
  const item = cart.find(i => i.slug === slug);
  if (item) {
    item.quantity = Math.max(1, qty);
    saveCart(cart);
  }
}

export function clearCart() {
  saveCart([]);
}

export function getCartTotal(): number {
  return getCart().reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function getCartCount(): number {
  return getCart().reduce((sum, i) => sum + i.quantity, 0);
}
