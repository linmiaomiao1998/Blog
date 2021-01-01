// 1. 初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

// 2. 生成键盘
// 遍历 keys，生成 kbd 标签
generateKeyboard(keys, hash)

// 3. 监听用户动作
listenToUser(hash)

// 下面是工具函数
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag(tagName){
    return document.createElement(tagName) 
}

function createSpan(textContent){
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}
function createButton(id){
    var button = tag('button')
    button.textContent = '编辑'
    button.id = id
    button.onclick = function(xzkjcnxlkcjlk){
        // xzkjcnxlkcjlk['target'] 就是用户点击的元素
        var button2 = xzkjcnxlkcjlk['target']
        var img2 = button2.previousSibling
        var key = button2['id'] // q w e r t
        var x = prompt('给我一个网址') // qq.com
        hash[key] = x  // hash 变更
        img2.src = 'http://'+x + '/favicon.ico'
        img2.onerror = function(xxx){
            xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        localStorage.setItem('zzz', JSON.stringify(hash))
    }
    return button
}
function createImage(domain){
    var img = tag('img')
    if(domain){
        img.src = 'http://'+ domain + '/favicon.ico'
    }else{
        img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror = function(xxx){
        xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}
function init(){
    var keys = {
        '0':{0:'~',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'0',11:'-',12:'+',13:'←',length:14},
        '1': {0:'tab',1:'q',2:'w',3:'e',4:'r',5:'t',6:'y',7:'u',8:'i',9:'0',10:'p',11:'{',12:'}',13:'|',length:14},
        '2': {0:'CAPSLK',1:'a',2:'s',3:'d',4:'f',5:'g',6:'h',7:'j',8:'k',9:'L',10:':',11:'"',12:'ENTER',length:13},
        '3': {0:'shift',1:'z',2:'x',3:'c',4:'v',5:'b',6:'n',7:'m',8:'<',9:'>',10:'?',11:'shift',length:12},
        '4':{0:'ctrl',1:'win',2:'alt',3:'   ',4:'alt',5:'win',6:'menu',7:'ctrl',length:8},
        'length': 5
    }
    var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
    }
    // 取出 localStorage 中的 zzz 对应的 hash
    var hashInLocalStorage = getFromLocalStorage('zzz') 
    if(hashInLocalStorage){
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}
function generateKeyboard(keys, hash){
    for(var index=0; index< keys['length']; index = index+1 ){
        var div = tag('div')
        div.className = 'row'
        main.appendChild(div)
    var row = keys[index]  // 第一个数组  第二个数组  第三个数组
    for(var index2 =0;index2< row['length']; index2 = index2 + 1){
        var span = createSpan(row[index2])
        var button = createButton(row[index2])
        var img = createImage(hash[row[index2]])
        var kbd = tag('kbd')
        kbd.className = 'key'
        kbd.appendChild(span)
        kbd.appendChild(img)
        kbd.appendChild(button)
        div.appendChild(kbd)
    }
}
}	
function listenToUser(hash){
document.onkeypress = function(xzkjcnxlkcjlk){
        var key = xzkjcnxlkcjlk['key'] // q w e
        var website = hash[key]
        //location.href = 'http://'+website
        window.open('http://'+website, '_blank')
    }
}