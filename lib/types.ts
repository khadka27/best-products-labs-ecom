export type CategoryType = 'nutra' | 'ecom';
export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  type: CategoryType;
  description: string;
  image: string;
  createdAt: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  categoryType: CategoryType;
  description: string;
  image: string;
  createdAt: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  title: string;
  bio: string;
  expertise: string;
  avatar: string;
  avatarAlt: string;
  reviewCount: number;
  rating: number;
}

export interface Ingredient {
  keyFeatures?: string | null;
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  categoryType: CategoryType;
  subcategoryId: string;
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  featuredImage: string;
  featuredImageAlt: string;
  readMoreLink: string;
  buyNowLink: string;
  createdAt: string;
  updatedAt: string;
  author?: Author;
  ingredients?: Ingredient[];
}

export interface HeroSettings {
  primaryColor?: string;
  ctaColor?: string;
  accentColor?: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  backgroundType: 'gradient' | 'image';
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  textColor: string;
  overlayOpacity: number;
  backgroundPosition: string;
  backgroundSize: string;
  buyNowLink: string;
  updatedAt: string;
}
