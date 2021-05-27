import Lab from "./Lab";

interface LabRepository {

    get(): Promise<Lab>
}

export default LabRepository
