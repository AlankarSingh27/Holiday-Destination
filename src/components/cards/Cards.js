import React,{Fragment} from 'react';
import card1 from '../../assets/Images/card1.jpg';
import card2 from '../../assets/Images/card2.jpg';
import card3 from '../../assets/Images/card3.jpg'
import card4 from '../../assets/Images/card4.jpg'


class Card extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="container mt-3">
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card'>
                                <img src={card1} ClassName="image-fluid" alt=""/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Malaysia</h4>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <button className='btn btn-dark btn-sm'>Book Now</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <img src={card2} ClassName="image-fluid" alt=""/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Paris</h4>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <button className='btn btn-dark btn-sm'>Book Now</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <img src={card3} ClassName="image-fluid" alt=""/>
                                <div className='card-body'>
                                    <h4 className='card-title'>India</h4>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <button className='btn btn-dark btn-sm'>Book Now</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <img src={card4} ClassName="image-fluid" alt=""/>
                                <div className='card-body'>
                                    <h4 className='card-title'>Finland</h4>
                                    <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <button className='btn btn-dark btn-sm'>Book Now</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Card;