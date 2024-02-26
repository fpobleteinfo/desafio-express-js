import fs from "fs";

const getData = (req, res) => {
  try {
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json({ message: "Canciones no disponible" });
  }
};

const nuevaCancion = (req, res) => {
  try {
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    canciones.push(cancion);
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.status(201).json(canciones);
  } catch (error) {
    res.status(500).json({ message: "Hubo un error" });
  }
};

const editarCancion = (req, res) => {
  try {
    const { id } = req.params;
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    const index = canciones.findIndex((c) => c.id == id);
    canciones[index] = cancion;
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.status(200).send("Registro actualizado");
  } catch (error) {
    res.status(500).json({ message: "Hubo un error" });
  }
};

const eliminarCancion = (req, res) =>{

    try {
        const { id } = req.params;
        const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
        const index = canciones.findIndex((c) => c.id == id);       
        canciones.splice(index, 1)
        fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
        res.status(200).send("Registro eliminado");        
    } catch (error) {
        res.status(500).json({ message: "Hubo un error" });
        
    }

}

export { getData, nuevaCancion, editarCancion, eliminarCancion };
