const tree1 = [
  {
    name: "测试1",
    children: []
  },
  {
    name: "测试2",
    children: [
      {
        name: "A区",
        children: [
          {
            name: "a1",
            children: null
          },
          {
            name: "a2",
            children: null
          }
        ]
      },
      {
        name: "B区",
        children: [
          {
            name: "b1",
            children: null
          },
          {
            name: "b2",
            children: null
          }
        ]
      }
    ]
  },
  {
    name: "a1",
    children: []
  }
];

/**
 * 在数组对象中查找name，返回父级name的数组（包含自己）, 只返回匹配的第一个结果
 * @param {array} tree
 * @param {*} name
 * @param {array} namePath
 * @returns {object}
 */
function search1(tree, name, namePath = []) {
  for (let i = 0, len = tree.length; i < len; i++) {
    let item = tree[i];
    if (item.name === name) {
      namePath.push(item.name);
      return {
        has: true,
        namePath
      };
    } else if (item.children && item.children.length) {
      namePath.push(item.name);
      let result = search1(item.children, name, namePath);
      if (result.has) return { has: true, namePath };
      namePath.pop();
    }
  }
  return {
    has: false
  };
}
console.log("search1", search1(tree1, "a1"));

const tree2 = {
  name: "测试2",
  children: [
    {
      name: "A区",
      children: [
        {
          name: "a1",
          children: null
        },
        {
          name: "a2",
          children: null
        }
      ]
    },
    {
      name: "B区",
      children: [
        {
          name: "b1",
          children: null
        },
        {
          name: "b2",
          children: [
            {
              name: "b2-1",
              children: null
            },
            {
              name: "b2-2",
              children: null
            }
          ]
        }
      ]
    },
    {
      name: "C区",
      children: [
        {
          name: "c",
          children: null
        }
      ]
    }
  ]
};

/**
 * 在对象树查找name，返回父级name的数组（包含自己）, 只返回匹配的第一个结果
 * @param {object} tree
 * @param {*} name
 * @param {array} namePath
 * @return {object}
 */
const search2 = (tree, name, namePath = []) => {
  let item = tree;
  if (item.name === name) {
    namePath.push(item);
    return {
      namePath
    };
  } else if (item.children && item.children.length) {
    namePath.push(item);
    for (var i = 0; i < item.children.length; i++) {
      let result = search2(item.children[i], name, namePath);
      if (result) return { namePath };
    }
    namePath.pop();
  }
};

console.log("search2", search2(tree2, "b2-2"));

// 包装了一下search
const search3 = (tree, name, namePath = []) => {
  let item = Array.isArray(tree) ? tree : [tree];
  return search1(item, name, namePath);
};
console.log("search3", search3(tree2, "b2-2"));

const tree4 = [
  {
    name: "测试1",
    children: []
  },
  {
    name: "测试2",
    children: [
      {
        name: "A区",
        children: [
          {
            name: "a1",
            children: null
          },
          {
            name: "a2",
            children: null
          }
        ]
      },
      {
        name: "B区",
        children: [
          {
            name: "b1",
            children: null
          },
          {
            name: "b2",
            children: null
          }
        ]
      }
    ]
  },
  {
    name: "测试3",
    children: [
      {
        name: "c1",
        children: null
      }
    ]
  }
];

/**
 * 给树形结构加上层级level
 * @param {array} tree
 * @param {*} level
 */
const search4 = function(tree, level = 0) {
  let len = tree.length;
  for (let index = 0; index < len; index++) {
    const item = tree[index];
    item.level = level + 1;
    if (item.children && item.children.length > 0) {
      search4(item.children, item.level);
    }
  }
  return tree;
};
console.log("search4", search4(tree4));

const tree5 = [
  {
    name: "测试1",
    id: "001",
    children: []
  },
  {
    name: "测试2",
    id: "002",
    children: [
      {
        name: "A",
        id: "00201",
        children: [
          {
            name: "a1",
            id: "0020101",
            children: null
          },
          {
            name: "a2",
            id: "0020102",
            children: null
          }
        ]
      },
      {
        name: "B",
        id: "00202",
        children: [
          {
            name: "b1",
            id: "0020201",
            children: null
          },
          {
            name: "b2",
            id: "0020202",
            children: null
          }
        ]
      }
    ]
  },
  {
    name: "测试3",
    id: "003",
    children: [
      {
        name: "c1",
        id: "00301",
        children: null
      }
    ]
  }
];

