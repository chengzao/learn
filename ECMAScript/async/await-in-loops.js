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
            console.time('start')
            const names = ['feweekly','toolingtips'];
            for (const name of names) {
                const column = await getZhihuColumn(name);
                console.log(`NAME: ${column.name}`)
                console.log(`intro: ${column.intro}`)
            }    
            console.timeEnd('start')
        } catch (error) {
            console.log('error',error);
        }
    }
    // showZhihuColumn();
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
            console.time('start2')
            const names = ['feweekly','toolingtips'];
            const promises = names.map(x => getZhihuColumn(x))    
            for (const promise of promises) {
                const column = await promise;
                console.log(`NAME: ${column.name}`)
                console.log(`intro: ${column.intro}`)
            }    
            console.timeEnd('start2')
        } catch (error) {
            console.log('error',error);
        }
    }
    showZhihuColumn()
}
