
public class Queue {
	private Node first;
	private Node last;
	private int length = 0;
	
	class Node {
		int value;
		Node next;
		
		Node(int value) {
			this.value = value;
		}
	}
	
	Queue(int value) {
		Node node = new Node(value);
		first = node;
		last = node;
		length = 1;
	}
	
	public void enqueue(int value) {
		Node node = new Node(value);
		if (length == 0) {
			first = node;
			last = node;
			length = 1;
		} else {
			last.next = node;
			last = node;
			length ++;
		}
	}
	
	public Node dequeue() {
		if (length == 0) return null;
		Node temp = first;
		if (length == 1) {
			first = null;
			last = null;
			length = 0;
			return temp;
		}
		first = first.next;
		temp.next = null;
		length --;
		return temp;
	}
	
	public void printQueue() {
		Node temp = first;
		while (temp != null) {
			System.out.println(temp.value);
			temp = temp.next;
		}
	}
	
	public void getFirst() {
		if (first == null) {
			System.out.println("Queue Empty!");
		} else {
			System.out.println("First: " + first.value);
		}	
	}
	
	public void getLast() {
		if (last == null) {
			System.out.println("Queue Empty!");
		} else {
			System.out.println("Last: "+ last.value);
		}
	}
	
	public void getLength() {
		System.out.println("Length: " + length);
	}
}
