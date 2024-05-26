export interface ProvinceAttributes {
    id: string;
    name: string;
}

export interface RegencyAttributes {
    id: string;
    name: string;
    province_id: string;
}

export interface SchoolListAttributes {
    id: string;
    category: string;
    name: string;
    address: string;
    postal_code: string;
    province_id: string;
    regency_id: string;
    phone_number: string;
    email: string;
    facebook: string;
    total_students: number;
    province?: ProvinceAttributes;
    regency?: RegencyAttributes;
}
