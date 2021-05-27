import Customer from "Core/Domain/Customer/Customer";

interface CustomerRepository {

    get(): Promise<Customer>

}

export default CustomerRepository
