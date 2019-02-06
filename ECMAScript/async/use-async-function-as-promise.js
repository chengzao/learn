const fetch = require("node-fetch");

{
    async function  getZhihuColumn(id) {
        const url  = `https://zhuanlan.zhihu.com/api/columns/${id}`;
        const response = await fetch(url);
        return column = await response.json();
    }
    getZhihuColumn('feweekly').then(column => {
        console.log(`NAME: ${column.name}`)
        console.log(`NAME: ${column.intro}`)
    })
}