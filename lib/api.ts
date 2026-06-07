const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// Projects API
export const projectsApi = {
  getAll: async (category?: string) => {
    const url = category ? `${API_BASE_URL}/projects?category=${category}` : `${API_BASE_URL}/projects`
    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch projects")
    return response.json()
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`)
    if (!response.ok) throw new Error("Failed to fetch project")
    return response.json()
  },
}

// Testimonials API
export const testimonialsApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/testimonials`)
    if (!response.ok) throw new Error("Failed to fetch testimonials")
    return response.json()
  },
}

// Services API
export const servicesApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/services`)
    if (!response.ok) throw new Error("Failed to fetch services")
    return response.json()
  },
}

// Contact API
export const contactApi = {
  submit: async (data: {
    name: string
    email: string
    phone?: string
    service: string
    message: string
  }) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to submit contact form")
    }

    return response.json()
  },
}
