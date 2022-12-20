import axios, { AxiosRequestConfig } from 'axios'
export const requestHandling = (url: string, method: any, data?: any) => {
  const options: AxiosRequestConfig<any> = {
    url,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: data,
  }
  return axios(options)
    .then((response: any) => {
      const { data, err } = response || {}
      if (err) {
        throw err
      }
      return data
    })
    .catch((error: any) => {
      throw error
    })
}

