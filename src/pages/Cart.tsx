import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';
import Empty from '../components/common/Empty';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

const Cart = () => {

    const {carts, deleteCartItem, isEmpty} = useCart();

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
                {
                    !isEmpty && (
                        <>
                            <div className="content">
                                {
                                    carts.map((item) => (
                                        <CartItem key={item.id}cart={item} checkedItems={checkedItems} onCheck={handleCheckItem} onDelete={handleItemDelete}/>
                                    ))
                                }
                                
                            </div>
                            <div className="summary">summary</div>
                        </>
                    )
                }
                {isEmpty && (
                    <Empty title="장바구니가 비었습니다" icon={<FaShoppingCart />} description={<>장바구니를 채워보세요.</>}/>
                )}
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