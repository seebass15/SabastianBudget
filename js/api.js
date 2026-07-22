async function loadData(){

    const response =
        await fetch("data/mockData.json");

    return await response.json();

}
