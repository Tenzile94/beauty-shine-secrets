import { products } from './products';

export function getProductById(id: number) {
  return products.find(p => p.id === id);
}

export function getProductsByIds(ids: number[]) {
  return products.filter(p => ids.includes(p.id));
}

