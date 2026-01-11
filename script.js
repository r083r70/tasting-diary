
let items = { array: [] };
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function render()
{
    var itemsList = document.getElementById("items-list");
    
    var itemsListHTML = "";
    items.array.forEach((item, index) => {
        itemsListHTML += `
            <div class="row item-row" style="--border: ${index ? 1 : 0}px">
                <div class="col-1"><button class="delete-button" onclick="deleteItem(${index})"/></div>
                <div class="col-5">${item.name}</div>
                <div class="col-3">${months[item.month]} ${item.year}</div>
                <div class="col-3"">
                    <img class="star-image" style="--val: ${item.score * 20}%">
                </div>
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
        name: this['item-name'].value,
        score: this['item-score'].value,
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