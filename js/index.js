$(function () {

    (function () {
        $(".monitor .tabs").on("click", "a", function () {
            $(this).addClass("active").siblings("a").removeClass("active");
            // console.log($(this).index());
            //   选取对应索引号的content
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
        });
    })();

    (function () {
        //1.实例化对象
        var myChart = echarts.init(document.querySelector('.pie'));
        //2.指定配置项和数据
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            // data: ['云南', '北京', '山东', '河北', '江苏', '浙江', '四川', '湖北'],
            series: [

                {
                    name: '点位统计',
                    type: 'pie',
                    radius: ["10 %", "70 %"],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    // itemStyle: {
                    //     borderRadius: 5
                    // },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ],
                    label: {
                        fontSize: 10,
                        color: "#fff"

                    },
                    labelLine: {
                        length: 6,
                        length2: 8
                    }
                }
            ]
        };
        //3.配置项和数据给我们的实例化对象
        myChart.setOption(option);
        //4.适配浏览器缩放
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    })();

    (function () {
        var item = {
            name: '',
            value: 1200,
            // 柱子颜色
            itemStyle: {
                color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            },
        }
        var myChart = echarts.init(document.querySelector(".bar"));
        var option = {
            tooltip: {
                trigger: "item",
                formatter: "<span style='display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: #00fffb'></span>{b} {c}",
                backgroundColor: 'rgba(0,0,0,.5)',
                borderColor: 'rgba(0,0,0,.5)',
                textStyle: {
                    color: "#fff"
                }

            },
            xAxis: {
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd",

                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,240,255,0.3)"
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(0,240,255,0.3)"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0,240,255,0.3)"
                    }
                }
            },
            // 修改线性渐变色方式 1
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            grid: {
                left: "0%",
                right: "3%",
                top: "3%",
                bottom: "3%",
                containLabel: true,
                show: true,
                borderColor: 'rgba(0,240,255,0.3)'
            },
            series: [
                {
                    data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                    type: 'bar'
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    })();

    (function () {
        //tab栏切换制作
        //1.准备数据
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }

        //点击切换
        // 切换
        $('.sales').on('click', '.caption a', function () {
            index = $(this).index() - 1;
            // 样式
            $(this).addClass('active').siblings().removeClass('active')
            // currData 当前对应的数据  
            // this.dataset.type 标签上的data-type属性值，对应data中的属性                  
            var currData = data[this.dataset.type]
            // 修改图表1的数据
            option.series[0].data = currData[0]
            // 修改图表2的数据                  
            option.series[1].data = currData[1]
            // 重新设置数据  让图标重新渲染                  
            myChart.setOption(option)
        })
        //自动切换
        var as = $(".sales .caption a");
        var index = 0;
        var timer = setInterval(function () {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 3000)
        //鼠标经过停止定时器，离开开始定时器
        $(".sales").hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 4) index = 0;
                as.eq(index).click();
            }, 3000)
        })

        //1.实例化对象
        var myChart = echarts.init(document.querySelector('.line'));
        //2.指定配置项和数据
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,.5)',
                borderColor: 'rgba(0,0,0,.5)',
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {

                // data: ['预期销售额', '实际销售额'],
                textStyle: {
                    color: "#4c9bfd"
                },
                right: "10%"
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,// 显示边框
                borderColor: '#012f4a',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false  // 去除刻度
                },
                axisLabel: {
                    color: '#4c9bfd' // 文字颜色
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a' // 分割线颜色
                    }
                }
            },
            series: [{
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                smooth: true,
                stack: "总量"
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                smooth: true,
                stack: "总量"
            }
            ]
        };
        //3.配置项和数据给我们的实例化对象
        myChart.setOption(option);




        //4.适配浏览器缩放
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    })();


    (function () {
        const dataBJ = [
            [90, 19, 56, 11, 34],
        ];

        const lineStyle = {
            color: "#fff",
            width: 1,
            opacity: 0.5
        };
        //1.实例化对象
        var myChart = echarts.init(document.querySelector('.radar'));
        //2.指定配置项和数据
        var option = {
            tooltip: {
                show: true,
                // 控制提示框组件的显示位置
                position: ['60%', '10%'],
                backgroundColor: 'rgba(0,0,0,.5)',
                borderColor: 'rgba(0,0,0,.5)',
                textStyle: {
                    color: "#fff",
                    fontSize: 1
                }
            },

            radar: {
                radius: "65%",
                indicator: [
                    { name: '机场', max: 100 },
                    { name: '商场', max: 100 },
                    { name: '火车站', max: 100 },
                    { name: '汽车站', max: 100 },
                    { name: '地铁', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 4,
                name: {
                    textStyle: {
                        color: "#4c9bfd"
                    }
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)',
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: 'Beijing',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'circle',
                    symbolSize: 5,
                    itemStyle: {
                        color: "#fff"
                    },
                    areaStyle: {
                        color: 'rgba(238, 197, 102, 0.6)',
                    },
                    // 在圆点上显示相关数据
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 10
                    },
                }

            ]
        };
        //3.配置项和数据给我们的实例化对象
        myChart.setOption(option);
        //4.适配浏览器缩放
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    })();

    (function () {
        var myChart = echarts.init(document.querySelector(".gauge"));
        var option = {

            series: [
                {

                    startAngle: 180,
                    name: '销售进度',
                    type: 'pie',

                    radius: ['130%', '150%'],
                    center: ['48%', '80%'],

                    labelLine: {
                        show: false
                    },
                    hoverOffset: 0,
                    data: [
                        {
                            value: 100, itemStyle: {// 颜色渐变#00c9e0->#005fc1
                                color: new echarts.graphic.LinearGradient(
                                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                        { offset: 1, color: "#005fc1" } // 1 结束颜色
                                    ]
                                )
                            }
                        },
                        { value: 100, itemStyle: { color: '#12274d' } },
                        { value: 200, itemStyle: { color: "transparent" } },

                    ]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        })

    })();

    (function () {
        var hotData = [
            {
                city: '北京',  // 城市
                sales: '25,179',  // 销售额
                flag: true, //  上升还是下降
                brands: [   //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ];
        var supHTML = "";
        $.each(hotData, function (index, item) {
            supHTML += `<li>
            <span>${item.city}</span>
            <span>${item.sales} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
        </li>`
        })
        $('.sup').html(supHTML);

        $(".province .sup").on("mouseenter", "li", function () {
            index = $(this).index();

            render($(this));
        })

        function render(that) {
            //鼠标经过当前li要高亮
            that.addClass("active").siblings().removeClass();
            var subHTML = "";
            $.each(hotData[that.index()].brands, function (index, item) {
                subHTML += `<li><span>${item.name}</span><span>${item.num} <s class= ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
                $(".sub").html(subHTML);
            })
        }
        // 所有的LI
        var lis = $('.province .sup li')
        // 第一个默认激活
        lis.eq(0).mouseenter()
        var index = 0;
        var timer = setInterval(function () {
            index++;
            if (index >= 5) index = 0;
            //lis.eq(index).mouseenter();
            render(lis.eq(index));


        }, 2000);

        $('.province .sup').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);

            timer = setInterval(function () {
                index++;
                if (index >= 5) index = 0;
                //lis.eq(index).mouseenter();

                render(lis.eq(index));
            }, 2000);
        })
    })()
})

