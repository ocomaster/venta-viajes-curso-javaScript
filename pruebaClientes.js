User

Hola si te pido informacion en español, me la puedes compartir ?

CodeGPT llama3-70b-8192

¡Hola! Sí, puedo responder a tus preguntas y compartir información en español. ¡No hay problema! ¿En qué puedo ayudarte hoy?

User

me ayudas compartiendo un script que agregue, edite y elimine un cliente con nombre apellido y correo

CodeGPT llama3-70b-8192

Aquí te dejo un ejemplo de script en Python que utiliza una lista para almacenar la información de los clientes y permite agregar, editar y eliminar clientes:

Copy code
Insert code
# Inicializamos la lista de clientes
clientes = []

def agregar_cliente():
    nombre = input("Ingrese el nombre del cliente: ")
    apellido = input("Ingrese el apellido del cliente: ")
    correo = input("Ingrese el correo electrónico del cliente: ")
    clientes.append({"nombre": nombre, "apellido": apellido, "correo": correo})
    print("Cliente agregado con éxito!")

def editar_cliente():
    nombre_cliente = input("Ingrese el nombre del cliente que desea editar: ")
    for cliente in clientes:
        if cliente["nombre"] == nombre_cliente:
            cliente["nombre"] = input("Ingrese el nuevo nombre del cliente: ")
            cliente["apellido"] = input("Ingrese el nuevo apellido del cliente: ")
            cliente["correo"] = input("Ingrese el nuevo correo electrónico del cliente: ")
            print("Cliente editado con éxito!")
            return
    print("Cliente no encontrado!")

def eliminar_cliente():
    nombre_cliente = input("Ingrese el nombre del cliente que desea eliminar: ")
    for cliente in clientes:
        if cliente["nombre"] == nombre_cliente:
            clientes.remove(cliente)
            print("Cliente eliminado con éxito!")
            return
    print("Cliente no encontrado!")

while True:
    print("Menú:")
    print("1. Agregar cliente")
    print("2. Editar cliente")
    print("3. Eliminar cliente")
    print("4. Salir")
    opcion = input("Ingrese una opción: ")
    if opcion == "1":
        agregar_cliente()
    elif opcion == "2":
        editar_cliente()
    elif opcion == "3":
        eliminar_cliente()
    elif opcion == "4":
        break
    else:
        print("Opción inválida. Intente nuevamente.")
Este script utiliza una lista para almacenar la información de los clientes, y tres funciones para agregar, editar y eliminar clientes. La función agregar_cliente pide al usuario que ingrese la información del cliente y la agrega a la lista. La función editar_cliente busca al cliente por nombre y permite editar su información. La función eliminar_cliente busca al cliente por nombre y lo elimina de la lista. El script utiliza un bucle while para mostrar un menú y permitir al usuario interactuar con la lista de clientes.

Reload
