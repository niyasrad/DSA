import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class Graph {
	private HashMap<String, HashSet<String>> adjList = new HashMap<>();
	
	public boolean addVertex(String vertex) {
		if (adjList.containsKey(vertex)) return false;
		adjList.put(vertex, new HashSet<String>());
		return true;
	}
	
	public boolean addEdge(String vertex1, String vertex2) {
		if (adjList.containsKey(vertex1) && adjList.containsKey(vertex2)) {
			adjList.get(vertex1).add(vertex2);
			adjList.get(vertex2).add(vertex1);
			return true;
		}
		return false;
	}
	
	public boolean removeEdge(String vertex1, String vertex2) {
		if (adjList.containsKey(vertex1) && adjList.containsKey(vertex2)) {
			adjList.get(vertex1).remove(vertex2);
			adjList.get(vertex2).remove(vertex1);
			return true;
		}
		return false;
	}
	
	public boolean removeVertex(String vertex) {
		if (!adjList.containsKey(vertex)) return false;
		for (Map.Entry<String, HashSet<String>> ent: adjList.entrySet()) {
			ent.getValue().remove(vertex);
		}
		adjList.remove(vertex);
		return true;
	}
	
	public void printGraph() {
		System.out.println(adjList);
	}
}
