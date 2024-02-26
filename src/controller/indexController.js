import path from 'path';

const getHome = (req, res) => {
    const filePath = path.resolve("index.html")
    res.sendFile(filePath)
}

export { getHome };