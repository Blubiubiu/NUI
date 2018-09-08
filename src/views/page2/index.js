// 引入 router
import router from '../../router'

// 引入 html 模板，会被作为字符串引入
import template from './index.html'

// 引入 css, 会生成 <style> 块插入到 <head> 头中


// 导出类
export default class {
  mount(container) {
    document.title = 'page2'
    container.innerHTML = template
    container.querySelector('.bar__gofoo').addEventListener('click', () => {
      // 调用 router.go 方法加载 /page1 页面
      router.go('/page1')
    })
  }
}