export default function Todoinput(props){

    const {todo} = props
    return (
       <header>
        <div className="flex h-10">
        <input placeholder="Enter" className="border block w-3/4 px-2 rounded mt-2 mr-2"></input>
        <button className="mt-2 bg-blue-500 hover:bg-blue-950 rounded px-5 text-white font-bold">Add</button>
        </div>

       </header>
    )
}