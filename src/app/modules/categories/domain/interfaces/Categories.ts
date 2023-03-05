export interface Categories {
  categories: Category[];
}

export interface Category {
  _id?: string;
  name: string;
  description?: string;
  icon: string;
  color: string;
}