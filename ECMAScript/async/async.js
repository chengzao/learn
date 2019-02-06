{
    async function e() {    
        throw new Error('抛出错误信息');
    }
    e().then(success => console.log('成功1', success))   
       .catch(error => console.log('失败1', error));
}

{
    async function e() {    
        return new Error('返回错误信息');
    }
    e().then(success => console.log('成功2', success))   
       .catch(error => console.log('失败2', error));
}

{
    async function throwStatus() {    
        return '可以返回所有类型的值'
    }
    throwStatus().then(success => console.log('成功3', success))             
                 .catch(error => console.log('失败3', error));
}

