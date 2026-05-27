import prisma from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";

export const metadata = {
  title: "Guides & Articles | OfficialProductsLab",
  description: "Read our latest guides, health tips, and product reviews.",
};

export default async function ArticlesIndexPage() {
  const articles = await prisma.article.findMany({
    where: {
      status: "PUBLISHED",
    },
    include: {
      author: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <section className="relative bg-[#2C2C2C] py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl -ml-20 -mb-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6 ring-1 ring-orange-500/30 backdrop-blur-md">
              <BookOpen className="w-6 h-6 text-orange-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Guides & <span className="text-orange-400">Articles</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Expert advice, deep-dive reviews, and ultimate guides to help you
              make the most informed wellness decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {articles.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-slate-800 mb-2">No articles published yet</h2>
              <p className="text-slate-500">Check back later for new guides and content.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.slug}`}
                  className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    {article.featuredImage ? (
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt || article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-slate-300" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      {article.publishedAt && (
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-orange-500" />
                          {new Date(article.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-black text-slate-900 leading-tight mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>
                    )}

                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {article.author?.avatar ? (
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 border-2 border-white shadow-sm">
                            <User className="w-4 h-4" />
                          </div>
                        )}
                        <span className="text-xs font-bold text-slate-700">
                          {article.author?.name || "OfficialProductsLab"}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-xs font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
