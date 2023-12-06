export interface IProduct{
    name_product: string;
    price: number | null;
    description: string;
    main_image: string;
    detail_images:IDetailImageProduct[];
    created_at?: string;
    updated_at?: string;
}

export interface IDetailImageProduct {
    id_producut: number;
    name_detail_image: string
}