package manejoColecciones;

import java.util.*;

public class mainCollections {
	
	public static void main(String args[]) {
		List myList = new ArrayList();
		myList.add("1");
		myList.add("2");
		myList.add("3");
		myList.add("4");
		myList.add("5");
		myList.add("6");
		imprimir(myList);
		
		Set mySet = new HashSet();
		mySet.add("100");
		mySet.add("200");
		mySet.add("300");
		mySet.add("400");
		mySet.add("500");
		mySet.add("500");
		mySet.add("600");
		imprimir(mySet);
		
		Map myMap=new HashMap();
		myMap.put("1","Edwin");
		myMap.put("2","Giovanni");
		myMap.put("3","Perez");
		myMap.put("4","Robles");
		myMap.put("5","Puerto");
		myMap.put("6","Juarez");
		myMap.put("7","CDMX");
		imprimir(myMap.keySet());
		imprimir(myMap.values());
	}
	private static void imprimir(Collection colecion) {
		for(Object data:colecion) {
			System.out.print(data+" ");
		}
		System.out.println("");
	}
	
}
