import { useEffect, useState } from 'react'
import useGetAllProvinsi from '../hooks/getProvinsi'

export default function useProvinsiOptions() {
    const [provinsiList, setProvinsiList] = useState([])
    const provinsi = useGetAllProvinsi(true)
    useEffect(() => {
        if (provinsi?.data?.data) {
            setProvinsiList(provinsi?.data?.data?.map((value) => {
                return { value: value.id, label: value.name }
            }))
        }
    }, [provinsi?.data?.data])
    return provinsiList
}