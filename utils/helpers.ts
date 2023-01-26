export const scrollToElement = (elementId: string, offset: number) => {
  const element: HTMLElement = <HTMLElement>window.document.getElementById(elementId)
  const y: number = element.getBoundingClientRect().top + window.pageYOffset - offset

  setTimeout(() => window.scrollTo({ top: y, behavior: 'smooth' }), 330)
}
