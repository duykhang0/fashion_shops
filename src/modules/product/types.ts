import { ICategories } from "../category/type";

export interface IProduct{
    id_product?: number;
    name_product: string;
    price: string ;
    product_description: string;
    main_image: string;
    detail_images?:IDetailImageProduct[];
    categories?: ICategories[];
    created_at?: string;
    updated_at?: string;
}

export interface IDetailImageProduct {
    id_producut: number;
    name_detail_image: string
}