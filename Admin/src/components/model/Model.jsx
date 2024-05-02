import './Model.css';
import {useState} from "react";
export default function Model({closeModel,onSubmit}){
    const[updateData,setUpdateData]=useState({
        carName:'',
        brand:'',
        model:'',
        price:'',
        speed:'',
        automatic:'',
        gps:'',
        seatType:'',
        description:'',
    })

    return(
        <div className={'main-model-div'} onClick={(e)=>{
            if(e.target.className===main-model-div){
                closeModel();
            }
        }}>
            <div className={'model-div'}>
                <label htmlFor={'carname'}>Car Name</label>
                <div>
                    <input src={''} alt={''} name={'carname'} className={'model-input'} onChange={e=>setUpdateData({...updateData,carName: e.target.value})}/>
                </div>
                <label htmlFor={'carbrand'}>Car Brand</label>
                <div>
                    <input src={''} alt={''} name={'carbrand'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,carBrand: e.target.value})}/>
                </div>
                <label htmlFor={'carmodel'}>Car Model</label>
                <div>
                    <input src={''} alt={''} name={'carmodel'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,model: e.target.value})}/>
                </div>
                <label htmlFor={'price'}>Price</label>
                <div>
                    <input src={''} alt={''} name={'price'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,price: e.target.value})}/>
                </div>
                <label htmlFor={'speed'}>Speed</label>
                <div>
                    <input src={''} alt={''} name={'speed'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,speed: e.target.value})}/>
                </div>
                <label htmlFor={'automatic'}>Automatic</label>
                <div>
                    <input src={''} alt={''} name={'automatic'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,automatic: e.target.value})}/>
                </div>
                <label htmlFor={'gps'}>Gps</label>
                <div>
                    <input src={''} alt={''} name={'gps'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,gps: e.target.value})}/>
                </div>
                <label htmlFor={'seattype'}>Seat Type</label>
                <div>
                    <input src={'seattype'} alt={''} name={''}  className={'model-input'} onChange={e=>setUpdateData({...updateData,seatType: e.target.value})}/>
                </div>
                <label htmlFor={'description'}>Description</label>
                <div>
                    <input src={''} alt={''} name={'description'}  className={'model-input'} onChange={e=>setUpdateData({...updateData,description: e.target.value})}/>
                </div>
                <div className={'submit-btn-div'}>
                    <button type={"submit"} className={'submit-btn'}  >Submit</button>
                </div>
            </div>
        </div>
    )
}