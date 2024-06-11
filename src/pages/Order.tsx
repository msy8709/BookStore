import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/common/Title';
import { CartStyles } from './Cart';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';
import InputText from '../components/common/InputText';
import { useForm } from 'react-hook-form';
import { Delivery, OrderSheet } from '../models/order.modal';
import FindAddressButton from '../components/order/FindAddressButton';
import { order } from '../api/order.api';
import { useAlert } from '../hooks/useAlert';
interface DeliveryForm extends Delivery{
    addressDetail: string;
}
const Order = () => {
    const location = useLocation();
    const orderDataFromCart = location.state;
    const navigate = useNavigate();
    const {showAlert, showConfirm} = useAlert();
    const {totalQuantity, totalPrice, firstBookTitle} = orderDataFromCart;

    const {register, setValue,handleSubmit, formState: {errors},} = useForm<DeliveryForm>();

    const handlePay = (data: DeliveryForm) => {
        const orderData: OrderSheet = {
            ...orderDataFromCart,
            delivery: {
                ...data,
                address: `${data.address} ${data.addressDetail}`,

            }
        }
        showConfirm("주문을 진행하시겠습니까?", () => {
            order(orderData).then(() => {
                showAlert("주문이 처리되었습니다.");
                navigate("/ordrelist")
            })
        })
    }
    return (
        <>
            <Title size='large'>주문서 작성</Title>
            <CartStyles>
                <div className="content">
                    <div className="order-info">
                        <Title size='medium' color='text'>배송 정보</Title>
                    </div>
                    <form className='delivery'>
                        <fieldset>
                            <label>주소</label>
                            <div className='input'>
                                <InputText inputType='text' {...register("addressDetail", {required:true})}/>
                            </div>
                            <FindAddressButton onCompleted={(address)=> setValue("address", address)} />
                        </fieldset>
                        {errors.address && <p className='error-text'>주소를 입력해주세요.</p>}
                        <fieldset>
                            <label>상세 주소</label>
                            <div className='input'>
                                <InputText inputType='text' {...register("receiver", {required:true})}/>
                            </div>
                        </fieldset>
                        {errors.address && <p className='error-text'>상세 주소를 입력해주세요.</p>}
                        <fieldset>
                            <label>수령인</label>
                            <div className='input'>
                                <InputText inputType='text' {...register("contact", {required:true})}/>
                            </div>
                        </fieldset>
                        {errors.address && <p className='error-text'>수령인을 입력해주세요.</p>}
                        <fieldset>
                            <label>전화번호</label>
                            <div className='input'>
                                <InputText inputType='text' />
                            </div>
                        </fieldset>
                        {errors.address && <p className='error-text'>전화번호를 입력해주세요.</p>}
                    </form>
                    <div className="order-info">
                        <Title size='medium' color='text'>주문 상품</Title>
                        <strong>
                            {firstBookTitle} 등 총 {totalQuantity} 권
                        </strong>
                    </div>
                </div>
                <div className="summary">
                    <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
                    <Button size="large" scheme='primary' onClick={handleSubmit(handlePay)}>결제하기</Button>
                </div>
            </CartStyles>
        </>

    );
};

const OrderStyle = styled.div``
export default Order;