export default class world {
  message: string
  

  constructor(message: string) {
    this.message = message
    const test:string = "sring"
  }

  public sayhello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerHTML = this.message
    }
  }
}
