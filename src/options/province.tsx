import { useEffect, useState } from 'react'
import useGetAllProvince from '../hooks/getProvince'
import { ProvinceAttributes } from '../type'

export default function useProvinceOptions() {
    const [provinceList, setProvinceList] = useState([])
    const province = useGetAllProvince(true)
    useEffect(() => {
        if (province?.data?.data) {
            setProvinceList(province?.data?.data?.map((value: ProvinceAttributes) => {
                return { value: value.id, label: value.name }
            }))
        }
    }, [province?.data?.data])
    return provinceList
}