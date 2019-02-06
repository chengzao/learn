{
    async function e() {    
        throw new Error('抛出错误信息');
    }
    e().then(success => console.log('成功1', success))   
       .catch(error => console.log('失败1', error));
}

{
    async function e() {    
        return Promise.reject('has Promise Error')
    }
    e().then(success => console.log('成功2', success))   
       .catch(error => console.log('失败2', error));
}

{
    async function e() {    
        return a
    }
    e().then(success => console.log('成功3', success))   
       .catch(error => console.log('失败3', error));
}
{
    async function e() {    
      return false
    }
    e().then(success => console.log('成功4', success))   
       .catch(error => console.log('失败4', error));
}

// {
//     async function throwStatus() {    
//         Promise.reject('这是错误的做法')
//     }
//     throwStatus().then(success => console.log('成功3', success))             
//                  .catch(error => console.log('失败3', error));
// }