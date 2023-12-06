import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
// 去除默认样式
import 'normalize.css'

import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* 配置store */}
    <Provider store={store}>
      {/* 配置路由 */}
      <BrowserRouter>
        {/* 配置antd中文 */}
        <ConfigProvider locale={zhCN}>
          <App></App>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
