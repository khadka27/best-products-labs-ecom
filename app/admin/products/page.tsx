'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2, Search, Package, ExternalLink } from 'lucide-react';
import type { Product, Subcategory } from '@/lib/types';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    Promise.all([
      fetch('/api/products?admin=true').then(r => r.json()),
      fetch('/api/subcategories').then(r => r.json()),
    ]).then(([prods, subs]) => {
      const list = Array.isArray(prods)
        ? prods
        : ((prods as { products?: Product[] })?.products ?? []);
      setProducts(Array.isArray(list) ? list : []);
      setSubcategories(Array.isArray(subs) ? subs : []);
    }).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    setDeletingId(null);
    load();
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingStatusId(id);
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setProducts(products.map(p => p.id === id ? { ...p, status: newStatus as 'PUBLISHED' | 'DRAFT' } : p));
      }
    } catch (error) {
      console.error('Failed to update status', error);
    } finally {
      setUpdatingStatusId(null);
    }
  };

  const getSubcategoryName = (id: string) => subcategories.find(s => s.id === id)?.name ?? '—';

  const filtered = products.filter(p => {
    const matchType = String(p.categoryType).toUpperCase() === 'ECOM';
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-sm">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Products</h1>
            <p className="text-gray-400 text-xs mt-0.5">{loading ? '…' : `${products.length} total`}</p>
          </div>
        </div>
        <Link href="/admin/products/new"
          className="flex items-center gap-1.5 px-4 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-xl text-sm font-medium transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Add Product
        </Link>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products…"
            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent bg-white" />
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2,3,4].map(i => <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[680px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Product</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Type</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500 hidden lg:table-cell">Subcategory</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Price</th>
                  <th className="text-right px-5 py-3 font-medium text-gray-500 w-32">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map(prod => (
                  <tr key={prod.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100" style={{ width: 64, height: 36 }}>
                          {prod.featuredImage || prod.image ? (
                            <img src={prod.featuredImage || prod.image} alt={prod.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-4 h-4 text-gray-300" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 line-clamp-1">{prod.name}</p>
                          {prod.shortDescription && (
                            <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{prod.shortDescription}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        String(prod.categoryType).toUpperCase() === 'NUTRA'
                          ? 'bg-orange-50 text-orange-700 border border-orange-200'
                          : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}>
                        {String(prod.categoryType).toUpperCase() === 'NUTRA' ? '🌿' : '🛒'} {String(prod.categoryType).toUpperCase()}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden lg:table-cell">{getSubcategoryName(prod.subcategoryId)}</td>
                    <td className="px-5 py-3.5">
                      <select
                        value={prod.status}
                        onChange={(e) => handleStatusChange(prod.id, e.target.value)}
                        disabled={updatingStatusId === prod.id}
                        className={`text-xs font-semibold rounded-full px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer border ${
                          prod.status === 'PUBLISHED'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        } ${updatingStatusId === prod.id ? 'opacity-50 cursor-wait' : ''}`}
                      >
                        <option value="PUBLISHED" className="text-emerald-700 bg-white">Published</option>
                        <option value="DRAFT" className="text-amber-700 bg-white">Draft</option>
                      </select>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-orange-600">${prod.price.toFixed(2)}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Link
                          href={`/${prod.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View preview on store"
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <Link href={`/admin/products/${prod.id}`}
                          title="Edit"
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                          <Pencil className="w-3.5 h-3.5" />
                        </Link>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="rounded-2xl">
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete product?</AlertDialogTitle>
                              <AlertDialogDescription>
                                <strong>{prod.name}</strong> will be permanently deleted.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(prod.id)} disabled={deletingId === prod.id}
                                className="rounded-xl bg-red-500 hover:bg-red-600 text-white border-0">
                                {deletingId === prod.id ? 'Deleting…' : 'Delete'}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="py-16 flex flex-col items-center gap-3 text-gray-400">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-gray-300" />
              </div>
              <p className="text-sm font-medium">{search ? 'No products match your filters' : 'No products yet'}</p>
              {!search && (
                <Link href="/admin/products/new" className="text-xs text-amber-600 hover:underline">Add your first product →</Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
