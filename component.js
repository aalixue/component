// handsontable
var dataObject = [
    {
        name: 'Java',
        rank: 1,
        aod: '降',
        change: -0.0001
    },
    {
        name: 'C',
        rank: 2,
        aod: '升',
        change: 0.0244
    },
    {
        name: 'Python',
        rank: 3,
        aod: '升',
        change: 0.0141
    },
    {
        name: 'C++',
        rank: 4,
        aod: '降',
        change: -0.0285
    },
    {
        name: 'C#',
        rank: 5,
        aod: '升',
        change: 0.0207
    },
    {
        name: 'Visual Basic .NET',
        rank: 6,
        aod: '降',
        change: -0.0117
    },
    {
        name: 'JavaScript',
        rank: 7,
        aod: '降',
        change: -0.0085
    }
];

var hotElement = document.getElementById('hot');
var hotSettings = {
    data: dataObject,
    columns: [
        {
            data: 'name',
            type: 'text'
        },
        {
            data: 'rank',
            type: 'numeric'
        },
        {
            data: 'aod',
            type: 'text'
        },
        {
            data: 'change',
            type: 'numeric',
            numericFormat: {
                pattern: '+0.00%'
            }
        }
    ],
    stretchH: 'all',
    width: 700,
    autoWrapRow: true,
    height: 400,
    maxRows: 22,
    colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
    ],
    rowHeights: 40,
    colWidths: 170,
    className: "htCenter htMiddle",
    manualRowResize: true,
    manualColumnResize: true,
    filters: true
};
var hot = new Handsontable(hotElement, hotSettings);

//echarts
var myChart = echarts.init(document.getElementById('main'));

var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['排名']
    },
    xAxis: {
        data: ["2000", "2005", "2010", "2015", "2020"]
    },
    yAxis: {},
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};

myChart.setOption(option);