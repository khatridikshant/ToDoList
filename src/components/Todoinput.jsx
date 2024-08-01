export default function Todoinput(){


    let todo = [
        "Go To Gym",
        "Eat lots of veggies and fruits",
        "Pick Kids From School",
        "Buy lots of toys",
        "Play Chess"
    ]

    return (
       <header>
        <div className="flex h-10">
        <input placeholder="Enter" className="border block w-3/4 px-2 rounded mt-2 mr-2"></input>
        <button className="mt-2 bg-blue-500 hover:bg-blue-950 rounded px-5 text-white font-bold">Add</button>
        </div>
        <div>
            <ul className="list-disc">
                {
                    todo.map(
                            (obj,index) => {
                                return (
                                    <li key={index}>{obj}</li>
                                )
                            }
                    )
                }
            </ul>
        </div>
       </header>
    )
}