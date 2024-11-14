// types.ts
export interface Review {
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
  }

export interface IFoodItem {
    _id: string;
    name: string;
    category: string;
    price: number;
    thumbnailImage: string;
    additionalImages: string[];
    description: string;
    isAvailable: boolean;
    reviews: Review[]; // যদি Review আলাদা ইন্টারফেস থাকে তবে এটা ব্যবহার করা যাবে, নাহলে Array<any> দিতে হবে।
  }