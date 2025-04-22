import { useGeneralMutation } from "../api/Common"
import { QUERY_KEYS } from "../quries/queryKey"
import { LoginResponse } from "../types/User/type"

export const useLogin=()=>{
    return useGeneralMutation<LoginResponse>('post','/api/admin/login',QUERY_KEYS.LOGIN)
}