const { reverseLinkedList } = require('./index');
const { Node } = require('../linkedlist');

test('reverseLinkedList is a function', () => {
  expect(typeof reverseLinkedList).toEqual('function');
});

test('[1, 2, 3, 4, 5, null] -> [5, 4, 3, 2, 1, null]', () => {
  const node = new Node(1);
  node.next = new Node(2);
  node.next.next = new Node(3);
  node.next.next.next = new Node(4);
  node.next.next.next.next = new Node(5);

  const reversedNode = reverseLinkedList(node);

  expect(reversedNode.data).toEqual(5);
  expect(reversedNode.next.data).toEqual(4);
  expect(reversedNode.next.next.data).toEqual(3);
  expect(reversedNode.next.next.next.data).toEqual(2);
  expect(reversedNode.next.next.next.next.data).toEqual(1);
  expect(reversedNode.next.next.next.next.next).toEqual(null);
});

test('[] -> []', () => {
  const node = null;

  expect(reverseLinkedList(node)).toEqual(null);
});
