import { useEffect, useState } from 'react'
import useGetAllRegency from '../hooks/getRegency'
import { RegencyAttributes } from '../type'

export default function useRegencyOptions(province_id: string, status: boolean) {
    const [regencyList, setRegencyList] = useState([])
    const regency = useGetAllRegency(province_id, status)
    useEffect(() => {
        if (regency?.data?.data && province_id !== '') {
            setRegencyList(regency?.data?.data?.map((value: RegencyAttributes) => {
                return { value: value.id, label: value.name }
            }))
        }
    }, [regency?.data?.data, province_id])
    return regencyList
}