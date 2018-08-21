// Vue开始
const list = { template: `
<div>
    <header>
        <div class="logo">
            <div class="logo-ico clearfix"></div>
            <div class="city clearfix">泰安</div>
        </div>
        <div class="header-right">
            <div class="hot clearfix">正在热映</div>
            <div class="future clearfix">即将上映</div>
        </div>
    </header>
    <!-- header结束 -->
    <!-- body开始 -->
    <div class="body">
        <div class="banner">
            <div class="banner-box">
                <ul class="img">
                    <li>
                        <a href="">
                            <img src="../public/img/banner-1.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-2.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-3.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-4.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-5.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-6.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-7.jpg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../public/img/banner-8.jpg" alt="">
                        </a>
                    </li>
                </ul>
                <ul class="li"></ul>
            </div>
        </div>
        <ul class="content">
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="zuihot">今日最热</div>
                <div class="weekhot">一周最热</div>
                <div class="mouth">口碑最佳</div>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
            <li class="content-item">
                <img src="../public/img/movie-1.jpg" alt="">
                <p class="content-item-title">我不是药神</p>
                <p class="content-item-num">观众评分<span class="num">  9.5</span></p>
                <p class="content-item-direct">导演：文牧野</p>
                <p class="content-item-actor">主演：徐峥 周一围 王传君 谭卓</p>
                <div class="content-item-buy">购票</div>
                <span>特惠</span>
            </li>
        </ul>
    </div>
</div>

`}
const desc = { template: `
    <div class="body">
        <router-link to='/' tag='a'>返回</router-link>
        <p class="title">权力的游戏-------鱼梁木百科</p>
        <span class="time">2014-11-26</span>
        <span class="author">搜狐汽车</span>
        <img src="./img/yuliangmu.jpg" alt="">
        <p class="img-infor">权力的游戏中的鱼梁木是三眼乌鸦栖身的地方</p>
        <p class="content">正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容</p>
        <router-link to='/' tag='a'>返回</router-link>
    </div>
` }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: list },
  { path: '/desc', component: desc }
]

// 3. 创建 router 实例，然后传 `routes` 配置 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
