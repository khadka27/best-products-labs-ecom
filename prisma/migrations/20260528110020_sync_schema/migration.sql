-- AlterTable
ALTER TABLE "hero_settings" ADD COLUMN     "accentColor" TEXT NOT NULL DEFAULT '#28A745',
ADD COLUMN     "ctaColor" TEXT NOT NULL DEFAULT '#FF6600',
ADD COLUMN     "primaryColor" TEXT NOT NULL DEFAULT '#007BFF';

-- AlterTable
ALTER TABLE "ingredients" ADD COLUMN     "keyFeatures" TEXT;

-- CreateTable
CREATE TABLE "testimonials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "content" TEXT NOT NULL,
    "avatar" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);
