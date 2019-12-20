document.querySelector('#generate-names').addEventListener('submit', loadNames);

function loadNames(e){
    e.preventDefault();

    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    let url = 'https://uinames.com/api/?';

    if(origin !== ''){
        url += `region=${origin}&`;
    }

    if(genre !== ''){
        url += `gender=${genre}&`;
    }

    if(amount !== ''){
        url += `amount=${amount}`;
    }

    // Fetch Api

    fetch(url)
        .then( response => response.json())
        .then( names => {
            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';
            names.forEach(function(name){
                html += `
                    <li>${name.name}</li>
                `
            });
            html += '</ul>';
            document.querySelector('#result').innerHTML = html;
        })
        .catch( error => console.log(error));

//     // Ajax Call
//     const xhr = new XMLHttpRequest();

//     // Open the connection
//     xhr.open('GET', url, true );

//     xhr.onload = function() {
//         if(this.status === 200) {
//             const names = JSON.parse( this.responseText );
            
//             // Insert Html
//             let html = '<h2>Generated Names</h2>';
//             html += '<ul class="list">';
//             names.forEach(name => {
//                 html += `
//                     <li>${name.name}</li>
//                 `;
//             });
//             html += '</ul>';
//             document.querySelector('#result').innerHTML = html;
//         }
//    }

//    // Send the request
//    xhr.send();


}