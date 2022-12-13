import React, {useState} from "react";
import './App.css';

function Todo() {

    let d = new Date()

    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    const [Input, GetInput] = useState()
    const [Search, SetSearch] = useState('')
    const [ShowInput, SetInput] = useState([])


    let counter = 0
    return (
        <div className={"main"}>
            <div className={"center"}>
                <div className={"title"}>To do list</div>
                <input type={"text"} onChange={(e) => {
                    SetSearch(e.target.value)

                }} className={"search"}
                       placeholder={"Search"}/>
                <div className={"row"}>
                    <div
                        className={"completed"}>Completed:<span>{ShowInput.map((item, index) => {
                        if (item.status === true) counter++;
                    })

                    }{counter}</span></div>
                    <div className={"All"}>All: <span>{ShowInput.length}</span></div>
                </div>
                <div className={"row1"}>
                    <input id={"test"} type={"text"} className={"AddInput"} onChange={(e) => {
                        GetInput(e.target.value)
                    }} placeholder={"Add new todo"}/>
                    <button className={"AddBtn"} onClick={() => {
                        SetInput((x) => {
                            const temp = [...x]
                            return [...temp, {date: time, title: Input, status: false}]
                        })
                        test.value = ""

                    }}>Add
                    </button>
                </div>

                {ShowInput.filter((item, index) => {
                    return item.title.includes(Search)
                }).map((item, index) => {
                    return (
                        <div className={"rw"} key={index}>
                            Date: {item.date.toString()} Title: {item.title} Status: {item.status.toString()}

                            <input type={"checkbox"} onClick={() => {
                                const status = item.status
                                const MyIndex = ShowInput.indexOf(item)
                                SetInput((prev) => {
                                    const temp = [...prev]
                                    temp[MyIndex].status = !status
                                    console.log(ShowInput)
                                    return temp
                                })
                            }}/>

                            <button onClick={() => {
                                const MyIndex = ShowInput.indexOf(item)
                                SetInput((last) => {
                                    const temp = [...last]
                                    temp.splice(MyIndex, 1)
                                    return temp
                                })
                            }}>Delete
                            </button>
                        </div>

                    )
                })}

                <br/>
            </div>
        </div>
    )
}

export default Todo;
