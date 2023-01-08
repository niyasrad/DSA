
public class DoublyLinkedList {
	private Node head;
	private Node tail;
	private int length = 0;
	
	class Node {
		int value;
		Node prev;
		Node next;
		
		Node(int value) {
			this.value = value;
		}
	}
	
	DoublyLinkedList(int value) {
		Node node = new Node(value);
		head = node;
		tail = node;
		length = 1;
	}
	
	// getHead(), getTail(), getLength()
	
	public void getHead() {
		if (head == null) {
			System.out.println("DoublyLinkedList Empty!");
		} else {
			System.out.println("HEAD: " + head.value);
		}
	}
	
	public void getTail() {
		if (tail == null) {
			System.out.println("DoublyLinkedList Empty!");
		} else {
			System.out.println("TAIL: " + tail.value);
		}
	}
	
	public void getLength() {
		System.out.println("Length: " + length);
	}
	
	// append(value) 
	
	public void append(int value)  {
		Node node = new Node(value);
		if (length == 0) {
			head = node;
			tail = node;
		} else {
			tail.next = node;
			node.prev = tail;
			tail = node;
		}
		length ++;
	}
	
	// removeLast
	
	public Node removeLast() {
		if (length == 0) return null;
		Node temp = tail;
		if (length == 1) {
			head = null;
			tail = null;
		} else {
			tail = tail.prev;
			tail.next = null;
			temp.prev = null;
		}
		length --;
		return temp;
	}
	
	// 	prepend(value)
	
	public void prepend(int value) {
		Node node = new Node(value);
		if(length == 0) {
			head = node;
			tail = node;
		} else {
			node.next = head;
			head.prev = node;
			head = node;
		}
		length ++;
	}
	
	// 	removeFirst
	
	public Node removeFirst() {
		if (length == 0) return null;
		Node temp = head;
		if (length == 1) {
			head = null;
			tail = null;
		} else {
			head = head.next;
			head.prev = null;
			temp.next = null;
		}
		length --;
		return temp;
	}
	
	// get(int index)
	
	public Node get(int index) {
		if (index < 0 || index >= length) return null;
		Node temp = head;
		if (index < length / 2) {
			int ind = 0;
			while(ind != index) {
				ind ++;
				temp = temp.next;
			}
		} else {
			temp = tail;
			int ind = length - 1;
			while(ind != index) {
				ind --;
				temp = temp.prev;
			}
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
		Node node = new Node(value);
		Node before = get(index - 1);
		Node after = get(index);
		node.next = after;
		node.prev = before;
		after.prev = node;
		before.next = node;
		length ++;
		return true;
	}
	
	// remove at any index 
	
	public Node remove(int index) {
		if (index < 0 || index >= length) return null;
		if (index == 0) return removeFirst();
		if (index == length - 1) return removeLast();
		Node temp = get(index);
		Node before = temp.prev;
		Node after = temp.next;
		before.next = after;
		after.prev = before;
		temp.prev = null;
		temp.next = null;
		length --;
		return temp;
	}
	
	public void printList() {
		Node node = head;
		while (node != null) {
			System.out.println(node.value);
			node = node.next;
		}
	}


}
