
public class BinarySearchTree {
	
	Node root;
	
	
	class Node {
		int value;
		Node left;
		Node right;
		
		Node(int value) {
			this.value = value;
		}
	}
	
	
	public boolean insert(int value) {
		Node node = new Node(value);
		Node temp = root;
		
		if (temp == null) {
			root = node;
			return true;
		}
		while (true) {
			if (value < temp.value) {
				if (temp.left == null) {
					temp.left = node;
					return true;
				} else {
					temp = temp.left;
				}
			} else if (value == temp.value) {
				return false;
			} else {
				if (temp.right == null) {
					temp.right = node;
					return true;
				} else {
					temp = temp.right;
				}
			}
		}
	}
	
	
	public boolean contains(int value) {
		Node temp = root;
		if (temp == null) return false;
		while (temp != null) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value == temp.value) {
				return true;
			} else {
				temp = temp.right;
			}
		}
		return false;
	}
}
