import prisma from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, ArrowRight, User } from "lucide-react";

export const metadata = {
  title: "Guides & Articles | OfficialProductsLab",
  description: "Read our latest guides, health tips, and product reviews.",
};

export default async function ArticlesIndexPage() {
  const allArticles = await prisma.article.findMany({
    include: {
      author: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  const heroArticle = allArticles[0] ?? null;
  const otherArticles = heroArticle
    ? allArticles.slice(1)
    : allArticles;

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
          {allArticles.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-slate-800 mb-2">No articles published yet</h2>
              <p className="text-slate-500">Check back later for new guides and content.</p>
            </div>
          ) : (
            <div className="space-y-12 sm:space-y-16">
              {/* Featured Hero Article */}
              {heroArticle && (
                <div className="mb-12">
                  <Link
                    href={`/article/${heroArticle.slug}`}
                    className="group grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[300px] sm:min-h-[400px] bg-slate-100 overflow-hidden">
                      {heroArticle.featuredImage ? (
                        <Image
                          src={heroArticle.featuredImage}
                          alt={heroArticle.featuredImageAlt || heroArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-slate-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                          Featured Guide
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {heroArticle.publishedAt && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-orange-500" />
                            {new Date(heroArticle.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4 group-hover:text-orange-600 transition-colors">
                        {heroArticle.title}
                      </h2>

                      {heroArticle.excerpt && (
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                          {heroArticle.excerpt}
                        </p>
                      )}

                      <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          {heroArticle.author?.avatar ? (
                            <img
                              src={heroArticle.author.avatar}
                              alt={heroArticle.author.name}
                              className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 border-2 border-white shadow-sm">
                              <User className="w-4 h-4" />
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-bold text-slate-700 leading-none">
                              {heroArticle.author?.name || "OfficialProductsLab"}
                            </p>
                            <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                              {heroArticle.author?.title || "Editorial Writer"}
                            </p>
                          </div>
                        </div>

                        <span className="flex items-center gap-1 text-xs font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                          Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Grid of other articles */}
              {otherArticles.length > 0 && (
                <div>
                  {heroArticle && (
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 pl-1">
                      More Articles & Guides
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherArticles.map((article) => (
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
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
