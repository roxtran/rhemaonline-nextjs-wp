type ServiceType = {
  slug: string
  title: string
  content: string
  excerpt: string
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
  formLink: {
    formLink: string
    linkText: string
  }
}

export default ServiceType
