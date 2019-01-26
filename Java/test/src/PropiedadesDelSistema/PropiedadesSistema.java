package PropiedadesDelSistema;
import java.util.*;


public class PropiedadesSistema {
	public static void main(String[] args) {
		Properties p=System.getProperties();//devuelve las propiedades del sistema donde estamos trabajando
		Enumeration nombrePropiedades = p.propertyNames();
		while(nombrePropiedades.hasMoreElements()) {
			String nombrePropiedad = (String) nombrePropiedades.nextElement();
			String valorPropiedad = p.getProperty(nombrePropiedad);//regresa el valor de una propiedad que proporcionemos
			System.out.println("Llave : "+nombrePropiedad + " = " + valorPropiedad);
		}
		
		
		
	}
}
