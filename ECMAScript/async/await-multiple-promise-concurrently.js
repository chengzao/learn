const fetch = require("node-fetch");
{
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
            console.time('start2')
            const column = await getZhihuColumn('feweekly');
            const column2 = await getZhihuColumn('toolingtips');
            console.log(`NAME: ${column.name}`)
            console.log(`intro: ${column.intro}`)
            console.log(`NAME: ${column2.name}`)
            console.log(`intro: ${column2.intro}`)
            console.timeEnd('start2')
        } catch (error) {
            console.log('error',error);
        }
    }
    showZhihuColumn();
}

{
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
            const p2 = getZhihuColumn('toolingtips');
            const column = await p1;
            const column2 = await p2;
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
