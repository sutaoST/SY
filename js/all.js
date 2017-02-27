onload=function() {
    $(document).ready(
        function () {
            var nowpage = 0;
            //给最大的盒子增加事件监听

            $(".container").swipe(
                {
                    // swipe (事件，滑动的方向，滑动的距离，一次滑动的时间 , 几根手指)
                    swipe: function (event, direction, distance, duration, fingerCount) {
                        if (direction == "up") {//当向上滑动手指时令当前页面记数器加1
                            nowpage = nowpage + 1;
                        } else if (direction == "down") {//当向下滑动手指时令当前页面记数器减1
                            nowpage = nowpage - 1;
                        }

                        if (nowpage > 4) {//只有5个页面，所以当记数器大于4时令他返回4（从0开始记），避免溢出出错
                            nowpage = 0;
                        }

                        if (nowpage < 0) {
                            nowpage = 0;
                        }

                        $(".container").animate({"top": nowpage * -100 + "%"}, 100);//根据当前记数器滚动到相应的高度

                        $(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
                    }
                }
            );
        }
    );

}