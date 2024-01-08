

export default function Characters() {
    // const assets = new Array(7).fill("test");
    const assets = [{
        name: "",

    }]
    console.log(assets)
    return (
        <div>
            <h1 className="text-lg ml-5 mt-5">Category</h1>
            <div className="lg:w-1/3 w-10/12 mx-auto mt-5 grid grid-cols-2 gap-5">
                {
                    assets.map((asset, key) => {
                        return (
                            <div className="lg:w-[200px] lg:h-[250px] w-[150px] h-[200px] rounded-xl bg-slate-400/80 shadow-md shadow-slate-300">

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}