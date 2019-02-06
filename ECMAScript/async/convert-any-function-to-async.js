const fetch = require("node-fetch");
{
    let getZhihuColumn = async (id) => {
        const url  = `https://zhuanlan.zhihu.com/api/columns/${id}`;
        const response = await fetch(url);
        const column = await response.json();
        console.log(`NAME: ${column.name}`)
        console.log(`NAME: ${column.intro}`)
    }
    getZhihuColumn('feweekly')
}

{
    let getZhihuColumn = async (id) => {
        const url  = `https://zhuanlan.zhihu.com/api/columns/${id}`;
        const response = await fetch(url);
        return await response.json();
      
    }
    (async ()=>{
        const column = await getZhihuColumn('feweekly');
        console.log(`NAME: ${column.name}`)
        console.log(`NAME: ${column.intro}`)
    })()
}

{
    class ClientApi {
       async getColumn (id){
            const url  = `https://zhuanlan.zhihu.com/api/columns/${id}`;
            const response = await fetch(url);
            return await response.json();
        }
    }
    (async ()=>{
        const clientApi = new ClientApi();
        const column = await clientApi.getColumn('feweekly');
        console.log(`NAME: ${column.name}`)
        console.log(`NAME: ${column.intro}`)
    })()
}