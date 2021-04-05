function log() {
    console.log.apply(console, arguments)
}

function q(selector) {
    return document.querySelector(selector)
}

function qs(selector) {
    return document.querySelectorAll(selector)
}

function appendHtml(element, html) {
    return element.insertAdjacentHTML('beforeend', html)
}

// find 函数可以查找 element 的所有子元素
function find(element, selector) {
    // 套路！！！
    return element.querySelector(selector)
}

function bindEvent(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

function removeAllClass(className) {
    let elements = document.querySelectorAll(selector)

    for (var e of elements) {
        e.classList.remove(className)
    }
}

// responseClass 是 事件委托 的当事方
function bindAll(selector, eventName, callback/*, responseClass*/) {
    let elements = document.querySelectorAll(selector)

    if (elements.length > 0) {
        for (var element of elements) {
            bindEvent(element, eventName, callback)
        }
    } else {
        log('没有选取到元素')
    }
}

function myAjax(method, url, data, responseCallback) {
    let r = new XMLHttpRequest()
    r.open(method, url, true)
    r.setRequestHeader('Content-Type', 'application/json')

    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            responseCallback(r)
        }
    }

    r.send(data)
}

// 将小于10的数组1 2 3 转成 01 02 03
function timeFormat(number) {
    if (number < 10) {
        return "0" + number
    } else {
        return number
    }
}


// =================================================
function test() {
    toggle('one')
    toggle('two')
}

function toggle(n) {
    funcs = {
        'one': one,
        'two': two,
    }
    funcs[n]()
}
