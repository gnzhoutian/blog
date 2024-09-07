/**
 * some JavaScript code for this blog theme
 */

/**
 * click menu
 */
(function() {
    if (window.innerWidth <= 770) {
        var menu_btn = document.querySelector('#header_menu')
        var nav = document.querySelector('#header_nav')
        var anchor_btn = document.querySelector('.anchor')

        menu_btn.onclick = function(e) {
            e.stopPropagation()
            if (menu_btn.classList.contains('active')) {
                menu_btn.classList.remove('active')
                nav.classList.remove('nav_show')
                if (anchor_btn) {
                    anchor_btn.classList.add('anchor')
                }
            } else {
                nav.classList.add('nav_show')
                menu_btn.classList.add('active')
                if (anchor_btn) {
                    anchor_btn.classList.remove('anchor')
                }
            }
        }

        document.querySelector('body').addEventListener('click', function() {
            nav.classList.remove('nav_show')
            menu_btn.classList.remove('active')
            if (anchor_btn) {
                anchor_btn.classList.add('anchor')
            }
        })
    }
}());

/**
 * back to top
 */
(function() {
    var backToTop = document.querySelector('.back_to_top')
    window.addEventListener('scroll', function() {
        // 页面顶部滚进去的距离
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

        if (scrollTop > 200) {
            backToTop.classList.add('back_to_top_show')
        } else {
            backToTop.classList.remove('back_to_top_show')
        }
    })
}());
