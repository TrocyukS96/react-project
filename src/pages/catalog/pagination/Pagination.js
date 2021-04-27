import React from "react";
import s from './Pagination.module.scss';




function Pagination() {

    return (
        <div className={s.pagination}>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">...</a>
            <a href="#">11</a>
        </div>

    )
}

export default Pagination