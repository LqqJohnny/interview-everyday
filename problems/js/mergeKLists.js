// 合并k个有序链表 


// 前置条件 -- 链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * 
 * 将所有 listNode 节点都放入一个数组 ， 在对数组排序 然后在转成链表  这样的 时间复杂度为
 * 
 */
var mergeKLists = function (lists) {
    return lists.reduce((p, n) => {
        while (n) {
            p.push(n), n = n.next
        }
        return p
    }, []).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)
}

//  !leetcode 会超出时间限制 ， 有更高效的方法 ， 但是不考虑时间限制， 此方法是可行的

function mergeKLists1(lists){

    let result = new ListNode();
    if (lists.length === 0) {
        return null;
    }
    let temp = result;
    while(true){
        // 获取到 当前K个链表的头部最小的链表 index
        let tempMinNode = lists[0];
        let minIndex = 0;
        for (let i = 1; i < lists.length;i++){
            let cur = lists[i];
            console.log('比较一下：', tempMinNode, cur);
            if (!tempMinNode || (cur && tempMinNode && tempMinNode.val > cur.val) ){
                minIndex = i;
                tempMinNode = cur;
            }
        }

        console.log('最小值的index：', minIndex);
        // 处理头部最小链表 
        if (lists[minIndex]){
            temp.next = lists[minIndex];
            temp = temp.next;
            lists[minIndex] = lists[minIndex].next;
        }else{
            return result.next;
        }
        
        // 某一个链表已用完就删除
        if (!lists[minIndex]){
            lists.splice(minIndex , 1);
            console.log('有一个链表已经用完了，剩余', lists.length);
        }
        // 只剩一个 链表了 直接拼上 并返回结果
        if (lists.length===1){
            temp.next = lists[0];
            return result.next;
        }
    }

}

// ========================================
// !同上 也会因时间限制 超时 不能通过 leetcode 的所有测试用例
// 每次合并两个链表。
var mergeKLists2 = function (lists) {
    let result = [];
    if (lists.length === 1) {
        return lists[0];
    }
    for (let i = 0; i < lists.length;) {
        result.push(mergeTwo(lists[i], lists[i + 1]));
        i += 2;
    }
    return mergeKLists(result);
};

// 合并两个 链表   leetcode 21题
const mergeTwo = function (l1, l2) {
    let result = new ListNode(0); // 起始节点 临时
    let temp = result;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            temp.next = l2;
            l2 = l2.next;
        } else {
            temp.next = l1;
            l1 = l1.next;
        }
        temp = temp.next;
    }

    if (l1) {
        temp.next = l1;
    }
    if (l2) {
        temp.next = l2;
    }

    return result.next;
}



let l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let l3 = new ListNode(2);
l3.next = new ListNode(6);

let lists = [];


console.log(JSON.stringify(mergeKLists(lists)));