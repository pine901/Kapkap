const sessionStorageService = {
  getData: (key: string) => {
    if (process.client) {
      const item = window.sessionStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      }
    }
    return null
  },

  setData: (key: string, value: Record<string, any>) => {
    if (process.client) {
      const str = JSON.stringify(value)
      window.sessionStorage.setItem(key, str)
    }
  }
}

export default sessionStorageService