const search5 = function(tree, level = 0, rootId = -1, parentId = -1) {
  let len = tree.length;
  for (let index = 0; index < len; index++) {
    const item = tree[index];
    item.rootId = rootId;
    item.parentId = parentId;
    item.level = level + 1;
    if (item.children && item.children.length > 0) {
      search5(item.children, item.level, parentId, item.id);
    }
  }
  return tree;
};

console.log("search5", search5(tree5));

const tree6 = [
  {
    name: "餐饮费用",
    rootType: "reimburse"
  },
  {
    name: "礼品费用",
    rootType: "reimburse"
  },
  {
    name: "采购申请",
    rootType: "custom"
  },
  {
    name: "aa申请",
    rootType: "custom"
  },
  {
    name: "付款合同",
    rootType: "contract"
  }
];

console.clear();

const search6 = tree => {
  let obj = { all: [] };
  tree.forEach((item) => {
    obj[item.rootType] = '';
  });

  tree.forEach((item) => {
    obj[item.rootType] += item.name + "#" ;
    obj.all.push(item.name);
  });

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let element = obj[key];
      if(typeof element == 'string'){
        element = element.slice(0,-1)
        obj[key] = element;
      }
    }
  }
  return obj;
};

console.log(search6(tree6));
/*
{
    "reimburse": "7777#8888",
    "custom": "55555#6666",
    "contract":"",
    "allSubjectIds":[
        "7777",
        "8888",
        "55555",
        "6666"
    ]
}
*/

var childrensTochildren = function(data) {
  var _len = data.length;
  for (var i = 0; i < _len; i++) {
    // console.log(data[i])

    if (data[i].childrens && data[i].childrens.length > 0) {
      data[i]["children"] = data[i]["childrens"];
      delete data[i]["childrens"];
      childrensTochildren(data[i]["children"]);
    }
  }
  return data;
};

var dataaaa = [
  {
    id: "1",
    name: "a",
    childrens: [
      {
        id: "2",
        name: "b",
        childrens: [
          {
            id: "3",
            name: "c"
          },
          {
            id: "4",
            name: "e"
          }
        ]
      },
      {
        id: "3",
        name: "d"
      }
    ]
  },
  {
    name: "a11",
    id: "1222"
  }
];

console.log("childrens to children", childrensTochildren(dataaaa));

const tree7 = [
  {
    'id': '-1',
    'level': '0'
  },
  {
    'id': '1',
    'level': '0'
  },
  {
    'id': '2',
    'level': '0',
    'children': [
      {
        'id': '3',
        'level': '1'
      },
      {
        'id': '4',
        'level': '1',
        'children': [
          {
            'id': '5',
            'level': '2'
          },
          {
            'id': '6',
            'level': '2',
            'children': [
              {
                'id': '7',
                'level': '3'
              }
            ]
          }
        ]
      },
    ]
  }
]

const search7 = function (tree, id, prev, root){
  for (let i = 0; i < tree.length; i++) {
    let element = tree[i];
    if(element.children && element.children.length > 0){
      root.push(element)
      let res = search7(element.children, id, element, root)
      if(res){
        return res;
      }
    }
    if (element.id == id) {
      return {
        cur: element,
        prev: prev,
        root: root
      }
    }
  }
}

console.log('search7',search7(tree7, '3', {}, []));

const tree8 = [
  {
    "id": "1253",
    "name": "ddd",
    "lastNode": "0",
    "level": 1,
    "children": [
      {
        "id": "1254",
        "name": "eee",
        "lastNode": "0",
        "level": 2,
        "children": [
          {
            "id": "1263",
            "name": "6666",
            "lastNode": "1",
            "level": 3,
          },
          {
            "id": "1255",
            "name": "444",
            "lastNode": "1",
            "level": 3,
          }
        ]
      }
    ]
  },
  {
    "id": "1249",
    "name": "顶级",
    "lastNode": "0",
    "level": 1,
    "children": [
      {
        "id": "1250",
        "name": "二级",
        "lastNode": "0",
        "level": 2,
        "children": [
          {
            "id": "1265",
            "name": "rrr",
            "lastNode": "1",
            "level": 3,
          },
          {
            "id": "1264",
            "name": "222",
            "lastNode": "1",
            "level": 3,
          }
        ]
      }
    ],
  }
]

var filterLastNodeItem = function (tree) {
  for (var i = 0; i < tree.length; i++) {
    var _item = tree[i];
    if (_item['lastNode'] == '1') {
      tree.splice(i, 1);
      i--;
    }
    if (_item.children && _item.children.length > 0) {
      filterLastNodeItem(_item.children)
    }
    if (_item.children && _item.children.length == 0){
      delete _item.children
    }
  }
  return tree
}


console.log(filterLastNodeItem(tree8))