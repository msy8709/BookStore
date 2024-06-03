import React from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import BooksFilter from '../components/books/BooksFilter';
import BooksList from '../components/books/BooksList';
import BooksEmpty from '../components/books/BooksEmpty';
import Pagination from '../components/books/Paagination';
import BooksSwitcher from '../components/books/BooksViewSwitcher';
import { useBooks } from '../hooks/useBooks';
const Books = () => {
    const {books, pagination, isEmpty} = useBooks();
    return (
        <div>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <div className='filter'>
                    <BooksFilter />
                    <BooksSwitcher />
                </div>
                
                {!isEmpty &&<BooksList books = {books}/>}
                {isEmpty && <BooksEmpty/>}
                {!isEmpty && <Pagination />}
                
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