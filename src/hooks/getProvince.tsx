import { useQuery } from "@tanstack/react-query";
import api from "../api/http";
import { useEffect } from "react";


const useGetAllProvince = (status: boolean) => {
    const allProvince = useQuery({
        queryKey: ['get-all-province'],
        queryFn: () => api.get('/province'),
        enabled: status
    })
    useEffect(() => {
        allProvince.refetch()
    }, [status])
    return allProvince
}

export default useGetAllProvince