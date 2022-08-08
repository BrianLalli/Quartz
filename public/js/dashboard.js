
const getCurrentProject = async () => {

    const res = await fetch('/api/projects', {
        method: 'GET',
    }
    )
    console.log(res)

}

getCurrentProject()