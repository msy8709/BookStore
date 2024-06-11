import { useEffect, useState } from "react"

import { Order } from "../models/order.modal"
import { fetchOrder, fetchOrders, order } from "../api/order.api";

export const useOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number|null>(null);
    useEffect(() => {
        fetchOrders().then((orders) => {
            setOrders(orders);
        })
    }, []);

    const selectOrderItem = (orderId: number) => {

        if(orders.filter((item) => item.id === orderId)[0].detail){
            setSelectedItemId(orderId);
            return;
        }
        fetchOrder(orderId).then((orderDetail) => {
            setSelectedItemId(orderId);
            setOrders(
                orders.map((item) => {
                    if(item.id === orderId) {
                        return {
                            ...item,
                            detail: orderDetail,
                        }
                    }
                    return item;
                })

            )
        })
    }
    return {orders,selectOrderItem, selectedItemId};
}