import React,{createContext, useContext} from 'react'
import imagenes from '../Assets/imagenes'

const Context = createContext()


const ContextProvider = ({children}) => {
    const products =[
        {
            nombre: 'Jerry Cantrell "Wino"',
            image:  imagenes[0],
            precio: '3,199.00',
            categoria: 'LES PAUL CUSTOM',
            id:1,
            stock: 8,
            descripcion: '"The story of “Greeny” is shrouded in mystery, but few guitars are as illustrious. Greeny is one of the most iconic original Les Paul™ Standards ever made, with a unique sound as recognizable as the guitar itself. Previously owned by Peter Green, it was used throughout his time with Fleetwood Mac and later sold to Gary Moore, who used it for three decades with Thin Lizzy and as a solo artist. Now owned by Kirk Hammett, Greeny has passed through the hands of three legendary guitarists.  ',
        },
        {
            nombre: 'Peter Frampton "Phenix" ',
            image:imagenes[1],
            precio: '6,999.00',
            categoria:'LES PAUL CUSTOM',
            id:2,
            stock: 8,
            descripcion: "The 'Phenix'Les Paul Custom is the iconic guitar that is heard on, and that graced the cover of 1976's classic 'Frampton Comes Alive!' LP. Now the Gibson Custom Shop is proud to offer a VOS rendition of this guitar as an Artist model. It has all of the classic Les Paul Custom cosmetic appointments, along with a weight-relieved mahogany body with a solid mahogany top, gold hardware, Grover® tuners, Schaller Strap Locks, and three open-coil Custombucker humbuckers™. "
        },
        {
            nombre: 'Slash Les Paul Standard',
            image:imagenes[2],
            precio: '2,999.00',
            categoria:'LES PAUL STANDARD',
            id:3,
            stock: 8,
            descripcion: "Gibson and Slash are proud to present the Slash Collection Gibson Les Paul Standard. It represents influential Gibson guitars Slash has used during his career, inspiring multiple generations of players around the world. The Slash Collection of Gibson guitars can be seen live on stage with Slash today. "
        },
        {
            nombre: '1957 Les Paul Junior "Reissue"',
            image:imagenes[3],
            precio:'3,999.00',
            categoria:'LES PAUL JUNIOR',
            id:4,
            stock: 8,
            descripcion: "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved – shaping sound across generations and genres of music. The Les Paul Standard '50s has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and aged gold Top Hat knobs. "
        },
        {
            nombre: 'Slash "Victoria" Goldtop',
            image:imagenes[4],
            precio:'3,199.00',
            categoria:'LES PAUL STANDARD',
            id:5,
            stock: 8,
            descripcion: "It represents influential Gibson guitars Slash has used during his career, inspiring multiple generations of players around the world. The Slash Collection of Gibson guitars can be seen live on stage with Slash today. The Slash 'Victoria' Les Paul™ Standard Goldtop features a maple top, a solid mahogany body with a dark finish on the back, and Slash’s personal touches, including a C-shape neck profile, Gibson Custom BurstBucker™ Alnico 2 pickups, color-coordinated hardware appointments, hand-wired electronics with Orange Drop® capacitors and a vintage-style hardshell case."
        },
        {
            nombre: 'SG Special Ebony',
            image:imagenes[5],
            precio:'1,599.00',
            categoria:'SG SPECIAL',
            id:6,
            stock: 8,
            descripcion: "The SG™ Special returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. This early 60s style SG Special has the vibe and sound heard on countless classic rock recordings. The comfortable, SlimTaper™ mahogany neck and bound rosewood fingerboard are well known for fast, effortless playing. The two P-90 pickups are noted for their fat snarl when driven and their smooth sweetness when played clean. ",
        },
        {
            nombre: 'SG Standard "61"',
            image:imagenes[6],
            precio:'1,999.00',
            categoria:'SG STANDARD',
            id:7,
            stock: 8,
            descripcion: "The SG Standard ‘61 returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. In 1961, the Les Paul™ model was put on hiatus and an all-new design evolved into what is today known as the SG™ or “solid guitar.” The Gibson SG Standard '61 retains the styling of the original featuring a SlimTaper™ mahogany neck and a bound rosewood fingerboard. "
        },
        {
            nombre: 'G-Writer',
            image:imagenes[7],
            precio:'1,599.00',
            categoria:'ACUSTIC GUITAR',
            id:8,
            stock: 8,
            descripcion: "The G-Writer EC is equipped with a Gibson Player Port™. The Player Port is an original Gibson concept from the early 1960s that has been refined by our acoustic luthier team to deliver a truly revolutionary sonic improvement that adds a new dimension to the sound. The Gibson Player Port allows you to hear the guitar as you're playing it like you've never heard it before—the same way your audience hears it—maximizing the sonic impact for an immersive playing and listening experience."
        },
        {
            nombre: 'Thunderbird Bass',
            image:imagenes[8],
            precio:'2,299.00',
            categoria:'BASS',
            id:9,
            stock: 8,
            descripcion: "The Gibson Thunderbird has the classic reverse body and headstock design as originally introduced in 1963 as Gibson's first neck-through-body bass design. The traditional 9-ply mahogany/walnut neck through body construction provides a thundering low end response and a piano like sustain. The narrow nut width and rounded neck profile neck feels both fast and intuitive. "
        },
        {
            nombre: 'SG Standard Bass',
            image:imagenes[9],
            precio:'1,999.00',
            categoria:'BASS',
            id:10,
            stock: 8,
            descripcion: "The SG Bass has the legendary looks, sound and feel which made it one of Gibson's most iconic basses. The short scale length is actually a big part of this sound! While the short scale length of the SG Bass is preferred by smaller players, it's also preferred by many for the strong fundamental tone for which this short scale bass is known. As expected, the solid mahogany body has deeply sculpted scarfing and the rounded profile mahogany neck and rosewood fingerboard feels familiar and comfortable. "
        },
        {
            nombre: 'J-45 Standard',
            image:imagenes[10],
            precio:'2,849.00',
            categoria:'ACUSTIC GUITAR',
            id:11,
            stock: 8,
            descripcion: "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 Standard delivers a sound with incredible dynamic range, warm mids, and a tight punchy bass.",
        },
        {
            nombre: 'ES-339 Figured',
            image:imagenes[11],
            precio:'3,499.00',
            categoria:'ES',
            id:12,
            stock: 8,
            descripcion: "The Gibson ES-339 is a modern classic designed for those seeking the tone and look of an ES-335, but desire a slightly smaller, lighter instrument. Crafted with a maple centerblock, and quarter-sawn spruce bracing, players will be impressed by the lightweight feel and expanded range of tonal capabilities. Equipped with high-end appointments like our hand-wired control assembly with 500K potentiometers and orange drop capacitors. "
        },
        {
            nombre: 'Slim Harpo "Lovell" ES-330',
            image:imagenes[12],
            precio:'2,999.00',
            categoria:'ES',
            id:13,
            stock: 8,
            descripcion: "Legendary blues musician James 'Slim Harpo 'Moore is remembered for his hit songs like ' I'm A King Bee,' 'Baby Scratch My Back,' and 'Shake Your Hips.' His songs have been covered by artists such as The Rolling Stones, The Kinks, and The Yardbirds. His guitar of choice was the Gibson ES-330. Now Gibson USA is proud to recreate his guitar in the form of the Slim Harpo 'Lovell' ES-330.  "
        },
        {
            nombre: '1955 Les Paul Goldtop',
            image:imagenes[13],
            precio:'7,999.00',
            categoria:'LES PAUL STANDARD',
            id:14,
            stock: 8,
            descripcion: "Sergio Vallín is the talented guitarist for Maná (which is Polynesian for 'positive energy'), the most influential Spanish rock band worldwide, and one of the world's most popular bands regardless of language or genre. His new Gibson artist model has the features and performance he requires, including an ultra-light mahogany body with a two-piece plain maple top and a mahogany neck with a rosewood fretboard and '59 Rounded C profile."
        },
        {
            nombre: 'Slash Les Paul Limited 4 Album Edition',
            image:imagenes[14],
            precio:'3,299.00',
            categoria:'LES PAUL STANDARD',
            id:15,
            stock: 8,
            descripcion: "The Slash Les Paul Standard Limited 4 Album Edition was created to commemorate Slash featuring Myles Kennedy & The Conspirators' first studio album with Gibson Records. It features a AAA flamed maple top, a solid mahogany body, and Slash’s personal touches including a 50s neck profile, Gibson Custom BurstBucker™ Alnico 2 pickups, color-coordinated hardware appointments, and hand-wired electronics with Orange Drop® capacitors."
        },
        {
            nombre: 'Slash Les Paul Standard',
            image:imagenes[15],
            precio:'3,199.00',
            categoria:'LES PAUL STANDARD',
            id:16,
            stock: 8,
            descripcion: "Gibson and Slash are proud to present the Slash Collection Gibson Les Paul™ Standard. It represents influential Gibson guitars Slash has used during his career, inspiring multiple generations of players around the world. The Slash Collection of Gibson guitars can be seen live on stage with Slash today. Each Slash Collection Gibson Les Paul Standard features a AAA flamed maple top, a solid mahogany body, and Slash’s personal touches including a 50s neck profile, Gibson Custom BurstBucker™ Alnico 2 pickups, color-coordinated hardware appointments, hand-wired electronics with Orange Drop® capacitors, and a vintage-style brown hardshell case."
        },        
    ]

    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById = (id) =>{
        return cart.find(producto => producto.id === Number(id))
    }
    /* el estado del array de objetos del carrito */
    const [cart, setCart] = React.useState([])

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))
    
    const clearCart = () => {
        setCart([]);
    };

    const removeProductFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const addProductCart = (id, quantity) => {
        if(isInCart(id)){
            setCart(cart.map(product => {
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () =>{
        let total = 0
        cart.forEach((product =>{
            const price = parseFloat(product.precio.replace(',', ''));
            total += price * product.quantity
        }))
        return total
    }
    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal,clearCart, removeProductFromCart}} >
            {children}
        </Context.Provider>
    )

}

export const useCustomContext = () => useContext(Context)

export default ContextProvider