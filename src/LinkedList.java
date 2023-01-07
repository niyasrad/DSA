
public class LinkedList {
	private Node head;
	private Node tail;
	private int length = 0;
	
	public class Node{
		int value;
		Node next;
		
		public Node(int value) {
			this.value = value;
		}
	}

	public LinkedList(int value) {
		Node node = new Node(value);
		head = node;
		tail = node;
		length = 1;
	}
	
	// getHead(), getTail(), getLength()
	
	public void getHead() {
		System.out.println("HEAD: " + head.value);
	}
	public void getTail() {
		System.out.println("TAIL: " + tail.value);
	}
	public void getLength() {
		System.out.println("LENGTH: " + length);
	}
	
	// append(value) 
	
	public void append(int value) {
		Node node = new Node(value);
		tail.next = node;
		tail = tail.next;
		length ++;
	}
	
	// prepend(value)
	
	public void prepend(int value) {
		Node node = new Node(value);
		Node temp = head;
		head = node;
		node.next = temp;
		length ++;
	}
	
	// removeLast
	
	public Node removeLast() {
		if (length == 0) return null;
		Node temp = head;
		Node pre = head;
		
		while (temp.next != null) {
			pre = temp;
			temp = temp.next;
		}
		tail = pre;
		pre.next = null;
		length --;
		return temp;
	}
	
	// removeFirst
	
	public Node removeFirst() {
		if (length == 0) return null;
		Node temp = head;
		head = head.next;
		temp.next = null;
		length --;
		return temp;
	}
	
	// get(int index)
	
	public Node get(int index) {
		if(index < 0 || index > length) return null;
		Node temp = head;
		int indx = 0;
		while (indx != index) {
			temp = temp.next;
			indx ++;
		}
		return temp;
	}
	
	// set(int index, int value)
	
	public boolean set(int index, int value) {
		Node node = get(index);
		if (node == null) return false;
		node.value = value;
		return true;
	}
	
	// insert to any index.
	
	public boolean insert(int index, int value) {
		if (index < 0 || index > length) return false;
		if (index == 0) {
			prepend(value);
			return true;
		}
		if (index == length) {
			append(value);
			return true;
		}
		Node newNode = new Node(value);
		Node node = get(index - 1);
		Node temp = node.next;
		node.next = newNode;
		newNode.next = temp;
		return true;
	}
	
	// remove at any index 
	
	public Node remove(int index) {
		if (index < 0 || index >= length) return null;
		if (index == 0) {
			return removeFirst();
		} 
		if (index == length - 1) {
			return removeLast();
		}
		Node node = get(index - 1);
		Node temp = node.next;
		node.next = temp.next;
		temp.next = null;
		
		return temp;
		
	}
	
	// Reverse a linkedList, - BEFORE, TEMP, AFTER
	
	public void reverse() {
		Node temp = head;
		head = tail;
		tail = temp;
		
		
		Node before = null;
		Node after = temp.next;
		
		for (int i = 0; i < length; i++) {
			after = temp.next;
			temp.next = before;
			before = temp;
			temp = after;
		}
	}
	
	// printList()
	
	public void printList() {
		if (length == 0) {
			System.out.println(" ");
		} else {
			Node temp = head;
			
			
			for (int i = 0; i < length; i++) {
				System.out.println(temp.value);
				temp = temp.next;
			}
		}
	}
}



