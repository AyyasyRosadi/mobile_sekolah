import { useQuery } from "@tanstack/react-query";
import api from "../api/http";
import { useEffect } from "react";


const useGetAllSchoolList = (status: boolean) => {
    const allSchoolList = useQuery({
        queryKey: ['get-all-school-list'],
        queryFn: () => api.get('/school-list'),
        enabled: status
    })
    useEffect(() => {
        allSchoolList.refetch()
    }, [status])
    return allSchoolList
}

export default useGetAllSchoolList