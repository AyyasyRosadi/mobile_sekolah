import { useQuery } from "@tanstack/react-query";
import api from "../api/http";
import { useEffect } from "react";


const useGetAllRegency = (province_id: string, status: boolean) => {
    const allRegency = useQuery({
        queryKey: ['get-all-regency'],
        queryFn: () => api.get(`/regency?province_id=${province_id}`),
        enabled: status && province_id !== ""
    })
    useEffect(() => {
        if (province_id !== "" && status) {
            allRegency.refetch()
        }
    }, [status, province_id])
    return allRegency
}

export default useGetAllRegency