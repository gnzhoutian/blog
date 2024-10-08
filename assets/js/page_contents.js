/* jshint asi:true */

/**
 * [fixSidebar description]
 * 滚轮滚到一定位置时，将 sidebar-wrap 添加 fixed 样式
 * 反之，取消样式
 */
(function () {
    if (window.innerWidth > 770) {
        var sidebarWrap = document.querySelector('.right>.wrap')

        //fix 之后百分比宽度会失效，这里用js赋予宽度
        sidebarWrap.style.width = sidebarWrap.offsetWidth + "px"
        window.onscroll = function () {
            // 页面顶部滚进去的距离
            var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

            // 页面底部滚进去的距离
            var htmlHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
            var scrollBottom = htmlHeight - window.innerHeight - scrollTop

            if (scrollTop < 80) {
                sidebarWrap.classList.remove('fixed')
                sidebarWrap.classList.remove('scroll-bottom')
            } else if (scrollBottom >= 100) {
                sidebarWrap.classList.remove('scroll-bottom')
                sidebarWrap.classList.add('fixed')
            } else if (isMaxHeight()) { //content 达到maxHeight
                sidebarWrap.classList.remove('fixed')
                sidebarWrap.classList.add('scroll-bottom')
            }
        }
        setContentMaxHeightInPC() //设置目录最大高度(PC端)
    }
    moveTOC() //将Content内容转移
}());

/**
 * 设置目录最大高度
 */
function setContentMaxHeightInPC() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 80 - 100 - 45
    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

/**
 * 达到最大高度
 * @return {Boolean} [description]
 */
function isMaxHeight() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 80 - 100 - 45
    var contentHeight = contentUl.offsetHeight
    return contentMaxHeight === contentHeight
}

//-------------mobile--------------
/**
 * 屏幕宽度小于770px时，点击锚点按钮，弹出目录框
 * @param  {[type]} function( [description]
 * @return {[type]} [description]
 */
(function () {
    if (window.innerWidth <= 770) {
        var anchorBtn = document.querySelector('.anchor')
        var rightDiv = document.querySelector('.right')

        /**
         * 监听锚点按钮
         */
        if (anchorBtn) {
            anchorBtn.onclick = function (e) {
                e.stopPropagation()
                rightDiv.classList.add('right-show')
                anchorBtn.classList.add('anchor-hide')
            }

            //监听body，点击body，隐藏Content
            document.querySelector('body').addEventListener('click', function () {
                rightDiv.classList.remove('right-show')
                anchorBtn.classList.remove('anchor-hide')
            })

            ancherPostion(anchorBtn, rightDiv) //目录锚的位置固定
            setContentMaxHeight() //设置目录最大高度
        }
    }
}());

/**
 * 目录锚的位置固定
 */
function ancherPostion(anchorBtn, rightDiv) {
    window.addEventListener('scroll', function () {
        // console.log('scroll');
        var top = anchorBtn.getBoundingClientRect().top
        // console.log(top);
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        if (scrollTop > 50) {
            anchorBtn.style.top = '80px'
            rightDiv.style.top = '80px'
        } else {
            anchorBtn.style.top = '80px'
            rightDiv.style.top = '80px'
        }
    })
}

/**
 * 设置目录最大高度
 */
function setContentMaxHeight() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 100 - 80 - 45
    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

//-------------post Content----------------------
//将Content内容转移
function moveTOC() {
    if (document.querySelector('#markdown-toc') !== null) {
        var TOCString = document.querySelector('#markdown-toc').innerHTML
        var contentUl = document.querySelector('#content-side')
        contentUl.insertAdjacentHTML('afterbegin', TOCString) //插入字符串

        //添加scroll样式，为了平滑滚动
        var aTags = document.querySelectorAll('#content-side a')

        for (var i = 0; i < aTags.length; i++) {
            if (!aTags[i].hasAttribute('data-scroll')) {
                aTags[i].setAttribute('data-scroll', '');
            }
        }
    }
}

/**
 * 判断安卓版微信浏览器
 * @return {Boolean} [description]
 */
function isAndroidWechatBrowser() {
    var ua = navigator.userAgent.toLowerCase()
    return /micromessenger/.test(ua) && /android/.test(ua2)
}
