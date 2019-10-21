window.onload = () =>{
    let removeFromCartDom = document.querySelectorAll('.remove-from-cart');
    let bookmarkCodeDom = document.querySelectorAll('.bookmark-symbol');

    for(let i = 0 ; i < removeFromCartDom.length; i++){
        let bookmarkCode = bookmarkCodeDom[i].innerText;
        console.log(bookmarkCode)
        removeFromCartDom[i].addEventListener('click', removeFromCart(bookmarkCode))
    }
}

const removeFromCart = (companyCode) =>{
    return ()=>{
        let host = window.location.host
        fetch(`http://${host}/remove_from_cart/`,{
            method : 'POST',
            body : JSON.stringify(companyCode)
        })
        .then(res=>res.status)
        .then(() =>{
            element = document.querySelector('#company-'+companyCode);
            element.parentNode.removeChild(element);
        })
        .catch(err => console.log("Abey err dekh " + err))
    }
}


