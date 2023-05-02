/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const list = new ListNode()
  let pointer = list

  while (list1 && list2) {
    const lowerValue = (list1.val <= list2.val ? list1.val : list2.val)

    if (lowerValue === list1.val)
      list1 = list1.next
    else
      list2 = list2.next

    pointer.next = new ListNode(lowerValue)
    pointer = pointer.next
  }
  
  pointer.next = (list1 ? list1 : list2) 
  return list.next
};
