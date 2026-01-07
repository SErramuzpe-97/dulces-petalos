import type { Product } from "./types";

export const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v${import.meta.env.VITE_API_VERSION}`

const MAX_ATTEMPTS = 5
const RETRY_DELAY_MS = 1000

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }
  return response.json()
}

const customFetch = async <T>(endpoint: string): Promise<T> => {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const data = await fetchJson<T>(`${apiUrl}/${endpoint}`)
      return data
    } catch {
      if (attempt === MAX_ATTEMPTS) {
        throw new Error("Error getting data")
      }
      await sleep(RETRY_DELAY_MS)
    }
  }

  throw new Error("Error al obtener los datos.")
}

/* Product consumption functions */

const getProducts = async (): Promise<Product[]> => {
  try {
    const data = await customFetch<Product[]>(`product`)
    return data
  } catch {
    throw new Error("Error getting products")
  }
}

const getProductById = async (id: string): Promise<Product> => {
  try {
    const data = await customFetch<Product>(`product/${id}`)
    return data
  } catch {
    throw new Error(`Error getting product ${id}`)
  }
}



export { getProducts, getProductById };