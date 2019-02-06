const fetch = require("node-fetch");
{
    async function  getZhihuColumn(id) {
        const url  = `https://zhuanlan.zhihu.com/api/columns/${id}`;
        const response = await fetch(url);
        if(response.status !== 200){
            throw new Error(`error is : ${response.status}`)
        }
        return column = await response.json();
    }
    let showZhihuColumn = async (id) =>{
        try {
            const column = await getZhihuColumn(id);
            console.log(`NAME: ${column.name}`)
            console.log(`NAME: ${column.intro}`)
        } catch (error) {
            console.log('error',error);
        }
    }
    showZhihuColumn('feweekly1');
}
