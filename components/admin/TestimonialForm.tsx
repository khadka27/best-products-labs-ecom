"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Save, ArrowLeft, Loader2, Star } from "lucide-react";
import Link from "next/link";
import ImageUpload from "./ImageUpload";

interface TestimonialFormProps {
  initialData?: any;
}

export default function TestimonialForm({ initialData }: TestimonialFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    role: initialData?.role || "",
    content: initialData?.content || "",
    rating: initialData?.rating || 5,
    avatar: initialData?.avatar || "",
    isPublished: initialData?.isPublished ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.content) {
      toast.error("Name and content are required.");
      return;
    }

    setLoading(true);
    try {
      const url = initialData
        ? `/api/admin/testimonials/${initialData.id}`
        : "/api/admin/testimonials";
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save");

      toast.success(initialData ? "Testimonial updated!" : "Testimonial created!");
      router.push("/admin/testimonials");
      router.refresh();
    } catch (error) {
      toast.error("Failed to save testimonial");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/testimonials"
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {initialData ? "Edit Testimonial" : "New Testimonial"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {initialData ? "Update existing review." : "Add a new customer review."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Reviewer Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50/50"
              placeholder="e.g. Jane Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Role / Location (Optional)</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50/50"
              placeholder="e.g. Verified Buyer, New York"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900">Review Content *</label>
          <textarea
            required
            rows={4}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50/50 resize-y"
            placeholder="What did they say?"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start border-t border-gray-100 pt-8">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Avatar Image (Optional)</label>
            <ImageUpload
              value={formData.avatar}
              onChange={(url) => setFormData({ ...formData, avatar: url })}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">Rating</label>
              <div className="flex items-center gap-2 bg-gray-50/50 p-2 rounded-xl border border-gray-200 w-fit">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`p-1 rounded-lg transition-all ${
                      formData.rating >= star ? "text-amber-400 hover:scale-110" : "text-gray-300 hover:text-amber-200"
                    }`}
                  >
                    <Star className="w-6 h-6" fill={formData.rating >= star ? "currentColor" : "none"} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50/50 p-4 rounded-xl border border-gray-200">
              <input
                type="checkbox"
                id="isPublished"
                checked={formData.isPublished}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                className="w-5 h-5 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
              />
              <label htmlFor="isPublished" className="text-sm font-medium text-gray-900 select-none">
                Publish on website
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-100">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {loading ? "Saving..." : "Save Testimonial"}
          </button>
        </div>
      </form>
    </div>
  );
}
