                        //  Search Input field  


const searchInput = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))
    
}





                          // display field function 


const displayBook = books => {

    const searchResult = document.getElementById('search-result');

    for (const book of books) {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML =`
            <div class="card">
                <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">

                <div class="card-body">

                    <h5 class="card-title"><strong>Book Name :</strong> ${book.title}</h5>
                    <h6> <strong>Author Name :</strong> ${book.author_name[0]} </h6>
                    <h6> <strong>Publisher :</strong> ${book.publisher[0]} </h6>
                    <h6> <strong>Publisher :</strong> ${book.publish_year[0]} </h6>

                </div>

            </div>
        `;

        

        searchResult.appendChild(div);

    }
}