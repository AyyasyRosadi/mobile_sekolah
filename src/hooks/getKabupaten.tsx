import { useQuery } from "@tanstack/react-query";
import api from "../api/http";
import { useEffect } from "react";


const useGetAllKabupaten = (provinsi_id: string, status: boolean) => {
    const allKabupaten = useQuery({
        queryKey: ['get-all-kabupaten'],
        queryFn: () => api.get(`/kabupaten?provinsi_id=${provinsi_id}`),
        enabled: status && provinsi_id !== ""
    })
    useEffect(() => {
        if(provinsi_id !== "" && status){
            allKabupaten.refetch()
        }
    }, [status, provinsi_id])
    return allKabupaten
}

export default useGetAllKabupaten