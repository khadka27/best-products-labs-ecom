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
        prisma.subcategory.findMany({
          select: {
            name: true,
            slug: true,
            description: true,
          },
        }),
        prisma.product.findMany({
          where: { status: "PUBLISHED" },
          select: {
            name: true,
            slug: true,
            price: true,
            shortDescription: true,
            detailedDescription: true,
            keyFeatures: true,
            buyNowLink: true,
            readMoreLink: true,
            subcategory: {
              select: { name: true },
            },
            ingredients: {
              select: { name: true, description: true },
            },
          },
        }),
        prisma.article.findMany({
          where: { status: "PUBLISHED" },
          select: {
            title: true,
            slug: true,
            excerpt: true,
            content: true,
            author: {
              select: { name: true },
            },
          },
        }),
      ]);
      subcategories = sub;
      products = prod;
      articles = art;
    } catch (e) {
      console.error("Error fetching db data for llms-full.txt", e);
    }
  }

  let content = `# Official Products Lab - Full AI-Friendly Documentation & Content Index\n\n`;
  content += `Official Products Lab is a trusted editorial hub that organizes product information into clear, balanced reviews and buyer guides. We help shoppers understand popular online products, category definitions, pricing details, and key features before they visit dedicated product checkout or information pages.\n\n`;

  content += `## Content Philosophy & Process\n`;
  content += `- **Clarity Over Pressure**: Our content explains products in simple language. We avoid high-pressure sales tactics.\n`;
  content += `- **Balanced Reviews**: Every product overview highlights key features alongside realistic limitations and pros/cons.\n`;
  content += `- **Transparency**: Some of our reviews include affiliate links to third-party offers or product sites. We urge all users to check terms, refund rules, and package options on the seller's final page.\n\n`;

  content += `---\n\n`;

  content += `## Subcategories & Collections\n\n`;
  if (subcategories.length > 0) {
    for (const sub of subcategories) {
      content += `### ${sub.name}\n`;
      content += `- **Link**: https://officialproductslab.com/subcategory/${sub.slug}\n`;
      content += `- **Description**: ${sub.description || "No description available."}\n\n`;
    }
  } else {
    content += `No subcategories currently available.\n\n`;
  }

  content += `---\n\n`;

  content += `## Detailed Product Reviews\n\n`;
  if (products.length > 0) {
    for (const prod of products) {
      content += `### ${prod.name}\n`;
      content += `- **Link**: https://officialproductslab.com/${prod.slug}\n`;
      content += `- **Subcategory**: ${prod.subcategory?.name || "N/A"}\n`;
      content += `- **Price**: $${prod.price}\n`;
      if (prod.buyNowLink) {
        content += `- **Purchase Link**: ${prod.buyNowLink}\n`;
      }
      if (prod.readMoreLink) {
        content += `- **More Information**: ${prod.readMoreLink}\n`;
      }
      content += `- **Summary**: ${prod.shortDescription}\n`;
      if (prod.keyFeatures) {
        content += `- **Key Features**:\n${prod.keyFeatures.split("\n").map((line: string) => `  * ${line.trim()}`).join("\n")}\n`;
      }
      if (prod.ingredients && prod.ingredients.length > 0) {
        content += `- **Active Ingredients**:\n`;
        for (const ing of prod.ingredients) {
          content += `  * **${ing.name}**: ${ing.description || "N/A"}\n`;
        }
      }
      content += `- **Detailed Description**:\n${prod.detailedDescription}\n\n`;
      content += `---\n\n`;
    }
  } else {
    content += `No products currently available.\n\n`;
  }

  content += `## Published Articles & Guides\n\n`;
  if (articles.length > 0) {
    for (const art of articles) {
      content += `### ${art.title}\n`;
      content += `- **Link**: https://officialproductslab.com/article/${art.slug}\n`;
      content += `- **Author**: ${art.author?.name || "Official Products Lab Editorial Team"}\n`;
      if (art.excerpt) {
        content += `- **Excerpt**: ${art.excerpt}\n`;
      }
      content += `- **Content**:\n${art.content}\n\n`;
      content += `---\n\n`;
    }
  } else {
    content += `No articles currently published.\n\n`;
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
