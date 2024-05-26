import { useQuery } from "@tanstack/react-query";
import api from "../api/http";
import { useEffect } from "react";


const useGetAllProvinsi = (status: boolean) => {
    const allProvinsi = useQuery({
        queryKey: ['get-all-provinsi'],
        queryFn: () => api.get('/provinsi'),
        enabled: status
    })
    useEffect(() => {
        allProvinsi.refetch()
    }, [status])
    return allProvinsi
}

export default useGetAllProvinsi