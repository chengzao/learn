const tree1 =
  [
    {
      "name": "测试1",
      "children": []
    },
    {
      "name": "测试2",
      "children": [
        {
          "name": "A区",
          "children": [
            {
              "name": "a1",
              "children": null
            },
            {
              "name": "a2",
              "children": null
            }
          ]
        },
        {
          "name": "B区",
          "children": [
            {
              "name": "b1",
              "children": null
            },
            {
              "name": "b2",
              "children": null
            }
          ]
        }
      ]
    },
    {
      "name": "a1",
      "children": []
    }
  ]

/**
 * 在数组对象中查找name，返回父级name的数组（包含自己）, 只返回匹配的第一个结果
 * @param {array} tree
 * @param {*} name
 * @param {array} namePath
 * @returns {object}
 */
function search1(tree, name, namePath = []) {
  for (let i = 0, len = tree.length; i < len; i++) {
    let item = tree[i]
    if (item.name === name) {
      namePath.push(item.name)
      return {
        has: true,
        namePath
      }
    } else if (item.children && item.children.length) {
      namePath.push(item.name)
      let result = search1(item.children, name, namePath)
      if (result.has) return { has: true, namePath }
      namePath.pop()
    }
  }
  return {
    has: false
  }
}
console.log('search1', search1(tree1, 'a1'));

const tree2 = {
  "name": "测试2",
  "children": [
    {
      "name": "A区",
      "children": [
        {
          "name": "a1",
          "children": null
        },
        {
          "name": "a2",
          "children": null
        }
      ]
    },
    {
      "name": "B区",
      "children": [
        {
          "name": "b1",
          "children": null
        },
        {
          "name": "b2",
          "children": [
            {
              "name": "b2-1",
              "children": null
            },
            {
              "name": "b2-2",
              "children": null
            }
          ]
        }
      ]
    },
    {
      "name": "C区",
      "children": [
        {
          "name": "c",
          "children": null
        }
      ]
    }
  ]
}

/**
 * 在对象树查找name，返回父级name的数组（包含自己）, 只返回匹配的第一个结果
 * @param {object} tree
 * @param {*} name
 * @param {array} namePath
 * @return {object}
 */
const search2 = (tree, name, namePath = []) => {
  let item = tree
  if (item.name === name) {
    namePath.push(item)
    return {
      namePath
    }
  } else if (item.children && item.children.length) {
    namePath.push(item)
    for (var i = 0; i < item.children.length; i++) {
      let result = search2(item.children[i], name, namePath)
      if (result) return { namePath }
    }
    namePath.pop()
  }
}

console.log('search2', search2(tree2, 'b2-2'));

// 包装了一下search
const search3 = (tree, name, namePath = []) => {
  let item = Array.isArray(tree) ? tree : [tree]
  return search1(item, name, namePath)
}
console.log('search3', search3(tree2, 'b2-2'));



const tree4 =[
    {
      "name": "测试1",
      "children": []
    },
    {
      "name": "测试2",
      "children": [
        {
          "name": "A区",
          "children": [
            {
              "name": "a1",
              "children": null
            },
            {
              "name": "a2",
              "children": null
            }
          ]
        },
        {
          "name": "B区",
          "children": [
            {
              "name": "b1",
              "children": null
            },
            {
              "name": "b2",
              "children": null
            }
          ]
        }
      ]
    },
    {
      "name": "测试3",
      "children": [
        {
          "name": "c1",
          "children": null
        }
      ]
    }
  ]

/**
 * 给树形结构加上层级level
 * @param {array} tree
 * @param {*} level
 */
const search4 = function (tree, level = 0) {
  let len = tree.length;
  for (let index = 0; index < len; index++) {
    const item = tree[index];
    item.level = level + 1;
    if (item.children && item.children.length > 0) {
      search4(item.children, item.level)
    }
  }
  return tree
}
console.log(search4(tree4));
