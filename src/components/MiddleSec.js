import style from './MiddleSec.module.css'
import img from '../images/backgroundImg.jpg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'

function MiddleSec() {
    const [phone, setphone] = useState('1')
    return (
        <div className={style.parent}>
            <div className={style.sec1}>
                <img src={img} alt="" />
            </div>
            <div className={style.sec2}>
                <p className={style.heading}>Book a free Trail</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email address"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                    />
                </div>
                <div>

                    <select className="form-select mb-3" aria-label="Default select example">
                        <option selected>Select Course</option>
                        <option value="1">Learn Urdu</option>
                        <option value="2">Learn Arabic</option>
                        <option value="3">Quram Hifz</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Phone Number
                    </label>
                    <PhoneInput
                        country={'us'}
                        value={phone}
                        onChange={(e) => {
                            setphone(e)
                        }}
                        inputProps={{
                            required: true
                        }}
                    />
                </div>
                <div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MiddleSec
