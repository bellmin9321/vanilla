
const people = [ // people[0] = [person[0], person[1]]
  ["Steven", "Tyler"], // index:3
  ["George", "Harrison"], // index:7
  ["Mr.", "Doob"], // index:5
  ["Dr.", "Sunshine"], // index:4
  ["John", "Resig"], // index:7
  ["Brendan", "Eich"], // index:2
  ["Alan", "Turing"], // index:4
];

const storage = [
  undefined, // index:0
  undefined,  // index:1
  {key: "Brendon", value: "Eich", next: null}, // index:2
  {key: "Steven", value: "Tyler", next: null}, // index:3
  {key: "Dr.", value: "Sunshine", next: { // index:4
    key: "Alan", value: "Turing", next: null
  }},
  {key: "Mr.", value: "Doob", next: null}, // index:5
  undefined, // index:6
  {key: "George", value: "Harrison", next: { // index:7
    key: "John", value: "Resig", next: null
  }}
];

function createNode(key, value) {
    const node = {};
  
    node.key = key;
    node.value = value;
    node.next = null;
  
    return node;
  }
  
  HashTable.prototype.insert = function (k, v) {
    const index = getIndexBelowMaxForKey(k, this._limit);
    const node = createNode(k, v);
    let valueList = this._storage.get(index);
    let list = {};
  
    if(!valueList) {
      list.head = node;
      list.tail = node;
    } else {
      if (valueList.head.key === k) {
        list.head = node;
        list.tail = node;
      } else {
        list = valueList;
        list.tail.next = node;
        list.tail = node;
      }
    }
  
    valueList = list;
    this._storage.set(index, valueList);
  };
  
  HashTable.prototype.retrieve = function (k) {
    const index = getIndexBelowMaxForKey(k, this._limit);
    const list = this._storage.get(index);
    let checkNode = list.head;
  
    while(checkNode){
      if (checkNode.key === k) {
        return checkNode.value;
      } else {
        checkNode = checkNode.next;
      }
    }
  };
  
  HashTable.prototype.remove = function (k) {
    const index = getIndexBelowMaxForKey(k, this._limit);
    const node = createNode(k);
    this._storage.set(index, node);
  };

insert
  // const newV = this._storage.get(index)
  // if(newV === undefined) {
  //   this._keyStorage.set(index, k);
  //   this._storage.set(index, v);
  // } else {
  //   const kk = this._keyStorage.get(index);
  //   if(kk === k) {
  //     this._storage.set(index, v);
  //   } else {
  //     const v_arr = [newV, v]
  //     this._storage.set(index, v_arr)
  //   }
  // }

  // const d = this._storage.get(index)
  // if(d) {
  //   if(v === d) {
  //     return;
  //   } else {
  //     const arr = [d, v]
  //     this._storage.set(index, arr)
  //   }
  // } else {
  //   this._storage.set(index, v)
  // }

  // console.log(this._storage.getStorage())

  retrieve
  // if(Array.isArray(v)) {
  //   for(const vv of v) {
  //     if(k === vv) {
  //       return vv;
  //     }
  //   }
  // } else {
  //   return v;
  // }

  [{head: null, tail: null}]

  [{head: {key: k, value: v, next: null},
    tail: {key: k, value: v, next: null}}]

list = {head: null, tail: null};
list.addToTail(4);
list = {head: {value: 4, next: null}, tail: {value:4, next: null}};
list.addToTail(5);
list = {head: {value: 4, next: null}, tail: {value:4, next: {
    value: 5,
    next: null
}}}

{value:4, next: {
    value: 5,
    next: null
}} = {value:5, next: null}