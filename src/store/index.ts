import { configure } from 'mobx'

import { StoreInstance } from "./global"

// 不允许在动作之外进行状态修改
configure({ enforceActions: 'observed' })

const store = {
  StoreInstance
}

export default store
