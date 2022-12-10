import React ,{Fragment} from 'react';

class InfoBox extends React.Component{
    render(){
        return(
            <Fragment>
                <div className='p-3 mt-3 bg-dark text-white text-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                            <h5 className='display-4'>Enjoy Your Holiday</h5>
                            <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                
                            </div>
                           

                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default InfoBox;