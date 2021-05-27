interface HttpClient {
    get<T>() : Promise<T>
    post<T>() : Promise<T>
}

export default HttpClient
