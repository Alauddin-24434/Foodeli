// types.ts
export interface Review {
    userId: string;
    productId:string;
    username: string;               // Username of the reviewer
    rating: number;                 // Rating should be between 1 and 5
    profileImage: string;           // URL to the reviewer's profile image
    comment?: string;               // Optional comment
    date: string;          
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