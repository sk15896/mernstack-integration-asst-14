import { Link } from "react-router-dom"; 
function CustomerTable({ customers, onDelete })
{

    return (

        <table className="table">

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Phone</th>

                    <th>Company</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    customers.map((customer) => (

                        <tr key={customer._id}>

                            <td>{customer.name}</td>

                            <td>{customer.email}</td>

                            <td>{customer.phone}</td>

                            <td>{customer.company}</td>

                            <td>

                                <td>

<Link to={`/customers/edit/${customer._id}`}>

<button className="editBtn">
Edit
</button>

</Link>

<button
className="deleteBtn"
onClick={()=>onDelete(customer._id)}
>

Delete

</button>

</td>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    )

}

export default CustomerTable;