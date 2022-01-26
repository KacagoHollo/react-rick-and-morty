const Chars = useEffect(() => {
    if (characters === undefined) {
        return <div></div>
    } else {
        return (
            // console.log("Eleget vártál" + characters)
            characters.results.map(p => (
                <div className="card" key={p.name}>
                    <p>{p.name}</p>
                </div>
            ))
        )
    }
}, [characters]);