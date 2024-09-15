const Contact = () =>{
    return (
        <div className="mx-auto my-10 p-2 w-6/12 h-full bg-gray-300 text-center rounded-lg">
            <h1 className="text-xl font-bold">This is the demo contact page.</h1>
            <form className="m-4 p-4 ">
                <input className="p-1 m-1  border-2 border-black border-solid rounded-md" placeholder="name"/>
                <input className="p-1 m-1  border-2 border-black border-solid rounded-md" placeholder="message"/>
                <button className="font-semibold text-xl bg-slate-500 text-white m-1 p-1 rounded-lg hover:bg-slate-900">Submit</button>
            </form>
        </div>
    )
}
export default Contact;