const { deleteNode } = require('./index');
const { Node } = require('../linkedlist');

test('deleteNode is a function', () => {
  expect(typeof deleteNode).toEqual('function');
});

test('empty return null', () => {
  const newNode = deleteNode(null, 2);
  expect(newNode).toEqual(null);
});

test('node with only 1 value', () => {
  const node = new Node(1);

  const newNode = deleteNode(node, 1);
  expect(newNode).toEqual(null);
});

test('node 2 values, remove 1st one', () => {
  const node = new Node(1);
  node.next = new Node(2);

  const newNode = deleteNode(node, 1);
  expect(newNode.data).toEqual(2);
});

test('node 2 values, remove 2nd one', () => {
  const node = new Node(1);
  node.next = new Node(2);

  const newNode = deleteNode(node, 2);
  expect(newNode.data).toEqual(1);
});

test('delete 2 from [1, 2, 3] -> [1, 3]', () => {
  const node = new Node(1);
  node.next = new Node(2);
  node.next.next = new Node(3);

  const newNode = deleteNode(node, 2);

  expect(newNode.data).toEqual(1);
  expect(newNode.next.data).toEqual(3);
  expect(newNode.next.next).toEqual(null);
});
