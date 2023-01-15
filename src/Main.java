
public class Main {

	public static void main(String[] args) {
//		LinkedList linkedList = new LinkedList(1);		
//		 LinkedList 
//		
//		linkedList.append(2);
//		linkedList.append(3);
//		linkedList.prepend(0);
//		
//		System.out.println(linkedList.set(2, 6969));
//		linkedList.remove(2);
//		linkedList.insert(2, 420);
//		
//		linkedList.reverse();
//		linkedList.getHead();
//		linkedList.getTail();
//		linkedList.getLength();
//		linkedList.printList();
//		System.out.println("Get :"  + linkedList.get(2).value);
		
//		DoublyLinkedList myDLL = new DoublyLinkedList(7);
//		
//		myDLL.append(8);
//		myDLL.append(9);
//		myDLL.prepend(6);
//		myDLL.getHead();
//		myDLL.getTail();
//		myDLL.getLength();
//		myDLL.printList();
//		
//		
//		System.out.println(myDLL.removeFirst().value);
//		System.out.println(myDLL.removeFirst().value);
//		System.out.println(myDLL.removeLast().value);
//		System.out.println("GET 0: " + myDLL.get(0).value);
//		System.out.println("SET 0 - 5: " + myDLL.set(0, 5));
//		
//		myDLL.insert(1, 6);
//		myDLL.insert(2, 8);
//		myDLL.insert(2, 7);
//		myDLL.remove(0);
//		myDLL.remove(1);
//
//		myDLL.getHead();
//		myDLL.getTail();
//		myDLL.getLength();
//		myDLL.printList();
		
//		Stack stack = new Stack(4);
//		stack.push(0);
//		stack.push(10);
//		stack.pop();
//		stack.printStack();
//		stack.getHeight();
//		stack.getTop();

//		Queue queue = new Queue(5);
//		queue.enqueue(5);
//		queue.enqueue(5);
//		queue.enqueue(5);
//		queue.enqueue(5);
//		queue.dequeue();
//		queue.dequeue();
//		queue.dequeue();
//		queue.dequeue();
//		queue.dequeue();
//		queue.dequeue();
//		queue.printQueue();
//		queue.getFirst();
//		queue.getLast();
//		queue.getLength();
//		
		
		BinarySearchTree BST = new BinarySearchTree();
		System.out.println("Root: " + BST.root);
		BST.insert(47);
		BST.insert(21);
		BST.insert(76);
		BST.insert(18);
		BST.insert(52);
		BST.insert(82);
		BST.insert(27);
		
		System.out.println(BST.root.left.right.value);
		System.out.println(BST.contains(76));
		System.out.println(BST.contains(82));
		System.out.println(BST.contains(47));
		System.out.println(BST.contains(69));
	}

}
