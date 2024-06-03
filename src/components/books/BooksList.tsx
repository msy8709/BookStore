import React from 'react';
import styled from 'styled-components';
import BookItem from './BookItem';
const BooksList = () => {
    return (
        <div>
            <BooksListStyle>
                <BookItem/>
            </BooksListStyle>
        </div>
    );
};

const BooksListStyle = styled.div``;
export default BooksList;