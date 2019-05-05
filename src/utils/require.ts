const qs = require('qs')
import store from '../store/index'

let tokenName = 'token'

// 请求
export const ReqRes = ({
  url,
  method = 'GET',
  data = {},
  headers = {}
}: any) => {
  let isOk: boolean
  let urlParse = url
  let methodParse: string = method.toLocaleUpperCase()
  let headersParse: typeof headers = {
    ...headers
  }

  if (!headersParse['Content-Type']) {
    if (methodParse === 'GET') {
      headersParse['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    } else if (methodParse === 'POST') {
      headersParse['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  headersParse[tokenName] = store.StoreInstance.token

  let body: {
    method: string,
    headers: Headers | string[][] | { [key: string]: string; } | undefined,
    body?: string
  } = {
    method: methodParse,
    headers: headersParse,
  }

  if (headersParse['Content-Type'].indexOf('x-www-form-urlencoded') !== -1) {
    urlParse = url + '?' + qs.stringify(data)
  } else {
    body.body = JSON.stringify(data)
  }

  headersParse['Accept'] = headers['Accept'] || 'application/json'

  return new Promise((resolve, reject) => {
    fetch(urlParse, body)
      .then(response => {
        console.log('XHR ', response)
        isOk = response.ok
        return response.json()
      })
      .then(parseRes => {
        if (isOk) {
          resolve(parseRes)
        } else {
          reject(parseRes)
        }
      })
      .catch(err => reject(err))
  })
}
