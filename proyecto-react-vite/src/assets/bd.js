let productos = [
    {
        nombre: "Smart TV Hitachi 50''",
        precio: 79907,
        categoria: "Audio/Video",
        codigo: "A001",
        cantidad: 3,
        imagen: "Audio-Video/tv2.png"
    },
    {
        nombre: "Heladera Samsung Rt38k59",
        precio:  200784,
        categoria: "Electrodomésticos y AC",
        codigo: "E001",
        cantidad: 5,
        imagen: "Electrodomésticos-AA/heladera2.png"
    },
    {
        nombre: "Notebook ASUS X515JA",
        precio: 84999,
        categoria: "Audio/Video",
        codigo: "A002",
        cantidad: 8,
        imagen: "Audio-Video/notebook.png"
    },
    {
        nombre: "Equipo de música Sony",
        precio: 35000,
        categoria: "Audio/Video",
        codigo: "A003",
        cantidad: 2,
        imagen: "Audio-Video/equipomusica.png"
    },
    {
        nombre: "Auriculares Sony MDR-ZX110",
        precio: 4999,
        categoria: "Audio/Video",
        codigo: "A004",
        cantidad: 9,
        imagen: "Audio-Video/auricularesVincha.png"
    },
    {
        nombre: "Lavarropas Samsung W65m0",
        precio: 92032,
        categoria: "Electrodomésticos y AC",
        codigo: "E002",
        cantidad: 1,
        imagen: "Electrodomésticos-AA/lavarropas.png"
    },
    {
        nombre: "Aire Acondicionado TCL",
        precio: 82795,
        categoria: "Electrodomésticos y AC",
        codigo: "E003",
        cantidad: 5,
        imagen: "Electrodomésticos-AA/airetcl.png"
    },
    {
        nombre: "Afeitadora Philips Aquatouch",
        precio: 7245,
        categoria: "Cuidado Personal",
        codigo: "C001",
        cantidad: 6,
        imagen: "Cuidado Personal/afeitadora.png"
    },
    {
        nombre: "Kit Philips Brp505/00",
        precio: 12063,
        categoria: "Cuidado Personal",
        codigo:"C002",
        cantidad: 2,
        imagen: "Cuidado Personal/kit-depilación.png"
    },
    {
        nombre: "Depiladora Philips Bre712/00",
        precio: 14125,
        categoria: "Cuidado Personal",
        codigo: "C003",
        cantidad: 7,
        imagen: "Cuidado Personal/depiladora_philips.png"
    },
    {
        nombre: "Secador De Pelo Remington",
        precio: 6313,
        categoria: "Cuidado Personal",
        codigo: "C004",
        cantidad: 5,
        imagen: "Cuidado Personal/secador de pelo (1).png"
    },
    {
        nombre: "Pileta circular Sol de Verano",
        precio: 49403,
        categoria: "Hogar y Jardín",
        codigo: "H001",
        cantidad: 3,
        imagen: "Hogar y Jardín/pileta circular.png"
    },
    {
        nombre: "Futón 3 cuerpos",
        precio: 32800,
        categoria: "Hogar y Jardín",
        codigo: "H002",
        cantidad: 2,
        imagen: "Hogar y Jardín/futon_3_cuerpos.png"
    },
    {
        nombre: "Cama de 1 plaza blanca",
        precio: 22409,
        categoria: "Hogar y Jardín",
        codigo: "H003",
        cantidad: 2,
        imagen: "Hogar y Jardín/cama_1_plaza.png"
    },
    {
        nombre: "Escritorio de trabajo",
        precio: 19480,
        categoria: "Hogar y Jardín",
        codigo: "H004",
        cantidad: 3,
        imagen: "Hogar y Jardín/escritorio_de_trabajo.png"
    },
    {
        nombre: "Bicicleta Gribom 3060 R26",
        precio: 46795,
        categoria: "Más Categorías",
        codigo: "M001",
        cantidad: 8,
        imagen: "Más categorías/bicicleta.png"
    },
    {
        nombre: "Conservadora 32 L",
        precio: 3980,
        categoria: "Más Categorías",
        codigo: "M002",
        cantidad: 15,
        imagen: "Más categorías/conservadora.png"
    },
    {
        nombre: "Parlante Sanyo Bth25",
        precio: 14452,
        categoria: "Audio/Video",
        codigo: "A005",
        cantidad: 23,
        imagen: "Audio-Video/parlante2.png"
    },
    {
        nombre: "Heladera Samsung Rt32k507",
        precio: 130183,
        categoria: "Electrodomésticos y AC",
        codigo: "E004",
        cantidad: 5,
        imagen: "Electrodomésticos-AA/heladera4.png"
    },
    {
        nombre: "Freezer Philco 2 Puertas",
        precio: 115034,
        categoria: "Electrodomésticos y AC",
        codigo: "E005",
        cantidad: 4,
        imagen: "Electrodomésticos-AA/freezer.png"
    }
];

export const gFetch = new Promise(( resolve, reject) => {
    let condition = true;

    if (condition) {
        setTimeout(() =>{
            resolve(productos)
        }, 2000 )
    } else {
        reject('400 not found')
    }
})