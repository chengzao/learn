const tree1 = [
  { id: '1', children: [] },
  {
    id: '2', children: [
      { id: '3', children: [] },
      {
        id: '4', children: [
          { id: '4-1' },
          { id: '4-2' }
        ]
      }
    ]
  },
  { id: '5', children: [] },
  { id: '6', children: [] }
]
/**
 * 传入数组tree，返回是否包含target
 * @param {array} tree
 * @param {*} target
 * @returns {boolean}
 */
const search1 = (tree, target) => {
  for (var i = 0; i < tree.length; i++) {
    const child = tree[i];
    if (tree[i].id == target) {
      return true
    } else if (child.children && child.children.length > 0) {
      let res = search1(child.children, target)
      if (res) {
        return true
      }
    }
  }
  return false
};

console.log('search1', search1(tree1, '6'))

const tree2 = [
  {
    id: '1', children: [
      { id: '4-2', level: '1' }
    ]
  },
  {
    id: '2', children: [
      { id: '3', children: [] },
      {
        id: '4', children: [
          { id: '4-1' },
          { id: '4-2' }
        ]
      }
    ]
  },
  { id: '5', children: [] },
  { id: '6', children: [] }
]
/**
 * 传入数组tree，返回所有匹配的数组对象
 * @param {array} tree
 * @param {*} target
 * @returns {array}
 */
function warpSearch(tree, target) {
  var res = []
  const search2 = (tree, target) => {
    for (var i = 0; i < tree.length; i++) {
      const item = tree[i];
      if (item.id == target) {
        res.push(item)
      } else if (item.children && item.children.length > 0) {
        search2(item.children, target)
      }
    }
  }
  search2(tree, target)
  return res;
}
console.log('warpSearch', warpSearch(tree2, '4-2'))

console.log('------------------------------')

const tree3 = [
  {
    id: '1', children: [
      { id: '4-2', level: '1' }
    ]
  },
  {
    id: '2', children: [
      { id: '3', children: [] },
      {
        id: '4', children: [
          { id: '4-1' },
          { id: '4-2' }
        ]
      }
    ]
  },
  { id: '5', children: [] },
  { id: '6', children: [] }
]

/**
 * 传入数组tree，返回所有匹配的数组对象
 * @param {array} tree
 * @param {*} target
 * @param {array} res
 * @returns {array}
 */
const search3 = (tree, target, res = []) => {
  for (var i = 0; i < tree.length; i++) {
    const item = tree[i];
    if (item.id == target) {
      res.push(item)
    } else if (item.children && item.children.length > 0) {
      search3(item.children, target, res)
    }
  }
  return res
}
console.log('search3', search3(tree3, '4-2'))
console.log('search3', search3(tree3, '6'))