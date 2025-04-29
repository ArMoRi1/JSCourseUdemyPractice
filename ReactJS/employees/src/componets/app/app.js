import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App(){

    const data = [
        {name: 'Art M.', salary: 800  , increase: false, like: false, id: 1},
        {name: 'Ira H.', salary: 2000 , increase: false, like: true, id: 2},
        {name: 'Nig A.', salary: 1500 , increase: false, like: false, id: 3},
    ];


    return (
      <div className="app">
          <AppInfo/>


          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>

          <EmployeesList data={data}/>
          <EmployeesAddForm/>
      </div>
    );
}


export default App;
