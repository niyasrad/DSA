
public class Main {

	public static void main(String[] args) {
		LinkedList linkedList = new LinkedList(1);
		
		
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
		
		DoublyLinkedList myDLL = new DoublyLinkedList(7);
		
		myDLL.append(8);
		myDLL.append(9);
		myDLL.prepend(6);
		myDLL.getHead();
		myDLL.getTail();
		myDLL.getLength();
		myDLL.printList();
		
		
		System.out.println(myDLL.removeFirst().value);
		System.out.println(myDLL.removeFirst().value);
		System.out.println(myDLL.removeLast().value);
		System.out.println("GET 0: " + myDLL.get(0).value);
		System.out.println("SET 0 - 5: " + myDLL.set(0, 5));
		
		myDLL.insert(1, 6);
		myDLL.insert(2, 8);
		myDLL.insert(2, 7);
		myDLL.remove(0);
		myDLL.remove(1);

		myDLL.getHead();
		myDLL.getTail();
		myDLL.getLength();
		myDLL.printList();
		

	}

}
