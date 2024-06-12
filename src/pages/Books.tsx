import React from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFilter';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Ppagination from '@/components/books/Pagination';
import BooksSwitcher from '../components/books/BooksViewSwitcher';
import { useBooks } from '../hooks/useBooks';
import Loading from '@/components/common/Loading';
const Books = () => {
    const {books, Pagination, isEmpty, isBooksLoading} = useBooks();

    if (isEmpty) {
        return <BooksEmpty />;
    }

    if (!books || !Pagination || isBooksLoading){
        return <Loading />
    }
    return (
        <div>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <div className='filter'>
                    <BooksFilter />
                    <BooksSwitcher />
                </div>
            
                <BooksList books = {books}/>
                <Ppagination pagination={Pagination}/>
            </BooksStyle>
        </div>
    );
};
const BooksStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    .filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`

export default Books;