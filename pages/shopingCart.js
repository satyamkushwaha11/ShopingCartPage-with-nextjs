import react, { useState, useEffect, useRef } from "react"
import style from '../styles/Cart.module.css'

export default function cart() {
    const [item, setitem] = useState([])
    const [total, settotal] = useState(0)
    
    var count = useRef(0)



    const additems = async () => {
        let itemname = document.getElementById('itemName').value;
        let itemPrice = document.getElementById('itemPrice').value;
        var s = {}
        s["iName"] = itemname;
        s["iPrice"] = Number(itemPrice);
        s['unit'] = 1
        setitem([...item, s])
        document.getElementById('itemName').value = ''
        document.getElementById('itemPrice').value = ''
    }


    const removeitem = (e, index1) => {
        setitem(item.filter((item, index) => index !== index1))
    }

    const TotalPrice = () => {
        var adding = 0;
        item.length > 0 && item.map((i) => {
            adding = adding + (i['iPrice'] * i['unit']);
        })
        settotal(adding)

    }
    
    const addItemUnit = (e,index1) => {
        
        




    //     item.map((ele,i)=>{
    //         if(i==index1){

    //             ele["unit"]=ele['unit']+1
    //             console.log(item);
    //         }
    //     })
    //     console.log(item,"aft")

    //    setitem(item)
       
    }
    
    console.log(item,'after');

    const minusItemUnit = (e,index) => {


    }



    useEffect(() => {
        TotalPrice()
    
    }, [item]);

    return (
        <>
            <div className={style.navbar}>
                <div className={style.navbar_container} >
                    <a href="#">
                        YOUR CART
                    </a>

                </div>
            </div>


            <div className={style.main_container}>
                <div className={style.addItem_box}>
                    <div className={style.totalCartItem}>
                        <div className={style.totalCartItemtext}>TOTAL ITEMS</div>
                        <div className={style.totalCartItemcount}>
                            {item.length}
                        </div>
                    </div>

                    <form action="#" >
                        <div className={style.addItemInput}>
                            <input id="itemName" type="text" placeholder=" Item name" />
                            <input id="itemPrice" type="text" placeholder=" Price (in ₹)" />
                        </div>
                        <button onClick={() => { additems(); }} >add</button>
                    </form>
                </div>



                <div className={style.allItembox}>
                    <ul type="none" className={style.itemslist}>
                        {item && item.length > 0 && item.map((element, index) => {
                            return (
                                <li key={index}>
                                    <div className={style.itemDetail}>
                                        <span className={style.itemNameBox}>{element["iName"]}</span>
                                        <span>{`₹ ${element["iPrice"]}`}</span>
                                    </div>

                                    <div className={style.totalOfIndividualItem}>
                                        <span>Total</span>
                                        <span><div className={style.totalOfIndividualItemPrice}>₹   {element['iPrice'] * element['unit']}</div></span>
                                    </div>
                                    <div className={style.addUnitBtn}>
                                        <span><button onClick={(e) => minusItemUnit(e, index)}>-</button></span>
                                        <span id={style.unitbtnUnit}>{element["unit"]}</span>
                                        <span><button onClick={(e) => addItemUnit(e, index)} >+</button></span>

                                    </div>
                                    <div className={style.delBtn}>
                                        <button onClick={(e) => removeitem(e, index)}>delete</button>
                                    </div>
                                </li>
                            )
                        }
                        )}



                    </ul>
                </div>
                <div className={style.totalBox}>
                    <div className={style.totalPriceBox}>
                        <div className={style.totalPriceBoxText}>Total =</div>
                        <div className={style.totalPriceBoxTotal}>₹ {total}</div>
                    </div>
                    <div className={style.buybtn}>
                        <button>buy</button>
                    </div>


                </div>





            </div>
        </>
    )
}