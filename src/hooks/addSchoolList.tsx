import { useMutation } from "@tanstack/react-query";
import api from "../api/http";
import { SchoolListAttributes } from "../type";


const useAddSchoolList = () => {
    const addSchoolList = useMutation({
        mutationKey: ['post-school-list'],
        mutationFn: (data: Omit<SchoolListAttributes, 'id'>) => api.post('/school-list', data),
        onSuccess: (value) => {
            return value
        },
        onError: (err) => {
            return err
        }
    })
    return addSchoolList
}

export default useAddSchoolList