import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';

const Cart = () => {

    const {carts, deleteCartItem} = useCart();

    const [checkedItems, setCheckedItems] = useState<number[]>([30])
    const handleCheckItem = (id: number) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((item) => item !== id))
        } else {
            setCheckedItems([...checkedItems, id])
        }
    }
    const handleItemDelete = (id: number) => {
        deleteCartItem(id)
    }
    return (
        <>
            <Title size="large">장바구니</Title>
            <CartStyles>
                <div className="content">
                    {
                        carts.map((item) => (
                            <CartItem key={item.id}cart={item} checkedItems={checkedItems} onCheck={handleCheckItem} onDelete={handleItemDelete}/>
                        ))
                    }
                    
                </div>
                <div className="summary">summary</div>
            </CartStyles>
        </>
        
    );
};

const CartStyles = styled.div`
    background: none;
    border: 0;
    cursor: pointer;

    svg{
        width: 24px;
        height: 24px;
    }

`;

export default Cart;