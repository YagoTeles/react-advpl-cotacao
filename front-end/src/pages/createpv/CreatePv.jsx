import DataTable from "../../components/DataTable/DataTable";
import "./createpv.css"
const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Mike Johnson', age: 45 },
  ];
function CreatePv() {

    return ( 
       <div>
            <div className="create-pv-table">
            <DataTable data={data}/>
            </div>
       </div>
     );
}

export default CreatePv;