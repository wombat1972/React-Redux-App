import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCatImage } from '../actions';

import './catImage.css';

const CatImage = props => {
    // console.log("HEY IM CATIMAGE PROPS", props);

    useEffect(() => {
        props.getCatImage();
      }, [props.getCatImage]);
    
      if (props.isFetching) {
        return <h3>Fetching a cat for ya!</h3>;
      }

    return(
        <div className= 'imgWrap'>
            <h2>Oh look, another cat.</h2>
            <img src={props.catImage} alt="a placeholder img" />
            <button onClick={props.getCatImage} >Get a new Cat!</button>
        </div>
    );
};

const mapStateToProps = state => {
    // console.log(`MSTP: STATE: `, state)
    return {
        catImage: state.image.catImage,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(
    mapStateToProps, 
    { getCatImage }
    )(CatImage);