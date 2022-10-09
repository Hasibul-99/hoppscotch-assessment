import React, { Fragment, useContext } from 'react'
import Header from '../Components/Header';
import { sensorTableContext } from "../Context/SourceContext";

export default function Table() {
    const { table } = useContext(sensorTableContext);

    return (
        <Fragment>
            <Header></Header>
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Email</th>
                            <th scope="col">Customer City</th>
                            <th scope="col">Customer Purchase Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table?.length ? <>
                                {
                                    table.map((item, idx) => <tr key={idx}>
                                        <th scope="row">{item.customer_name}</th>
                                        <td>{item.customer_email}</td>
                                        <td>{item.customer_city}</td>
                                        <td>{item.customer_purchase_amount}</td>
                                    </tr>)
                                }
                            </> : ''
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
