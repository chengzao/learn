  const tree1 = {
    "id": 1,
    "label": "A",
    "child": [
      {
        "id": 2,
        "label": "B",
        "child": [
          {
            "id": 5,
            "label": "E",
            "child": [
            ]
          },
          {
            "id": 6,
            "label": "F",
            "child": [
            ]
          }
        ]
      },
      {
        "id": 4,
        "label": "D",
        "child": [
          {
            "id": 5,
            "label": "H",
            "child": [
            ]
          },
          {
            "id": 9,
            "label": "I",
            "child": [
            ]
          }]
      }]
  };
  /**
   * 传入对象树，返回目标对象，仅返回匹配的第一个
   * @param {*} tree
   * @param {*} target
   */
  const search1 = (tree, target) => {
    if (tree.id === target) {
      return tree;
    }

    for (const child of tree.child) {
      const res = search1(child, target);

      if (res) {
        return res;
      }
    }
    return false
  };

  console.log('search1',search1(tree1, 5));

  const tree2 = {
    "id": "1",
    "name": "tu-1",
    "level": "1",
    "children": [
      {
        "id": "2",
        "name": "tu-1-1",
        "level": "2",
        "children": [
          {
            "id": "3",
            "name": "tu-1-1-1",
            "level": "3",
            "children": []
          },
          {
            "id": "4",
            "name": "tu-1-1-2",
            "level": "3"
          },
          {
            "id": "5",
            "name": "6666",
            "level": "3"
          },
          {
            "id": "6",
            "name": "sss",
            "level": "3",
            "children": [
              {
                "id": "7",
                "name": "aaaaa",
                "level": "4"
              },
              {
                "id": "8",
                "name": "bbb",
                "level": "4"
              }
            ]
          }
        ]
      },
      {
        "id": "9",
        "name": "fff",
        "level": "3"
      }
    ]
  }
  /**
   * 将对象数组tree，children扁平化
   * @param {object} tree
   * @param {array} res
   * @returns {array}
   */
  const search2 = (tree, res) => {
    if (tree.children && tree.children.length > 0) {
      for(var i=0; i< tree.children.length; i++){
        search2(tree.children[i], res)
      }
    } else {
      res.push(tree)
    }
    return res
  }

  console.log('search2', search2(tree2, []));

  const tree3 = {
    "id": "1",
    "name": "tu-1",
    "level": "1",
    "children": [
      {
        "id": "2",
        "name": "tu-1-1",
        "level": "2",
        "children": [
          {
            "id": "3",
            "name": "tu-1-1-2",
            "level": "3"
          },
          {
            "id": "4",
            "name": "sss",
            "level": "3",
            "children": [
              {
                "id": "5",
                "name": "aaaaa",
                "level": "4"
              },
              {
                "id": "6",
                "name": "bbb",
                "level": "4"
              }
            ]
          }
        ]
      },
      {
        "id": "5",
        "name": "fff",
        "level": "3"
      }
    ]
  }
  const tree4 = {
    "id": "1",
    "name": "a",
    "level": "1"
  }

  /**
   * 传入对象tree和id，返回匹配的项数组
   * @param {object} tree
   * @param {*} id
   * @param {array} res
   */
  const search3 = (tree, id, res) => {
    if (tree.children && tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        search3(tree.children[i], id, res)
      }
    } else {
      if (tree.id == id) {
        res.push(tree)
      }
    }
    return res
  }

  console.log('search3 tree4', search3(tree4, '1',[]));
  console.log('search3 tree3', search3(tree3, '5',[]));

const tree5 = [
  {
    id: '1-1', children: [
      { id: '1-2-1', level: '2' }
    ]
  },
  {
    id: '2-1', children: [
      { id: '2-2-1', children: [] },
      {
        id: '2-2-2', children: [
          { id: '2-3-1' },
          { id: '2-3-2' }
        ]
      }
    ]
  },
  { id: '5-1', children: [] },
  { id: '6-1' }
]

/**
 * 将数组tree，children扁平化
 * @param {object} tree
 * @param {array} res
 */
const search4 = (tree, res) => {
  for (var i = 0; i < tree.length; i++) {
    const item = tree[i];
    if (item.children && item.children.length > 0) {
      search4(item.children, res)
    } else {
      res.push(item)
    }
  }
  return res
}

console.log('search4', search4(tree5, []))