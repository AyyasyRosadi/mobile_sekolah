import { useEffect, useState } from 'react'
import useGetAllKabupaten from '../hooks/getKabupaten'

export default function useKabupatenOptions(provinsi_id: string,status:boolean) {
    const [kabupatenList, setKabupatenList] = useState([])
    const provinsi = useGetAllKabupaten(provinsi_id, status)
    useEffect(() => {
        if (provinsi?.data?.data && provinsi_id !== '') {
            setKabupatenList(provinsi?.data?.data?.map((value) => {
                return { value: value.id, label: value.nama }
            }))
        }
    }, [provinsi?.data?.data, provinsi_id])
    return kabupatenList
}