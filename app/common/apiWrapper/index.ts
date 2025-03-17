// Copyright © 2025 Sustains AI, All Rights Reserved
import axios from "axios"
import { logger } from "../logger"

// Set content type as JSON for all post requests.
axios.defaults.headers.post["Content-Type"] = "application/json"

export const mainAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000
})

// Add a request interceptor
const requestInterceptor = {
  onSuccess: async (config: any) => {
    console.log("req", config)

    return config
  },
  onError: (error: Error) => {
    logger.error("Error in apiWrapper", error)

    return Promise.reject(error)
  }
}

mainAxios.interceptors.request.use(requestInterceptor.onSuccess, requestInterceptor.onError)

// Add a response interceptor
const responseInterceptor = {
  onSuccess: (response: any) => {
    console.log("response", response)
    if (response.status === 200 && response.data.success === false){
      window.alert(response.data.message)
    }

    return response
  },
  onError: async (error: any) => {
    const originalRequest = error.config
    console.log("Api Failed: ", {
      request: originalRequest,
      response: error.response
    })
    if (error.response.status === 404) {
      // globalNavigate('/sessionExpired', { replace: true })
    }
    logger.error("Error in apiWrapper", error)

    return Promise.reject(error)
  }

}

mainAxios.interceptors.response.use(responseInterceptor.onSuccess, responseInterceptor.onError)
