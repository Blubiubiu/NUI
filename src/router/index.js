import 'regenerator-runtime/runtime'

const routes = {
    '/page1': () => require('../views/page1'),
    '/page2': () => require('../views/page2')
}

//router类，用来控制页面根据当前url切换

class Router {
    start() {
        window.addEventListener('popstate', () => {
            this.load(location.pathname)
        })

        //打开页面时加载当前页面
        this.load(location.pathname)
    }

    go(path) {
        //变更地址栏url
        history.pushState({}, '', path)
        //加载页面
        this.load(path)
    }

    async load(path) {
        if (path === '/') path = '/page1'
        //创建页面实例
        const View = (await routes[path]()).default

        const view = new View();
        //调用页面方法，把页面加载到document.body中
        view.mount(document.body)
    }
}

export default new Router()