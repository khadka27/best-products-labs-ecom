import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  let subcategories: any[] = [];
  let products: any[] = [];
  let articles: any[] = [];

  if (process.env.DATABASE_URL) {
    try {
      const prisma = (await import("@/lib/db")).default;
      const [sub, prod, art] = await Promise.all([
        prisma.subcategory.findMany({ select: { name: true, slug: true, description: true } }),
        prisma.product.findMany({ select: { name: true, slug: true, shortDescription: true } }),
        prisma.article.findMany({ select: { title: true, slug: true, excerpt: true } }),
      ]);
      subcategories = sub;
      products = prod;
      articles = art;
    } catch (e) {
      console.error("Error fetching db data for llms.txt", e);
    }
  }

  let content = `# Official Products Lab\n\nOfficial Products Lab helps shoppers explore product reviews, compare features, understand pros and cons, and learn what to check before visiting a product page.\n\n`;

  content += `## Main Pages\n`;
  content += `- [Home Page](https://officialproductslab.com) - Curated buyer-focused reviews of trending supplements and lifestyle products.\n`;
  content += `- [All Products](https://officialproductslab.com/products) - Complete catalog of products reviewed on the site.\n`;
  content += `- [About Us](https://officialproductslab.com/about) - Information about our review process and mission.\n`;
  content += `- [Contact](https://officialproductslab.com/contact) - Contact form for inquiries.\n\n`;

  content += `## Editorial & Guidelines\n`;
  content += `- [How We Review](https://officialproductslab.com/legal/how-we-review) - Our editorial principles and content approach.\n`;
  content += `- [Terms & Conditions](https://officialproductslab.com/legal/terms) - Terms governing website usage.\n`;
  content += `- [Privacy Policy](https://officialproductslab.com/legal/privacy) - Information on user privacy and cookies.\n`;
  content += `- [Refunds Policy](https://officialproductslab.com/legal/refunds) - Guarantee and refund awareness reminders.\n`;
  content += `- [Shipping Info](https://officialproductslab.com/legal/shipping) - General shipping guidelines.\n`;
  content += `- [Cookies Policy](https://officialproductslab.com/legal/cookies) - Cookie usage information.\n\n`;

  if (subcategories.length > 0) {
    content += `## Subcategories\n`;
    for (const sub of subcategories) {
      content += `- [${sub.name}](https://officialproductslab.com/subcategory/${sub.slug}) - ${sub.description || "Browse product reviews in this category."}\n`;
    }
    content += `\n`;
  }

  if (products.length > 0) {
    content += `## Product Reviews\n`;
    for (const prod of products) {
      content += `- [${prod.name}](https://officialproductslab.com/${prod.slug}) - ${prod.shortDescription || "Detailed product review and specs."}\n`;
    }
    content += `\n`;
  }

  if (articles.length > 0) {
    content += `## Articles\n`;
    for (const art of articles) {
      content += `- [${art.title}](https://officialproductslab.com/article/${art.slug}) - ${art.excerpt || "Read our full article."}\n`;
    }
    content += `\n`;
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
