const localStorageService = {
  getData: (key: string) => {
    if (process.client) {
      const item = localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      }
    }
    return null
  },

  setData: (key: string, value: Record<string, any>) => {
    if (process.client) {
      const str = JSON.stringify(value)
      localStorage.setItem(key, str)
    }
  }
}

export default localStorageService
