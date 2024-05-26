export interface ProvinsiAttributes {
    id: string;
    name: string;
}

export interface KabupatenAttributes {
    id: string;
    name: string;
    provinsi_id: string;
}

export interface DaftarSekolahAttributes {
    id: string;
    category: string;
    name: string;
    address: string;
    postal_code: string;
    provinsi_id: number;
    kabupaten_id: number;
    phone_number: string;
    email: string;
    facebook: string;
    total_students: number;
    provinsi?: ProvinsiAttributes;
    kabupaten?: KabupatenAttributes;
}
