
let items = { array: [] };
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function render()
{
    var itemsList = document.getElementById("items-list");
    
    var itemsListHTML = "";
    items.array.forEach((item, index) => {
        itemsListHTML += `
            <div class="inline-div item-row" style="--border: ${index ? 1 : 0}px">
                <button class="use-button" onclick="deleteItem(${index})">
                    <div class="minus-image"\>
                </button>
                <p class="same-line">${item.name}</p>
                <img class="same-line-right star-range star-image" style="--val: ${item.score * 20}%"\>
            </div>`
    });

    itemsList.innerHTML = itemsListHTML;
}

function init()
{
    const itemsStr = localStorage.getItem('items');
    if (itemsStr)
    {
        console.log(itemsStr);
        items = JSON.parse(itemsStr);
    }
    render();
}

function saveAndRender()
{
    const itemsStr = JSON.stringify(items);
    localStorage.setItem('items', itemsStr);
    render();
}

function addNewItem()
{
    const now = new Date(Date.now());
    const month = now.getMonth();
    const year = now.getFullYear();
    const item =
    {
        name: document.getElementById('item-name').value,
        score: document.getElementById('item-score').value,
        month: month,
        year: year,
    };

    items.array.push(item);
    saveAndRender();
}

function deleteItem(index)
{
    items.array.splice(index, 1);
    saveAndRender();
}


init();