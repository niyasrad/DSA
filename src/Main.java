
public class Main {

	public static void main(String[] args) {
		LinkedList linkedList = new LinkedList(1);
		
		linkedList.append(2);
		linkedList.append(3);
		linkedList.prepend(0);
		
		System.out.println(linkedList.set(2, 6969));
		linkedList.remove(2);
		linkedList.insert(2, 420);
		
		linkedList.reverse();
		linkedList.getHead();
		linkedList.getTail();
		linkedList.getLength();
		linkedList.printList();
		System.out.println("Get :"  + linkedList.get(2).value);

	}

}
