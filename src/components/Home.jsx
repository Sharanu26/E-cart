import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 = "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 = "https://p3.aprimocdn.net/ecco/f6fe7b6e-af6d-46cb-9f4a-b01800d48a1d/130424-51227-o_eCom.png?auto=webp&width=1440&quality=95";
const img3 = "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bdrhins/gallery/in-galaxy-a14-5g-sm-a146-446752-sm-a146bdrhins-534858281?$2052_1641_PNG$";
const img4 = "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/M/MT/MTP/MTP-VD01D-1BV/assets/MTP-VD01D-1BV_Seq1.jpg.transform/main-visual-pc/image.jpg";

const Home = () => {
  const productList = [
    {name:"Mac Book",
      price: 12000,
      imgsrc: img1,
      id:"48274823652957",
    },


    {
      name:"Shoes",
      price: 490,
      imgsrc: img2,
      id:"32472658762865",

    },

    {
      name:"Smartphone",
      price: 15890,
      imgsrc: img3,
      id:"32472658762325865",

    },

    {
      name:"Watch",
      price: 1500,
      imgsrc: img4,
      id:"32472654638762325865",

    }

    
  
  ];

  const dispatch = useDispatch()

  const addToCartHandler = (options)=>{
    dispatch({type:"addToCart",payload:options})
    dispatch({ type: "calculatePrice" })
    toast.success("Added to Cart");
  };
  return <div className="home">
    {
      productList.map(i=>(
        <ProductCard key={i.id} imgsrc={i.imgsrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}/>
      ))
    }
  </div>
};



const ProductCard = ({name,id,price,handler,imgsrc})=>(
  <div className="productCard">
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity: 1,imgsrc})}>Add To Cart</button>
  </div>
)


export default Home