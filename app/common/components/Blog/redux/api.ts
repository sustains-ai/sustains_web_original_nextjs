import { mainAxios } from "@/app/common/apiWrapper"

export const addBlogAPI = async (payload: any) => {
    const { data } = await mainAxios.post("/api/blog", payload)

    return data
}

export const getBlogsAPI = async () => {
    const { data } = await mainAxios.get("/api/blog")

    return data
}

export const getBlogByIdAPI = async (id: string) => {
    const { data } = await mainAxios.get(`/api/blog/${id}`)

    return data
}

export const updateBlogByIdAPI = async (id: string, payload: any) => {
    const { data } = await mainAxios.put(`/api/blog/${id}`, payload)

    return data
}

export const deleteBlogByIdAPI = async (id: string) => {
    const { data } = await mainAxios.delete(`/api/blog/${id}`)

    return data
}