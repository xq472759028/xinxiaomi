
window.onload=function () {

    // 头部
    $(".shopcar").hover(function () {
        $(".shopbox").slideDown(400);
    }, function () {
        $(".shopbox").slideUp(400);
    });


// 下拉导航栏
    $('.nav-wenzi>li').on("mouseenter", function () {
        let newindex;
        newindex = $('.nav-wenzi>li').index(this);
        if (newindex < 10) {
            $(".nav-bottom").stop();
            $(".nav-bottom").animate({height: 350}, 0.1);
            $(".nav-container").hide();
            $(".nav-container").eq(newindex).show();
        }
        $('.nav-wenzi>li').on("mouseleave", function () {
            let newindex;
            newindex = $('.nav-wenzi>li').index(this);
            if (newindex < 10) {
                $(".nav-bottom").stop();
                $(".nav-bottom").animate({height: 100}, 0.1);
            }
        })
    })


// 侧导航
    $(".bannerleft-list").find(".bannerleft-box").hover(function () {
        let index = $(".bannerleft-list").find(".bannerleft-box").index(this);
        $(".lunbo").fadeOut(1).eq(index).show();
        $(".lunbo").hover(function () {
            $(this).show();
        }, function () {
            $(this).hide();
        })
    }, function () {
        $(".lunbo").hide();
    });

// 轮播图
    var i = 0;
    var timer;
    $(document).ready(function () {
        //用jquery方法设置第一张图片显示，其余隐藏
        $(".banner-pic>li").eq(0).show().siblings(".banner-pic>li").hide();
        //调用showTime()函数（轮播函数）
        showTime();
        //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
        $(".yuan").hover(function () {
            //获取当前i的值，并显示，同时还要清除定时器
            i = $(this).index();
            Show();
            clearInterval(timer);
        }, function () {
            showTime();
        });
        //鼠标点击左侧的箭头
        $('.bannerhand-left').click(function () {
            clearInterval(timer);
            if (i == 0) {
                i = 7;//注意此时i的值
            }
            i--;
            Show();
            showTime();
        });

        //鼠标点击右侧的箭头
        $('.bannerhand-right').click(function () {
            clearInterval(timer);
            if (i == 7) {
                i = -1;//注意此时i的值
            }
            i++;
            Show();
            showTime();
        });
    })

// 创建一个showTime函数
    function showTime() {
        //定时器
        timer = setInterval(function () {
            //调用一个Show()函数
            Show();
            i++;
            //当图片是最后一张的后面时，设置图片为第一张
            if (i == 7) {
                i = 0;
            }
        }, 2000);
    }

//创建一个Show函数
    function Show() {
        //在这里可以用其他jquery的动画
        $('.banner-pic li').eq(i).fadeIn(300).siblings('.banner-pic li').fadeOut(300);

        //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
        $('.yuan').eq(i).addClass('bg').siblings('.yuan').removeClass('bg');

    }



// 小米明星产品
    let t;
    let nums=1;
    let flag=true;
    t=setInterval(function () {
        flag=false;
        if(nums==1){
            fn1();
        }else if(nums==-1){
            fn2();
        }
        nums=-nums;
    },3000);
    let width2=$(".shangpinbox1").width()/2;
    console.log(width2)
    function fn1() {
        $(".shangpinbox1").animate({left:-width2},1000,function () {
            flag=true;
        });

        $(".fuer").removeClass("mingcolor");
        $(".fuer").addClass("mingcolor1");
        $(".fuyi").removeClass("mingcolor1");
        $(".fuyi").addClass("mingcolor");
    }
    fn1()
    function fn2() {
        $(".shangpinbox1").animate({left:0},1000,function () {
            flag=true;
        });
        $(".fuer").removeClass("mingcolor1");
        $(".fuer").addClass("mingcolor");
        $(".fuyi").removeClass("mingcolor");
        $(".fuyi").addClass("mingcolor1");
    }
    fn2()
    $(".fuhao").hover(function () {
        clearInterval(t);
    },function () {
        clearInterval(t);
        t=setInterval(function () {
            if(nums==1){
                fn1();
            }else if(nums==-1){
                fn2();
            }
            nums=-nums;
        },3000);
    });
    $(".fuer").click(function () {
        if($(".fuer").hasClass("mingcolor")||!flag){
            return;
        }
        flag=false;
        fn2();
        nums=-nums;
    });
    $(".fuyi").click(function () {
        if($(".fuyi").hasClass("mingcolor")||!flag){
            return;
        }
        flag==false;
        fn1();
        nums=-nums;
    });

//     let fuyi = document.getElementsByClassName('fuyi')[0];
//     let fuer = document.getElementsByClassName('fuer')[0];
//     let spbox1 = document.getElementsByClassName('shangpinbox1')[0];
//     let splist = document.getElementsByClassName('shangpin-list');
//     // child = spbox1.childElementCount;
//     // childw = spbox1.children[0].offsetWidth + parseInt(getComputedStyle(splist[0], null).marginRight);
//     let num1 = 0;
//     let t1;
//     t1 = setInterval(fn4, 3000);
//     function fn4() {
//         if (num1 == 0) {
//             // spbox1.style.transform = `translateX(${-1240 * num1}px)`;
//             $(".shangpinbox1").animate({left: 0}, 1000);
//             num1 = 1;
//             // console.log($('.shangpinbox1'))
//         }
//
//         else if (num1 == 1) {
//             // spbox1.style.transform = `translateX(${-1240 * num1}px)`;
//             $(".shangpinbox1").animate({left: -1240});
//             num1 = 0;
//         }
//     }
//
//     fuer.style.color = '#999'
//     // $(".fuer").css("color","#999")
//     // $(".fuyi").on("click",function () {
//     //     if (num1 == 1) {
//     //         $(".fuyi").css("color","#999")
//     //         return;
//     //     }
//     //     $(".fuer").css("color","red")
//     //     num1++;
//     //     // spbox1.style.transform = `translateX(${-1240 * num1}px)`;
//     //     $(".shangpinbox1").animate({left: 0}, 1000);
//     //
//     // })
//     fuyi.onclick = function () {
//         if (num1 == 1) {
//             fuyi.style.color = '#999';
//             return;
//         }
//         fuer.style.color = 'red'
//         num1++;
//         spbox1.style.transform = `translateX(${-1240 * num1}px)`;
//
//     }
//     // fuyi.style.color = '#999'
//     fuer.onclick = function () {
//         if (num1 == 0) {
//             fuer.style.color = '#999'
//             return;
//         }
//         fuyi.style.color = 'red'
//         num1--;
//         spbox1.style.transform = `translateX(${-1240 * num1}px)`;
//
//     }
    //家电
    $(".head-rightbox1").mouseenter(function () {
        $(".head-rightbox1").removeClass("head-right-color");
        $(this).addClass("head-right-color");
        let index = $(".head-rightbox1").index(this);
        $(".content-right1").css("display", "none");
        $(".content-right1").eq(index).css("display", "block");
    })


    // 智能
    $(".head-right1").mouseenter(function () {
        $(".head-right1").siblings().removeClass("head-right-color");
        $(this).addClass("head-right-color");
        let index = $(".head-right1").index(this);
        $(".zhineng_list").css("display", "none");
        $(".zhineng_list").eq(index).css("display", "block");
    })

    //哈利波特内容轮播
    function content(a) {
        let next = 0;
        let flag1 = true;
        let newwidth = $(".cons-on").eq(0).width();
        let mark = $(".neirong").children("li").eq(a);
        let num = mark.find(".cons").children("li").length;
        mark.find(".neirong-left").click(function () {
            if (next == 0 || !flag1) {
                return;
            }
            flag1 = false;
            next--;
            mark.find(".dian").removeClass("biger");
            mark.find(".dian").eq(next).addClass("biger");
            mark.find(".cons").animate({left: -next * newwidth}, function () {
                flag1 = true;
            });
        });
        mark.find(".neirong-right").click(function () {
            if (next == num - 1 || !flag1) {
                return;
            }
            flag1 = false;
            next++;
            mark.find(".dian").removeClass("biger");
            mark.find(".dian").eq(next).addClass("biger");
            mark.find(".cons").animate({left: -next * newwidth}, function () {
                flag1 = true;
            });
        });
        mark.find(".dian").click(function () {
            if (!flag1) {
                return;
            }
            flag1 = false;
            let index = mark.find(".dian").index(this);
            mark.find(".dian").removeClass("biger");
            mark.find(".dian").eq(index).addClass("biger");
            mark.find(".cons").animate({left: -index * newwidth}, function () {
                flag1 = true;
            });
            next = index;
        })
    }

    content(0);
    content(1);
    content(2);
    content(3);

}