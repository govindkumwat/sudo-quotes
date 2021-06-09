document.addEventListener('DOMContentLoaded', ()=>{
    function fetchData() {
        fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=50000')
        .then(resp => resp.json())
        .then(data => renderQuotes(data.quotes))
      }
      function renderQuotes(data) {
          for (const q of data) {

          const quoteUL = document.querySelector('#quote-list');
    
          const quoteLi = document.createElement('li');
          const blockQuote = document.createElement('blockquote');
          const p = document.createElement('p');
          const footer = document.createElement('footer');
          const br = document.createElement('br');
          const hr = document.createElement('hr')
   
          quoteLi.className = 'quote-card';          
          blockQuote.className = 'blockquote';       
          p.className = 'mb-0';                      
          footer.className = 'blockquote-footer';    

    
          p.innerHTML = q.text;
          footer.innerHTML = q.author;
        
    
          blockQuote.append(p, footer, br, hr);
          quoteLi.append(blockQuote);
          quoteUL.append(quoteLi);
          }
       }
    
       fetchData();
    })
