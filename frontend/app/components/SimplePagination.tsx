import React, { ReactNode, useEffect, useState } from "react";
import './SimplePagination.css';
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

interface SimplePaginationProps {
    data: any;
    type: string;
    itemsPerRow?: number;
    pageNumber: any;
    onNextButtonClicked: any;
    onPreviousButtonClicked: any;
}


const SimplePagination = (props: SimplePaginationProps) => {
    const { data, type, itemsPerRow, pageNumber } = props;
    const { onNextButtonClicked, onPreviousButtonClicked } = props;
    const navigate = useNavigate();
    const onProductCardClicked=(id:number)=>{
        navigate('/movieDetail/' + id)
    }

    return (
        <div className="simple-pagination">
            <div className='container' style={{
                display: "grid",
                gridTemplateColumns: `repeat(${itemsPerRow}, auto)`,
            }}>
                {
                    data && data.map((content: any) => {
                        if (type === 'customer-product') {
                            return (
                                <div
                                    key={content.movie_id}
                                    className="card_container"
                                >
                                    <div onClick={() => onProductCardClicked(content.movie_id)}>
                                        <ProductCard product={content} />
                                    </div>
                                </div>
                            );
                        }
                        return null; // Add a default return if needed for other types
                    })
                }
            </div>
        </div>
    );
}

export default SimplePagination;
