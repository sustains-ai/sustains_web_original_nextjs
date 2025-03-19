import { useSelector } from "react-redux"

export const useIsAdmin = (): boolean => {
    const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn)
    const user = useSelector((state: any) => state.login.user)

    if (isLoggedIn && user?.email?.endsWith("sustains.ai")) {
        return true
    }

    return false
}