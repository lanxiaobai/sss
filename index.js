// 引入模块
var template = require('art-template');
// 调用 template 读取模板 填入数据
// 模板引擎 自己推荐的后缀名
// 参数1 模板的路径
// 参数2 填充的数据
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: 'aui'
    },
    friend:[
        {
            name:'jack',
            skill:'跳海'
        },
        {
            name:'rose',
            skill:'叫杰克跳海'
        }
    ]
});
console.log(html);