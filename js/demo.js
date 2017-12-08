/*
* @Author: Administrator
* @Date:   2017-11-07 16:42:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-12 18:12:43
*/
window.onload = function () {


    let bannerleft = document.getElementsByClassName('bannerleft-list')[0];
    let lis = document.getElementsByClassName('bannerleft-box');
    let lunbo = document.getElementsByClassName('lunbo');
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            lunbo[i].style.display = 'block';
        }
        lis[i].onmouseout = function () {
            lunbo[i].style.display = 'none';
        }
    }


    /*let bannerleft=document.getElementsByClassName('bannerleft-list')[0];
    let lis=document.getElementsByClassName('bannerleft-box');
    // let lis=bannerleft.getElementsByTagName('li');

    let lunbo=document.getElementsByClassName('lunbo');
    // console.log(bannerleft,lis,lunbo);
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onmouseover=function(){
            lunbo[this.index].style.display='block';
        }
        lis[i].onmouseout=function(){
            lunbo[this.index].style.display='none';
        }
    }*/


    // 导航下拉
    let navCenter = document.querySelectorAll('.nav-wenzi>li');
    let navContainer = document.querySelectorAll('.nav-container');
    let nav = document.querySelector('.nav-bottom')
    console.log(nav)
    for (let i = 0; i < navCenter.length - 2; i++) {
        navCenter[i].onmouseenter = function () {
            animate(nav, {height: 350}, 500)
            navContainer[i].style.display = "block";
            navContainer[i].style.zIndex = "999";
        }

        navCenter[i].onmouseleave = function () {
            animate(nav, {height: 100}, 500)
            // navContainer[i].style.display="none";
            navContainer[i].style.zIndex = "9";
        }

    }


// 商品购物车
    let shopcar = document.getElementsByClassName('shopcar')[0];
    let shopbox = document.getElementsByClassName('shopbox')[0];
    shopcar.onmouseover = function () {
        shopbox.style.display = 'block';
        shopbox.style.transltion = '2s'
    }
    shopcar.onmouseout = function () {
        shopbox.style.display = 'none';
    }


    // 轮播图

    let bannerPic = document.getElementsByClassName('banner-pic')[0];
    let bannerDong = bannerPic.getElementsByTagName('li');
    let forward = document.getElementsByClassName('bannerhand-left')[0];
    let back = document.getElementsByClassName('bannerhand-right')[0];
    let circle = document.getElementsByClassName('circle')[0];
    let yuan = document.getElementsByClassName('yuan');
    let banner = document.getElementsByClassName('banner')[0];
    let t;
    let num = 0;
    t = setInterval(fn, 3000);
    forward.onclick = fn1;
    back.onclick = fn;
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(fn, 3000);
    }

    for (let i = 0; i < yuan.length; i++) {
        yuan[i].onclick = function () {
            bannerDong[i].className = 'banner-dong';
            bannerDong[num].className = '';
            yuan[i].style.background = 'red';
            yuan[num].style.background = '#fff';
            num = i;
        }
    }

    function fn() {
        num++;
        if (num == bannerDong.length) {
            num = 0;
        }
        for (let i = 0; i < bannerDong.length; i++) {
            bannerDong[i].className = ''
            yuan[i].style.background = '#fff';
        }
        bannerDong[num].className = 'banner-dong';
        yuan[num].style.background = 'red';
    }

    function fn1() {
        num--;
        if (num == -1) {
            num = (bannerDong.length - 1);
        }
        for (let i = 0; i < bannerDong.length; i++) {
            bannerDong[i].className = ''
            yuan[i].style.background = '#fff';
        }
        bannerDong[num].className = 'banner-dong'
        yuan[num].style.background = 'red';
    }


    // 家电效果
    let headRight = document.getElementsByClassName('head-rightbox1');
    let conright = document.getElementsByClassName('woshi');

    for (let i = 0; i < headRight.length; i++) {
        headRight[i].onmouseover = function () {
            for (let j = 0; j < conright.length; j++) {
                conright[j].style.display = 'none';
                headRight[j].style.color = '#111';
                headRight[j].style.borderBottom = '';
            }
            conright[i].style.display = 'block';
            headRight[i].style.color = '#ff6700';
            headRight[i].style.borderBottom = '2px solid #ff6700';
            headRight[i].style.paddingBottom = '4PX';
        }
    }
// 内容哈利波特开始

    contentre(0);
    contentre(1);
    contentre(2);
    contentre(3);

    function contentre(number) {
        let cons = document.getElementsByClassName("cons")[number];
        console.log(cons);
        let cons_on = cons.getElementsByTagName("li");
        let con = document.getElementsByClassName("con")[number];
        let dian = con.getElementsByClassName("dian");
        let cons_width = cons_on[0].offsetWidth;
        let hand1 = document.getElementsByClassName("neirong-left")[number];
        let hand2 = document.getElementsByClassName("neirong-right")[number];
        let next = 0;
        let flag1 = true;
        hand2.onclick = function () {
            if (flag1) {
                next++;
                if (next < cons_on.length) {
                    animate(cons, {left: -next * cons_width}, function () {
                        flag1 = true;
                    })
                    for (let i = 0; i < dian.length; i++) {
                        dian[i].className = "dian";
                    }
                    dian[next].className = "dian biger";
                }
                else {
                    next--;
                    return;
                }
                flag1 = false;
            }
        }
        hand1.onclick = function () {
            if (flag1) {
                next--;
                if (next > -1) {
                    animate(cons, {left: -next * cons_width}, function () {
                        flag1 = true;
                    })
                    for (let i = 0; i < dian.length; i++) {
                        dian[i].className = "dian";
                    }
                    dian[next].className = "dian biger";
                }
                else {
                    next++;
                    return;
                }
                flag1 = false;
            }
        }
        for (let i = 0; i < dian.length; i++) {
            dian[i].onclick = function () {
                animate(cons, {left: -i * cons_width})
                for (let j = 0; j < dian.length; j++) {
                    dian[j].className = "dian";
                }
                dian[i].className = "dian biger";
                next = i;
            }
        }
    }


// 小米明星产品
    let fuyi = document.getElementsByClassName('fuyi')[0];
    let fuer = document.getElementsByClassName('fuer')[0];
    let spbox1 = document.getElementsByClassName('shangpinbox1')[0];
    let splist = document.getElementsByClassName('shangpin-list');
    child = spbox1.childElementCount;
    childw = spbox1.children[0].offsetWidth + parseInt(getComputedStyle(splist[0], null).marginRight);
    let num1 = 0;
    let t1;
    t1 = setInterval(fn4, 2000);

    function fn4() {
        if (num1 == 0) {
            spbox1.style.transform = `translateX(${-1240 * num1}px)`;
            num1 = 1;
        }

        else if (num1 == 1) {
            spbox1.style.transform = `translateX(${-1240 * num1}px)`;
            num1 = 0;
        }
    }

    fuer.style.color = '#999'
    fuyi.onclick = function () {
        if (num1 == 1) {
            fuyi.style.color = '#999';
            return;
        }
        fuer.style.color = 'red'
        num1++;
        spbox1.style.transform = `translateX(${-1240 * num1}px)`;

    }
    fuyi.style.color = 'red'
    fuer.onclick = function () {
        if (num1 == 0) {
            fuer.style.color = '#999'
            return;
        }
        fuyi.style.color = 'red'
        num1--;
        spbox1.style.transform = `translateX(${-1240 * num1}px)`;

    }


}