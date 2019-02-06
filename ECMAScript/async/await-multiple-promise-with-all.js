const fetch = require("node-fetch");

{
    console.log('-----------------')
    const sleep = (time = 2000) => new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
    async function  getZhihuColumn(id) {
        await sleep(2000);
        const url  = `https://zhuanlan.zhihu.com/api/columns/${id}`;
        const response = await fetch(url);
        if(response.status !== 200){
            throw new Error(`error is : ${response.status}`)
        }
        return column = await response.json();
    }

    let showZhihuColumn = async () =>{
        try {
            console.time('start')
            const p1 = getZhihuColumn('feweekly');
            const p2 =getZhihuColumn('toolingtips');
            const [column,column2] = await Promise.all([p1,p2]);  
            console.log(`NAME: ${column.name}`)
            console.log(`intro: ${column.intro}`)
            console.log(`NAME: ${column2.name}`)
            console.log(`intro: ${column2.intro}`)
            console.timeEnd('start')
        } catch (error) {
            console.log('error',error);
        }
    }

    showZhihuColumn();
}
