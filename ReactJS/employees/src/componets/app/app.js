
import {Component} from 'react'

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


import './app.css';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Art M.', salary: 800, increase: false, like: false, id: 1},
                {name: 'Ira H.', salary: 2000, increase: false, like: true, id: 2},
                {name: 'Nig A.', salary: 1500, increase: false, like: false, id: 3},
            ],

        }
    }
    deleteItem = (id) =>{
        this.setState(({data})=>{
            return {
                data: data.filter(item => item.id !== id),
            }
        });
    }
    addItem = (name, salary) =>{
        const maxId = this.state.data.length > 0 ? Math.max(...this.state.data.map(item => item.id))+1 : 0;

        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: maxId + 1,
        }
        this.setState(({data})=>({
            data: [...data, newItem]
        }));
    }
    render(){
        return (
            <div className="app">
                <AppInfo/>


                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}


export default App;
