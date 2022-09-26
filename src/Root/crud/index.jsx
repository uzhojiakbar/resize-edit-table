import React, { Component } from "react";
import Users from "../../Mock";
import './style.css'

class Root extends Component {
    state = {
        data: Users,
        selected: '',
    }
    render() {
        let onEdit = (selected) => {
            this.setState({ selected })
        }
        let onCancel = () => {
            this.setState({ selected: null })
        }
        let OnSave = () => {
            let onsave = this.state.data.map((value) => value.id === this.state.selected.id ? this.state.selected : value)
            this.setState({ data: onsave })
            onCancel()
        }
        return (
            <div className="page">
                
                <div className="main">
                    <div border='1'>
                        <div className="row rowtitle">
                            <div className="leftfixed ">ID</div>
                            <div>NAME</div>
                            <div>AGE</div>
                            <div>ADDRESS</div>
                            <div>STATUS</div>
                            <div>NICKNAME</div>
                            <div>UNIV</div>
                            <div>JOB</div>
                            <div className="rightfixed">EDIT</div>
                        </div>
                        <div className="data">
                            {
                                this.state.data.map((value) => (
                                    <div key={value.id}>
                                        {
                                            this.state.selected?.id === value.id ?
                                                <div className="row data-users">
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, id: e.target.value } })} defaultValue={this.state.selected.id} type="text" disabled />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, name: e.target.value } })} defaultValue={this.state.selected.name} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, age: e.target.value } })} defaultValue={this.state.selected.age} type="number" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, Address: e.target.value } })} defaultValue={this.state.selected.Address} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, status: e.target.value } })} defaultValue={this.state.selected.status} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, nick: e.target.value } })} defaultValue={this.state.selected.nick} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, universit: e.target.value } })} defaultValue={this.state.selected.universit} type="text" />
                                                    <input onChange={(e) => this.setState({ selected: { ...this.state.selected, job: e.target.value } })} defaultValue={this.state.selected.job} type="text" />
                                                    <div className=" rightfixed btns ">
                                                        <div className="btnedit">
                                                            <button className="btns-edit btns-edit1" onClick={(e) => OnSave()}>save</button>
                                                            <button className="btns-edit btns-edit2" onClick={onCancel}>cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row data-users">
                                                    <div className="leftfixed idname">{value.id}</div>
                                                    <div>{value.name}</div>
                                                    <div>{value.age}</div>
                                                    <div>{value.Address}</div>
                                                    <div>{value.status}</div>
                                                    <div>{value.nick}</div>
                                                    <div>{value.universit}</div>
                                                    <div>{value.job}</div>
                                                    <div className="btns rightfixed">
                                                        <div>
                                                            <button onClick={(e) => onEdit(value)}>edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <tfoot>

                        </tfoot>
                    </div>
                </div>
            </div>
        )
    }
}
export default Root;