
public class Stack {
	
	private Node top;
	private int height = 0;
	
	class Node{
		int value;
		Node next;
		
		Node(int value) {
			this.value = value;
		}
	}
	
	public Stack(int value) {
		Node node = new Node(value);
		top = node;
		height = 1;
	}

	
	public void push(int value) {
		Node node = new Node(value);
		if (height == 0) {
			top = node;
			height = 1;
		} else {
			node.next = top;
			top = node;
			height ++;
		}
	}
	
	
	public Node pop() {
		if (top == null) return null;
		Node temp = top;
		top = top.next;
		temp.next = null;
		height --;
		return temp;
	} 
	
	public void printStack() { 
		if (top == null) {
			System.out.println("Stack Empty!");
		} else {
			Node temp = top;
			while (temp != null) {
				System.out.println(temp.value);
				temp = temp.next;
			}
		}
	}
	
	public void getTop() {
		if (top == null) {
			System.out.println("Stack Empty!");
		} else {
			System.out.println("TOP: "+ top.value);
		}
	}
	
	public void getHeight() {
		System.out.println("HEIGHT: "+ height);
	}
}
