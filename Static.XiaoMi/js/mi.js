
function viewpagerControl() {
    const slideshow = q('.swiper-wrapper')
    const btnPrev = q('.show-button-prev')
    const btnNext = q('.show-button-next')
    
    const bullets = qs('.show-pagination-bullet')
    
    function changeImageByPage(page) {
        slideshow.style.backgroundImage = "url('./img/"+ page +".webp?w=2452&h=920')"
    }
    function toggleClass(elements, target, className) {
        for (let e of elements) {
            e.classList.remove(className)
        }
        target.classList.add(className)
    }
    
    let curPage = 0
    const maxPage = 5
    
    bindEvent(btnPrev, 'click', function() {
        // log('轮播图上一张')
        curPage = (curPage - 1 + maxPage) % maxPage
        changeImageByPage(curPage)
        toggleClass(bullets, bullets[curPage], 'pagination-bullet-active')
    })
    bindEvent(btnNext, 'click', function() {
        // log('轮播图下一张')
        curPage = (curPage + 1) % maxPage
        changeImageByPage(curPage)
        toggleClass(bullets, bullets[curPage], 'pagination-bullet-active')
    })
    bindAll('.show-pagination-bullet', 'click', function(e) {
        curPage = parseInt((e.target.dataset['page']))
        changeImageByPage(curPage)
        
        toggleClass(bullets, e.target, 'pagination-bullet-active')
    })
    
}

function menuControl() {
    const menu = q('.site-nav-menu')
    bindAll('.nav-item', 'mouseenter', function() {
        menu.style.height = "229px"
    })
    bindAll('.nav-item', 'mouseleave', function() {
        
        menu.style.height = "0px"
    })
    bindEvent(menu, 'mouseenter', function() {
        log('dudu')
        menu.style.height = "229px"
    })
    bindEvent(menu, 'mouseleave', function() {
        menu.style.height = "0"
    })
}
 
function categoryControl() {
     const category = q('.category-detail')
     bindAll('.category-list .list-item', 'mouseenter', function() {
         category.style.display = "block"
     })
     bindAll('.category-list .list-item', 'mouseleave', function() {
         category.style.display = "none"
     })
     bindEvent(category, 'mouseenter', function() {
         category.style.display = "block"
     })
     bindEvent(category, 'mouseleave', function() {
         category.style.display = "none"
     })
 }
 
function countdownControl() {
    const round = q(".countdown-round")
    const timeSpan = q(".countdown-time").querySelectorAll("span")
    
    setInterval(function () {
        const d = new Date()
        const curHours = d.getHours()
        const curMinutes = d.getMinutes()
        const curSeconds= d.getSeconds()
        
        round.innerText = curHours + ":00 场"
        timeSpan[1].innerText = timeFormat(60 - curMinutes - 1)
        timeSpan[2].innerText = timeFormat(60 - curSeconds)
    }, 1000);
}

function __main() {
    viewpagerControl()
    menuControl()
    categoryControl()
    countdownControl()
}

__main()