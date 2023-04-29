
    function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function iterateList(list){
     let pointer = list;
     let result = ''
     while(pointer !== null){
       result = pointer.val + result;
       pointer = pointer.next
     }
     return BigInt(result)
   }
   
   let num1 = iterateList(l1)
   let num2 = iterateList(l2)
   const sumArray = Array.from(String(num1+num2), n => Number(n)).reverse();
   
   let newList = new ListNode()
   let pointer = newList
   for (let i = 0; i < sumArray.length; i++){
     pointer.next = new ListNode(sumArray[i])
     pointer = pointer.next
   }
   return newList.next

   

   
   
};