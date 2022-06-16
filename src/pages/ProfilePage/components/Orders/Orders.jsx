import React, {useEffect, useState} from 'react'
import commerce from "../../../../lib/Ecommerce";
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import './order.scss'


const Orders = () => {
    const [listOrder, setListOrder] = useState([])
    useEffect(() => {
        commerce.customer
            .getOrders(`${localStorage.getItem("commercejs_customer_id")}`)
            .then((orders) => setListOrder(orders?.data))
    }, [])

    console.log('list', listOrder)


    return (
        <div className='order-side'>
            {
                listOrder?.length === undefined ?
                    <div className='empty-basket'>
                        <h2>Sifarişlərim</h2>

                        <div className="empty-basket-box">
                                <SiHomeassistantcommunitystore className='store-icon'/>
                                <span>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</span>
                        </div>



                    </div>
                :
                <div className='full-basket'>
                    <h2>Sifarişlərim ({listOrder?.length} məhsul)</h2>
                    <div className="all">
                    {listOrder && listOrder.map((el,index)=>(

                        <div key={index} className='each-order'>
                            <div className="img">
                                <img width={177} src={el?.order?.line_items[index]?.image?.url} alt=""/>
                            </div>
                            <div className="order-infos">
                                <div className="date-order">
                                    <p>Sifariş tarixi:</p>
                                    <span>12.04.2020</span>
                                </div>
                                <div className="status">
                                    <p>Status</p>
                                    <span>Yoldadır</span>
                                </div>
                                <div className="count">
                                    <p>Ümumi məbləğ:</p>
                                    <span>{el?.order?.total?.raw} ₼</span>
                                </div>
                                <button>Sifarisin Detallari</button>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
                }
                </div>
                )
            }

            export default Orders