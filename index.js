<!DOCTYPE html>
<html>
<head>
    <title>Editar Registro</title>
</head>
<body>
    <h1>Editar Registro</h1>
    <form action="/editar/{{ registro[0] }}" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" value="{{ registro[1] }}" required>
        <br>
        <label for="telefono">Teléfono:</label>
        <input type="text" name="telefono" id="telefono" value="{{ registro[2] }}" required>
        <br>
        <input type="submit" value="Guardar">
    </form>
</body>
</html>
