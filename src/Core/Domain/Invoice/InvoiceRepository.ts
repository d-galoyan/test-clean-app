import Invoice from "./Invoice";

interface InvoiceRepository {

    get(): Promise<Invoice>
}

export default InvoiceRepository
