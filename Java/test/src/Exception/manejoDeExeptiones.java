package Exception;

public class manejoDeExeptiones{
		public static void main (String args[]) throws OperationExeption {
			try {
				int op1=Integer.parseInt(args[0]);
				int op2=Integer.parseInt(args[1]);
				operaciones op=new operaciones(op1,op2);
				op.visualizarOperacion();
			} catch (ArrayIndexOutOfBoundsException aioobe) {
				System.out.println("ocurrio una expecion");
				System.out.println("Ocurrio un error al intentar axceder al elemento fuera de rango");
			}catch(NumberFormatException nfe) {
				System.out.println("ocurrio una exeption");
				System.out.println("Una de los agumentos no es entero");
			}catch(OperationExeption op) {
				System.out.println("ocurrio una exeption");
				System.out.println("se trato de realizar un operacion erronea");
			}finally {
				System.out.println("Se terminaron de verificar las exeptiones");
			}
		}
}
