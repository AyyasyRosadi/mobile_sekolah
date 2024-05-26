export default interface ProvinsiAttributes {
    id: string;
    nama: string;
}

export default interface KabupatenAttributes {
    id: string;
    nama: string;
    provinsi_id: string;
}

export default interface DaftarSekolahAttributes {
    id: string;
    kategori: string;
    nama: string;
    alamat: string;
    kode_pos: number;
    provinsi_id: string;
    kabupaten_id: string;
    no_telepon: string;
    email: string;
    facebook: string;
    jumlah_siswa: number;
    provinsi?: ProvinsiAttributes;
    kabupaten?: any;
}

