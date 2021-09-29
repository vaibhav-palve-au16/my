import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';

const MovieCard = (props) => (
    <div >
        <div >
            <img src={props.movie.imageUrl} alt="" />
            <div >
                <h4 >{props.movie.title}</h4>
                <h6 >{props.movie.subtitle}</h6>
                <p style={{fontSize: '14px'}}>{props.movie.description}</p>
            </div>
            <div >
                <div >
                    <div >
                        <StarRating rating={props.movie.rating} />
                    </div>
                    <div >{props.movie.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;