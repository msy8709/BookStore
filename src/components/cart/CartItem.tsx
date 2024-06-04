import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Cart } from '../../models/cart.modal';
import Button from '../common/Button';
import Title from '../common/Title';
import { formatNumber } from '../../utils/format';
import CheckIconButton from './CheckIconButton';
import { useAlert } from '../../hooks/useAlert';


interface Props {
    cart: Cart;
    checkedItems: number[];
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
}
const CartItem = ({cart, checkedItems,onCheck, onDelete} : Props) => {
    const {showConfirm} = useAlert();
    const isChecked = useMemo(() => {
        return checkedItems.includes(cart.id);
    }, [checkedItems, cart.id])


    const handleCheck = () => {
        onCheck(cart.id)
    }

    const handleDelete = () => {

        onDelete(cart.id)
    }
    return (
        <CartItemStyle>
            <div className="info">
                <div>
                    <CheckIconButton isChecked={isChecked} onCheck={handleCheck}/>
                </div>
                <div>
                    <Title size="medium">{cart.title}</Title>
                    <p className='summary'>{cart.summary}</p>
                    <p className='price'>{formatNumber(cart.price)}원</p>
                    <p className='quantity'>{cart.quantity}권</p>
                </div>
            </div>
            <Button size="medium" scheme="normal" onClick={handleDelete}>
                장바구니 삭제
            </Button>
        </CartItemStyle>
    );
};

const CartItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    border: 1px solid ${({theme}) => theme.color.border};
    border-radius: ${({theme}) => theme.borderRadius.default};
    padding:12px;

    p{
        padding: 0 0 8px 0;
        margin: 0;
    }
`;
export default CartItem;