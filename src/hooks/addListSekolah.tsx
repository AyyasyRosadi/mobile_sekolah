import { useMutation } from "@tanstack/react-query";
import api from "../api/http";
import DaftarSekolahAttributes from "../type";


const useAddListSekolah = () => {
    const allProvinsi = useMutation({
        mutationKey: ['get-all-provinsi'],
        mutationFn: (data: Omit<DaftarSekolahAttributes, 'id'>) => api.post('/daftar-sekolah', data),
        onSuccess: (value) => {
            return value
        },
        onError: (err) => {
            return err
        }
    })
    return allProvinsi
}

export default useAddListSekolah