import { useQuery } from "@tanstack/react-query";
import api from "../api/http";
import { useEffect } from "react";


const useGetAllListSekolah = (status: boolean) => {
    const allListSekolah = useQuery({
        queryKey: ['get-all-list-sekolah'],
        queryFn: () => api.get('/daftar-sekolah'),
        enabled: status
    })
    useEffect(() => {
        allListSekolah.refetch()
    }, [status])
    return allListSekolah
}

export default useGetAllListSekolah