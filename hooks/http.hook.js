import { useCallback, useState } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url,method = 'GET',body=null,headers={})=>{
        setLoading(true)
        try{
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            
            const res = await fetch(url,{method,body,headers})
            const data = res.json()

            if (!res.ok) {

                throw new Error(data.message || `Что-то пошло не так `)
            }
            setLoading(false)
            return data
        }catch(e){
            setLoading(false)
            setError(e.message)
            throw e
        }
    })

    const clearError = useCallback(()=> setError(null),[])
    return { loading, request, error, clearError }
}

export default useHttp;
