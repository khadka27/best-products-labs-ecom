import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const testimonial = await prisma.testimonial.create({
      data: {
        name: body.name,
        role: body.role,
        content: body.content,
        avatar: body.avatar,
        rating: body.rating ? parseInt(body.rating) : 5,
        isPublished: body.isPublished ?? true,
      },
    });
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Testimonial POST Error:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
