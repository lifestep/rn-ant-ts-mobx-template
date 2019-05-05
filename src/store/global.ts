import { observable, action, flow, computed } from "mobx";

interface Props {
  test: any
}

class Store<Props> {
  @observable test: any = 'hello world' // 注册变量，使其成为可检测的
  @observable token: any = ''

  num: number = 1

  constructor() {}

  @computed
  get count() {
    return `(${this.test}): ${this.num}`
  }

  @action // 方法
  changingTest(txt: string = 'world...'):void {
    this.test = 'hello ' + txt
  }

  @action // 异步方法1
  getTest() {
    this.test = 'loading'
    this.num++
    setTimeout(() => {
      action('success', () => {
        this.test = 'hello async text'
      })()
    }, 3000);
  }

  @action
  promiseMethod() {
    this.num++
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello flow text1')
      }, 3000)
    })
  }

  // 异步方法2
  getTest2 = flow(function *(this: Store<Props>) {
    this.test = 'loading'
    this.num++
    let returnDate = yield this.promiseMethod()
    this.test = returnDate + ' done'
  })

  // token
  setToken(param: any) {
    this.token = param
  }
}

const StoreInstance = new Store()

export {
  StoreInstance
}
