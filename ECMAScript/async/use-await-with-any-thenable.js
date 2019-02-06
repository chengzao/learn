{
    async function main(params) {
        const number = await Promise.resolve(123)
        console.log(number)
    }
    main();
}
{
    
    let main =  async function (params) {
        const number = await Promise.resolve(123)
        return number;
    }

    main().then((res)=>{
        console.log('res',res)
    })
}