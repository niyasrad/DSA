import java.util.ArrayList;
import java.util.HashSet;

public class HashTable {
	private int size = 7;
	private Node[] dataMap;
	
	
	class Node {
		String key;
		int value;
		Node next;
		
		Node(String key, int value) {
			this.value = value;
			this.key = key;
		}
	}
	
	public HashTable() {
		dataMap = new Node[size];
	}
	
	public void printTable() {
		for (int i = 0; i < dataMap.length; i++) {
			System.out.println(i + " :");
			Node temp = dataMap[i];
			while (temp != null) {
				System.out.println(" { "+ temp.key + " = " + temp.value+ " } ");
				temp = temp.next;
			}
		}
	}
	
	private int hash(String key) {
		int hash = 0;
		char[] keyString = key.toCharArray();
		
		for (char keyChar: keyString) {
			int temp = keyChar;
			hash = (hash + temp * 23) % dataMap.length;
		}
		return hash;
	}
	
	public void set(String key, int value) {
		int index = hash(key);
		Node node = new Node(key, value);
		if (dataMap[index] == null) {
			dataMap[index] = node;
		} else {
			Node temp = dataMap[index];
			while (temp.next != null) {
				temp = temp.next;
			}
			temp.next = node;
		}
	}
	
	public int get(String key) {
		int index = hash(key);
		
		if (dataMap[index] == null) return 0;
		Node temp = dataMap[index];
		while (temp != null) {
			if (temp.key.equals(key)) {
				return temp.value;
			}
			temp = temp.next;
		}
		
		return 0;
	}
	
	public ArrayList<String> keys() {
		ArrayList<String> list = new ArrayList<>();
		
		for (Node i: dataMap) {
			if (i == null) continue;
			while (i != null) {
				list.add(i.key);
				i = i.next;
			}
		}
		
		return list;
	}
	
	public boolean hashInterviewQuestion() {
		int[] a1 = new int[] {3, 4, 5};
		int[] b1 = new int[] {1, 2, 5};
		
		HashSet<Integer> common = new HashSet<>();
		for (int a: a1) {
			common.add(a);
		}
		for (int b: b1) {
			if (common.contains(b)) {
				return true;
			}
		}
		
		return false;
	}
}
